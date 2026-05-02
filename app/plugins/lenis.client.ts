import Lenis from '@studio-freight/lenis'
import AOS from 'aos'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  // Sinkronisasi AOS dengan Lenis agar animasi jalan saat disekrol
  lenis.on('scroll', () => {
    AOS.refresh()
  })

  // Memaksa AOS untuk melakukan refresh 1 frame setelah Nuxt selesai mounting
  // Ini memperbaiki isu dimana animasi di Hero section tidak jalan saat halaman pertama kali direfresh
  nuxtApp.hook('app:suspense:resolve', () => {
    setTimeout(() => {
      AOS.refreshHard()
    }, 100)
  })

  // Alternatif pengaman saat halaman sudah sepenuhnya dimuat
  window.addEventListener('load', () => {
    setTimeout(() => {
      AOS.refreshHard()
    }, 100)
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Provide lenis instance to the app so we can use it in components (e.g. for anchor scrolling)
  return {
    provide: {
      lenis
    }
  }
})
