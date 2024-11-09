<template>
  <v-container>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="catedratico in filteredCatedraticos"
        :key="catedratico.idCatedratico"
      >
        <v-expansion-panel-title>
          {{ catedratico.nombre }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-data-table
            :headers="headers"
            :items="catedratico.clases"
            :sortable="true"
            hide-default-footer
          ></v-data-table>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  props: {
    searchQuery: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      headers: [
        { title: 'Código', value: 'code' },
        { title: 'Clase', value: 'class' },
        { title: 'Sección', value: 'section' },
        { title: 'Estado', value: 'grade_status' },
        { title: 'Fecha', value: 'date' }
      ],
      catedraticos: [] // Almacena todos los registros
    };
  },
  computed: {
    filteredCatedraticos() {
      // Si `searchQuery` está vacío, devuelve todos los registros
      if (!this.searchQuery) {
        return this.catedraticos;
      }
      // Filtra los registros que coinciden con el término de búsqueda
      return this.catedraticos.filter(catedratico =>
        catedratico.nombre?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await fetch('/Listitem.json');
        this.catedraticos = await response.json();
      } catch (error) {
        console.error('Error loading JSON data:', error);
      }
    }
  }
};
</script>
