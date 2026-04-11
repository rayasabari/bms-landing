<template>
  <section id="marketplace" class="scroll-mt-[var(--header-height)] py-16 md:py-24 bg-[#FCF9F8]">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
      <div class="w-full md:w-1/2 flex flex-col gap-8">
        <h2 class="text-3xl md:text-5xl font-heading font-black">Tersedia di Marketplace Favorit</h2>
        <p class="font-sans text-gray-600 text-lg">Pesan sekarang melalui platform e-commerce terpercaya
          untuk kemudahan pengiriman dan berbagai promo menarik.</p>
        <div class="flex flex-col md:flex-row gap-4 md:gap-6">
          <a href="https://www.tokopedia.com/brothermeatshop" target="_blank" class="flex items-center justify-between bg-gray-200 rounded-xl p-5 w-full">
            <div class="flex items-center gap-4">
              <img src="/icons/tokopedia.svg" alt="Tokopedia Logo" class="size-8">
              <p>Tokopedia</p>
            </div>
            <Icon name="mdi:open-in-new" size="22" />
          </a>
          <a href="https://shopee.co.id/brothermeatshop" target="_blank" class="flex items-center justify-between bg-gray-200 rounded-xl p-5 w-full">
            <div class="flex items-center gap-4">
              <img src="/icons/shopee.svg" alt="Shopee Logo" class="size-8">
              <p>Shopee</p>
            </div>
            <Icon name="mdi:open-in-new" size="22" />
          </a>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="grid grid-cols-2 md:grid-cols-2 gap-12 md:gap-16 w-3/4 md:w-auto">
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">278K</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Followers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">1.8K</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Produk</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">5.0</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Rating</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">1.2M</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>