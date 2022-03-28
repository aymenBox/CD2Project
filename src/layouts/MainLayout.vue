<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar class="q-mr-xs">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>citoyen
          <!-- create three buttons  to the right-->
          <!--these buttons are floating to the right -->
          <ProfileAvatarMenu></ProfileAvatarMenu>
          <q-btn
            class="float-right"
            flat
            color="white"
            icon="map"
            label="Map"
            @click="$router.replace('/map')"
          />
          <q-btn
            class="float-right"
            flat
            color="white"
            icon="sell"
            label="publicité"
            @click="$router.replace('/publicite')"
          />
          <q-btn
            class="float-right"
            flat
            color="white"
            icon="tips_and_updates"
            label="Suggestions"
            @click="$router.replace('/suggestions')"
          />
          <q-btn
            class="float-right"
            flat
            color="white"
            icon="calendar_month"
            label="calendrier"
            @click="$router.replace('/calendrier')"
          />
          <q-btn
            class="float-right"
            flat
            color="white"
            icon="newspaper"
            label="nouvelles"
            @click="$router.replace('/nouvelles')"
          />
          <q-btn
            class="float-right"
            flat
            color="white"
            icon="admin_panel_settings"
            label="Administration"
            @click="$router.replace('/administration')"
          />

          <!-- recreate buttons starting with map -->
          <!-- redirect to administration page -->

          <!--these buttons are floating to the right -->
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from 'vue'
import { ProfileAvatrMenu } from 'components/ProfileAvatarMenu'
import ProfileAvatarMenu from 'src/components/ProfileAvatarMenu.vue'

export default defineComponent({
  name: "MainLayout",
  setup() {
  },
  components: { ProfileAvatarMenu }
})
</script>
