<v-app-bar border="b" class="ps-4" flat>
    <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />

    <v-app-bar-title>Application</v-app-bar-title>

    <template #append>
        <v-btn class="text-none me-2" height="48" icon slim>
        <v-avatar color="surface-light" image="https://cdn.vuetifyjs.com/images/john.png" size="32" />

        <v-menu activator="parent">
            <v-list density="compact" nav>
            <v-list-item append-icon="mdi-cog-outline" link title="Settings" />

            <v-list-item append-icon="mdi-logout" link title="Logout" />
            </v-list>
        </v-menu>
        </v-btn>
    </template>
</v-app-bar>

<v-app-bar color="#0082ca" :elevation="2" prominent default>
    <v-appbar-title>Aprobador de Notas</v-appbar-title>
    <v-spacer></v-spacer>
    <template v-if="$vuetify.display.mdAndUp">
      
    </template>
    <!-- <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
  </v-app-bar>