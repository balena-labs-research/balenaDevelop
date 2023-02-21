<template>
  <electron-layout v-if="$q.platform.is.electron && !onDevice" />
  <captive-portal v-else-if="currentURL.hash == '#/captiveportal'" />
  <pwa-layout v-else-if="quasarMode == 'pwa'" />
  <wails-layout v-else-if="wailsEnv == 'true'" />
  <router-view v-else />
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineAsyncComponent, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    CaptivePortal: defineAsyncComponent(
      () => import('layouts/CaptivePortal.vue')
    ),
    ElectronLayout: defineAsyncComponent(
      () => import('layouts/ElectronLayout.vue')
    ),
    PwaLayout: defineAsyncComponent(() => import('layouts/PwaLayout.vue')),
    WailsLayout: defineAsyncComponent(() => import('layouts/WailsLayout.vue'))
  },
  setup() {
    const $q = useQuasar()

    const currentURL = new URL(window.location.href)
    const onDevice = ref(process.env.ON_DEVICE?.toLowerCase() === 'true')
    const quasarMode = ref(process.env.MODE)
    const wailsEnv = ref(process.env.WAILS)

    // Show loading indicator as early as possible in loading process.
    // Is disabled by the router afterEach function in router/index.ts
    $q.loading.show()

    return { currentURL, onDevice, quasarMode, wailsEnv }
  }
})
</script>
