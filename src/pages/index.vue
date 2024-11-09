<template>
  <v-card>
    <v-layout>
      <v-app-bar color="#0082ca" prominent>
        <!-- Eliminamos el icono de menú -->
        <v-toolbar-title>Menú</v-toolbar-title>
        <v-spacer></v-spacer>
        <template v-if="$vuetify.display.mdAndUp">
          
          <!-- <v-btn icon="mdi-filter" variant="text"></v-btn> -->
        </template>
        <!-- <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
      </v-app-bar>
      
      <v-navigation-drawer
       style="background-attachment: fixed;"
        :permanent="true"
        color="#0c1017"
        :border="round"
        
      >
        <VTreeview
          :items="items"
          open-all
          item-key="id"
          activatable
          open-on-click
          color="primary"
        />
      </v-navigation-drawer>

      <v-main class="full-height">   
        <v-card-text >
          <v-row class="d-flex align-center justify-start my-4 " >
            <v-col cols="12" sm="8" md="6" lg="4"> <!-- Controla el ancho en diferentes pantallas -->
              <v-text-field
                  v-model="searchquery" 
                  label="Buscar"
                  variant="outlined"
                  dense
                  clearable
                  prepend-inner-icon="mdi-magnify" 
                   
              > </v-text-field>
              
            </v-col>
            <v-col cols="14" sm="8" md="6" lg="4">
              <v-combobox
                :items="comboboxitem"
                label="Selecciona una carrera"
                item-title="career_name"
                item-value="career_id"
                chips
                multiple
                clearable
                >
              </v-combobox>
            </v-col>
            
          </v-row>
          <v-divider></v-divider>
          <Listitem :searchQuery="searchquery"></Listitem>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import Listitem from '@/components/Listitem.vue';
import { VTreeview } from 'vuetify/labs/VTreeview';

export default {
  components: {
    VTreeview,
    Listitem
  },
  data: () => ({
    items: [],
    comboboxitem: [],
    searchquery: '' // buscar
    
  }),
  mounted() {
    
    fetch('/ListTime.json')
      .then(response => response.json())
      .then(data => {
        this.items = data; 
      })
      .catch(error => {
        console.error("Error al cargar el catedraticos:", error);
      });

      fetch('/carreras.json')
      .then(response => response.json())
      .then(data => {
        this.comboboxitem = data; 
      })
      .catch(error => {
        console.error("Error al cargar el carreras:", error);
      });
  }
};
</script>

<style scoped>
.full-height {
  height: 100vh;
  background-color: grey-darken-4; 
}
</style>
