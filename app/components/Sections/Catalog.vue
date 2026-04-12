<template>
  <section id="catalog" class="scroll-mt-[var(--header-height)] py-16 md:py-24 bg-[#F6F3F2]">
    <div class="container mx-auto px-4">
      <div class="flex flex-col gap-2 md:gap-4">
        <h5 class="font-heading font-semibold text-red-900 tracking-wide">THE DIGITAL CURATOR</h5>
        <h2 class="text-3xl md:text-5xl font-heading font-black mb-10 md:mb-16">Katalog Pilihan</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="item in catalogItems" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300">
          <img :src="item.image" alt="Product Image" class="w-full h-80 object-cover">
          <div class="flex flex-col justify-between p-8 h-52">
            <div class="">
              <h3 class="text-xl font-heading font-bold mb-1">{{ item.name }}</h3>
              <p class="font-sans text-gray-600 mb-4">{{ item.description }}</p>
            </div>
            <div>
              <a :href="item.url" class="flex items-center gap-1 text-base font-sans font-bold text-red-500 hover:text-red-700">
                <span>Explore</span>
                <Icon name="mdi:arrow-right" size="22" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      catalogItems: [
        {
          id: 1,
          name: "Daging & Iga Sapi",
          description: "Potongan daging sapi berkualitas tinggi, segar dan sehat.",
          image: "/images/catalog/catalog-1.webp",
          url: "https://shopee.co.id/brothermeatshop?shopCollection=157743704#product_list"
        },
        {
          id: 2,
          name: "Frozen Food",
          description: "Olahan daging berkualitas tinggi, praktis dan tetap menjaga nutrisi utama.",
          image: "/images/catalog/catalog-2.webp",
          url: "https://shopee.co.id/brothermeatshop?page=0&shopCollection=157743548"
        },
        {
          id: 3,
          name: "Bumbu & Saus",
          description: "Rempah dan saus pilihan untuk menyempurnakan setiap hidangan daging Anda.",
          image: "/images/catalog/catalog-3.webp",
          url: "https://shopee.co.id/brothermeatshop?page=0&shopCollection=243914479"
        },
      ]
    }
  }
}
</script>