<template>
  <header class="bg-white shadow font-heading sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-60">
    <div class="container mx-auto px-4 py-6 flex items-center justify-between">
      <a href="#hero" class="flex items-center gap-4">
        <img src="/images/bms-logo.webp" alt="Brother Meat Shop Logo" class="size-10 rounded-full">
        <h1 class="mt-1 text-xl md:text-2xl font-bold">Brother Meat Shop</h1>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-4">
        <ul class="flex space-x-4 uppercase font-bold">
          <li v-for="item in menus" :key="item.name">
            <a :href="item.href" class="text-gray-600 hover:text-gray-900">{{ item.name }}</a>
          </li>
        </ul>
        <a href="https://api.whatsapp.com/send?phone=6281288585585" target="_blank"
          class="ml-6 inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">
          Hubungi Kami
        </a>
      </nav>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none">
          <Icon :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'" size="28" />
        </button>
        <nav v-if="isMenuOpen" class="absolute border border-gray-200 top-16 right-3 mt-2 w-1/2 bg-white rounded-lg shadow-lg py-2">
          <a v-for="item in menus" :key="item.name" :href="item.href" class="block px-4 py-2 text-gray-600 hover:bg-gray-100 font-semibold">{{ item.name }}</a>
          <a href="https://api.whatsapp.com/send?phone=6281288585585" target="_blank" class="block px-4 py-2 text-gray-600 hover:bg-gray-100 font-semibold">Hubungi Kami</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Overlay for mobile navigation -->
  <div v-if="isMenuOpen" class="fixed inset-0 z-40" @click="isMenuOpen = false"></div>

</template>

<script setup>
const isMenuOpen = ref(false);

const menus = [
  { name: 'Certified', href: '#certified' },
  { name: 'Katalog', href: '#catalog' },
  { name: 'Marketplace', href: '#marketplace' },
  { name: 'Offline Store', href: '#offline-store' },
  { name: 'Supplier', href: '#supplier' },
];
</script>