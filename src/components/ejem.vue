<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      ></v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
          { text: 'ID Catedrático', value: 'idCatedratico' },
          { text: 'Nombre', value: 'catedratico.nombre' },
          { text: 'Apellido', value: 'catedratico.apellido' },
          { text: 'Departamento', value: 'catedratico.departamento' }
        ],
        items: []
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      async loadData() {
        try {
          const response = await fetch('/path/to/catedraticos.json')
          this.items = await response.json()
        } catch (error) {
          console.error('Error loading JSON data:', error)
        }
      }
    }
  }
  </script>
  