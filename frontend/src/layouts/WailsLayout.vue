<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <q-header bordered reveal>
        <q-toolbar>
          <q-btn
            size="12px"
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="isLeftDrawerOpen = !isLeftDrawerOpen"
          />

          <q-toolbar-title class="text-center" v-bind="qHeaderStyle.title">
            <div class="text-h6">
              <router-link class="q-pr-xs" to="/">
                <q-avatar square size="sm">
                  <img src="balena.png" />
                </q-avatar>
              </router-link>
              {{ $t('balena_develop.title') }}
            </div>
          </q-toolbar-title>
          <q-btn size="14px" icon="login" round flat dense> </q-btn>
          <div class="text-subtitle1 q-mr-sm">
            {{ $t('balena_develop.login') }}
          </div>
          <q-btn size="14px" icon="sensors" round flat dense> </q-btn>
          <div class="text-subtitle1">{{ $t('balena_develop.scan') }}</div>
        </q-toolbar>
      </q-header>
      <q-drawer v-model="isLeftDrawerOpen" show-if-above :width="200" bordered>
        <div class="q-pa-sm q-ml-xs text-caption">Local Devices:</div>
        <MenuItems
          v-for="link in sideDrawer"
          :key="link.label"
          v-bind="link"
          :active="link.path === currentLink"
          @click="currentLink = link.path"
        />
      </q-drawer>
      <wails-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { loadLanguageAsync } from 'boot/i18n'

import MenuItems from 'components/WailsMainLayoutMenuItems.vue'
import localeOptions from 'src/config/localeOptions'
import sideDrawer from 'src/config/wailsSideDrawer'
import WailsView from 'components/WailsView.vue'
import { qHeaderStyle } from 'src/config/qStyles'
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'WailsLayout',

  components: {
    MenuItems,
    WailsView
  },

  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const $router = useRouter()

    const isChangingLang = ref<boolean>(false)

    // Import and activate language chosen from the selector in the header
    async function changeLang(isoName: string) {
      // Start loading indicator
      isChangingLang.value = true

      // Load the language and set it as the current language
      await loadLanguageAsync(isoName)

      isChangingLang.value = false
    }

    return {
      changeLang,
      currentLink: ref($router.currentRoute.value.name),
      isChangingLang,
      isLeftDrawerOpen: ref<boolean>(false),
      locale,
      localeOptions,
      sideDrawer,
      qHeaderStyle
    }
  }
})
</script>
