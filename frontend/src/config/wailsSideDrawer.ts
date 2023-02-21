import { computed } from 'vue'

// List of menu items to display in left hand navigation bar
export default computed(() => [
  {
    icon: 'img:boards/rpi4.png',
    label: '937d7c5',
    path: 'device_hub'
  },
  {
    icon: 'img:boards/nuc.png',
    label: 'pi-hole',
    path: 'containerManager'
  },
  {
    icon: 'img:boards/rpi4.png',
    label: '467d7c5',
    path: 'fileManager'
  },
  {
    icon: 'img:boards/rpi4.png',
    label: 'balena-device',
    path: 'networking'
  },
  {
    icon: 'img:boards/opi-zero.png',
    label: '7677a5',
    path: 'configuration'
  },
  { icon: 'img:boards/nuc.png', label: 'Device1', path: 'systemInfo' }
])
