<template>
  <v-card>
    <v-layout>
      <!-- App Bar -->
      <v-app-bar color="#0082ca" :elevation="2" default>
        <v-toolbar-title>Menú</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      
      <!-- Navigation Drawer -->
      <v-navigation-drawer
        style="background-attachment: fixed;"
        :permanent="true"
        color="#0c1017"
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

      <!-- Main Content -->
      <v-main class="full-height">
        <!-- Breadcrumb and Page Title -->
        <v-card-text>
          <v-breadcrumbs :items="breadcrumbs" divider=">">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item
                :href="item.href"
                :disabled="!item.href"
              >
                {{ item.text }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>

          <h1 class="page-title">{{ pageTitle }}</h1>
        </v-card-text>

        <!-- Search and Filter Section -->
         <v-card>

          <v-row class="d-flex align-center justify-start my-4">
          <v-col cols="12" sm="8" md="6" lg="4">
            <!-- Label on top of the search field -->
            <!-- <div class="mb-2">Buscar por catedrático</div> -->
            <v-text-field
              v-model="searchquery"
              variant="outlined"
              label="Buscar por catedrático"
              dense
              clearable
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>


            <v-col cols="12" sm="8" md="6" lg="4">
              <v-combobox
                v-model="selectedCareers"
                :items="comboboxitem"
                label="Selecciona una carrera"
                item-title="career_name"
                item-value="career_id"
                chips
                multiple
                clearable
              ></v-combobox>
            </v-col>
          </v-row>
      </v-card>

        <!-- List Component -->
        <Listitem :searchQuery="searchquery"></Listitem>
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
    searchquery: '', 
    selectedCareers: [], 
    pageTitle: 'Listado de Aprobaciones', // Set your current page title here
    breadcrumbs: [
      { text: 'Aprobador de Notas', href: '/' },
      { text: '2024 '},
      { text: 'I Periodo '},
      { text: 'I Parcial '}
    ]
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

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
}
</style>
