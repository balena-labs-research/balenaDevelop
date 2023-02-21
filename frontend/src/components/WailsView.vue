<template>
  <q-page class="q-pa-lg">
    <q-card flat bordered>
      <div class="justify-between row q-ma-sm no-wrap">
        <div class="col"><cpu-stats /></div>
        <div class="row items-center q-ml-sm">
          <memory-stats />
        </div>
      </div>
    </q-card>

    <div class="row justify-evenly" justify-evenly flex>
      <q-card class="col q-mt-md q-mr-md" flat bordered>
        <div class="absolute-right">
          <q-btn fab flat padding="1px" icon="add" color="secondary" />
        </div>
        <q-item-label class="q-ml-xs text-caption">Containers</q-item-label>
        <q-card-section bordered>
          <div class="text-caption">
            <div>- pi-hole</div>
            <div>- starter-interface</div>
            <div>- python-wifi-connect</div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="col q-mt-md q-mr-md" flat bordered>
        <div class="absolute-right">
          <q-btn fab flat padding="1px" icon="add" color="secondary" />
        </div>
        <q-item-label class="q-ml-xs text-caption">Tunnels</q-item-label>
        <q-card-section bordered>
          <div class="text-caption">
            <div>- pi-hole - 8080:80</div>
            <div>- python-wifi-connect - 9090:9090</div>
          </div>
        </q-card-section>
      </q-card>
      <q-card class="col q-mt-md" flat bordered>
        <div class="absolute-right">
          <q-btn fab flat padding="1px" icon="add" color="secondary" />
        </div>
        <q-item-label class="q-ml-xs text-caption">Local Mounts</q-item-label>
        <q-card-section bordered>
          <div class="text-caption">
            <div>- starter-interface - /app:~/starter-interface</div>
            <div>- python-wifi-connect - /app/db:~/wifi</div>
          </div>
        </q-card-section>
      </q-card>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab color="secondary" icon="add" direction="left" padding="xs">
        <q-fab-action
          color="primary"
          icon="rocket_launch"
          padding="xs"
          label="Launch balenaVirt Device"
        />
        <q-fab-action
          color="primary"
          icon="add_circle"
          padding="xs"
          label="Add Device Manualy"
        />
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CpuStats from 'components/ChartsCpuStats.vue'
import MemoryStats from 'components/ChartsMemoryStats.vue'

export default defineComponent({
  name: 'WailsLayout',

  components: {
    CpuStats,
    MemoryStats
  },

  setup() {
    return {}
  }
})
</script>
