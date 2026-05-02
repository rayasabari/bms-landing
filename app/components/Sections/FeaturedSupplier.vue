<template>
  <section id="supplier" class="scroll-mt-[var(--header-height)] bg-white py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="mb-4 md:text-center">
        <h5 data-aos="fade-up" class="font-heading font-semibold text-red-900 tracking-wide">VERIFIED PARTNERS</h5>
        <h2 data-aos="fade-up" data-aos-delay="120" data-aos-duration="1000" class="sm:text-4xl lg:text-5xl mt-3 text-3xl font-black font-heading">
          Supplier Unggulan
        </h2>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        <div v-for="(item, index) in suppliers" :key="item.name" data-aos="fade-up" :data-aos-delay="index * 200" data-aos-duration="850"
          class="col-span-1 flex items-center justify-center rounded-2xl p-4 shadow hover:shadow-md transition duration-300">
          <img class="grayscale transition hover:grayscale-0" :src="item.logo" :alt="item.name + ' Logo'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const suppliers = [
  { name: 'Kanzler', logo: '/images/suppliers/kanzler.webp' },
  { name: 'Fiesta', logo: '/images/suppliers/fiesta.webp' },
  { name: 'Belfood', logo: '/images/suppliers/belfood.webp' },
  { name: 'Bernardi', logo: '/images/suppliers/bernardi.webp' },
  { name: 'Kara', logo: '/images/suppliers/kara.webp' },
  { name: 'Yomas', logo: '/images/suppliers/yomas.webp' },
]
</script>
