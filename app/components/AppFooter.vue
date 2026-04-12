<template>
  <footer class="bg-gray-900 py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-start justify-between gap-12">
        <div class="w-full md:w-1/2">
          <div class="flex items-center gap-4 mb-5">
            <img src="/images/bms-logo.webp" alt="Brother Meat Shop Logo" class="size-10 rounded-full grayscale">
            <h2 class="text-xl md:text-2xl font-bold font-heading text-gray-300">Brother Meat Shop</h2>
          </div>
          <p class="font-sans text-gray-400">Distributor dan supplier daging maupun frozen food berkualitas di Jakarta, menghadirkan standar kualitas bintang lima langsung ke rumah Anda.</p>
          <Credits class="hidden md:block mt-5" />
        </div>
        <div class="w-full md:w-1/3">
          <h3 class="text-xl md:text-2xl font-heading text-gray-300 font-bold mb-5">Social Media</h3>
          <div class="flex items-center gap-2">
            <div v-for="item in socialMedia" :key="item.name"
              class="flex items-center justify-center bg-gray-700 hover:bg-gray-600 shadow-md hover:shadow-lg transition transition-duration-300 rounded-full p-2">
              <a :href="item.url" target="_blank" class="flex items-center justify-center">
                <Icon :name="item.icon" size="32" class="text-gray-400 hover:text-gray-300 transition duration-300" />
              </a>
            </div>
          </div>
          <p class="flex items-center font-sans text-gray-400 text-sm mt-6">Copyright &copy; 2026 Brother Meat Shop</p>
          <Credits class="md:hidden mt-1" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Credits from './Credits.vue';

const socialMedia = [
  { name: 'Instagram', icon: 'tabler:brand-instagram', url: 'https://www.instagram.com/brothermeatshop' },
  { name: 'Facebook', icon: 'tabler:brand-facebook', url: 'https://www.facebook.com/brothermeatshop.id/' },
  { name: 'TikTok', icon: 'tabler:brand-tiktok', url: 'https://www.tiktok.com/@brothermeatshop' },
  { name: 'YouTube', icon: 'tabler:brand-youtube', url: 'https://www.youtube.com/channel/UCzSgJ0ZddV-5V36Bahg3BVA' },
  { name: 'Whatsapp', icon: 'tabler:brand-whatsapp', url: 'https://api.whatsapp.com/send?phone=6281288585585' },
]
</script>