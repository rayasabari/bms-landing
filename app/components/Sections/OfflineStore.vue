<template>
  <section id="offline-store" class="scroll-mt-[var(--header-height)] py-16 md:py-24 bg-[#F6F3F2]">
    <div class="container mx-auto px-4">
      <div class="flex flex-col-reverse md:flex-row md:items-stretch">
        <div class="w-full md:w-6/12 bg-gray-400 rounded-b-xl md:rounded-l-xl md:rounded-br-none overflow-hidden">
          <div class="w-full h-96 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.298793202601!2d106.810367!3d-6.355354500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efc8057b0b73%3A0x5a40904a4db93b79!2sBrother%20Meat%20Shop!5e0!3m2!1sen!2sid!4v1775912467943!5m2!1sen!2sid"
              width="100%" height="100%" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="w-full md:w-6/12 p-8 md:py-12 md:px-16 bg-white rounded-t-xl md:rounded-r-xl md:rounded-tl-none">
          <h2 class="text-2xl md:text-4xl font-heading font-black mb-8">Kunjungi Galeri Kami</h2>
          <div class="flex flex-col gap-8">
            <div class="flex items-start gap-6">
              <div class="hidden md:flex items-center justify-center bg-rose-200 px-3 py-1 rounded-lg size-12">
                <Icon name="material-symbols:location-on-outline" size="24" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="material-symbols:location-on-outline" size="24" class="text-red-600 md:hidden" /> Alamat Utama
                </h3>
                <p class="text-gray-500 mb-1">Jl. Moch. Kahfi II No.56 RT.10/RW.9</p>
                <p class="text-gray-500 mb-1">Jagakarsa, Jakarta Selatan 12640</p>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="hidden md:flex items-center justify-center bg-blue-200 px-3 py-1 rounded-lg size-12">
                <Icon name="mdi:clock-time-four-outline" size="23" />
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2 flex items-center gap-2">
                  <icon name="mdi:clock-time-four-outline" size="24" class="text-blue-600 md:hidden" /> Jam Operasional
                </h3>
                <p class="text-gray-500 mb-1">Setiap Hari: 07.00 - 21.00 WIB</p>
                <p class="text-gray-500 mb-1">Instant: batas order 20.00 WIB</p>
                <p class="text-gray-500 mb-1">Same Day: batas order 14.00 WIB</p>
              </div>
            </div>
            <div>
              <button class="mt-4 bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition duration-300">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Brother+Meat+Shop&destination_place_id=ChIJcwt7BfjvaS4ReTu5TUqQQFo&travelmode=driving" target="_blank"
                  class="flex items-center gap-2">
                  <Icon name="tabler:arrow-guide" size="24" class="mb-1" /> Petunjuk Arah
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>