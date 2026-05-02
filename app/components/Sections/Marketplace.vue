<template>
  <section id="marketplace" class="scroll-mt-[var(--header-height)] py-16 md:py-24 bg-[#FCF9F8]">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
      <div class="w-full md:w-1/2 flex flex-col gap-8">
        <h2 data-aos="fade-up" data-aos-delay="0" class="text-3xl md:text-5xl font-heading font-black">Tersedia di Marketplace Favorit</h2>
        <p data-aos="fade-up" data-aos-delay="150" class="font-sans text-gray-600 text-lg">Pesan sekarang melalui platform e-commerce terpercaya
          untuk kemudahan pengiriman dan berbagai promo menarik.</p>
        <div class="flex flex-col md:flex-row gap-4 md:gap-6">
          <a data-aos="fade-up" data-aos-delay="300" href="https://shopee.co.id/brothermeatshop" target="_blank" class="flex items-center justify-between bg-orange-600 text-white rounded-xl p-5 w-full">
            <div class="flex items-center gap-4">
              <img src="/icons/shopee.svg" alt="Shopee Logo" class="size-8 text-white">
              <p class="font-medium text-lg">Shopee</p>
            </div>
            <Icon name="mdi:open-in-new" size="22" />
          </a>
          <a data-aos="fade-up" data-aos-delay="450" href="https://www.tokopedia.com/brothermeatshop" target="_blank" class="flex items-center justify-between bg-green-600 text-white rounded-xl p-5 w-full">
            <div class="flex items-center gap-4">
              <img src="/icons/tokopedia.svg" alt="Tokopedia Logo" class="size-8 text-white">
              <p class="font-medium text-lg">Tokopedia</p>
            </div>
            <Icon name="mdi:open-in-new" size="22" />
          </a>
        </div>
      </div>
      <div ref="statsContainer" data-aos="fade-up" data-aos-delay="200" class="w-full md:w-1/2 flex justify-center">
        <div class="grid grid-cols-2 md:grid-cols-2 gap-12 md:gap-16 w-3/4 md:w-auto">
          <div data-aos="zoom-in" data-aos-delay="200" class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">{{ displayFollowers }}K</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Followers</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300" class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">{{ displayProducts }}K</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Produk</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">{{ displayRating }}</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Rating</div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500" class="text-center">
            <div class="text-3xl md:text-5xl font-extrabold font-heading text-red-600 mb-1 md:mb-2">{{ displayReviews }}M</div>
            <div class="text-base font-bold text-gray-500 dark:text-gray-500">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const statsContainer = ref(null)

// Target values
const targets = {
  followers: 278,
  products: 1.8,
  rating: 5.0,
  reviews: 1.2
}

// Display values
const displayFollowers = ref(0)
const displayProducts = ref(0.0)
const displayRating = ref(0.0)
const displayReviews = ref(0.0)

// Flag to track if animation has run
const hasAnimated = ref(false)

const animateValue = (refVar, start, end, duration, isFloat = false) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    // Easing function: easeOutExpo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    const currentVal = start + easeProgress * (end - start);
    
    if (isFloat) {
      refVar.value = currentVal.toFixed(1);
    } else {
      refVar.value = Math.floor(currentVal);
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      // Ensure final value is exact
      refVar.value = isFloat ? end.toFixed(1) : end;
    }
  };
  window.requestAnimationFrame(step);
}

useIntersectionObserver(
  statsContainer,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true;
      
      // Delay counting animation to sync with AOS
      setTimeout(() => {
        animateValue(displayFollowers, 0, targets.followers, 2000);
        animateValue(displayProducts, 0, targets.products, 2000, true);
        animateValue(displayRating, 0, targets.rating, 2000, true);
        animateValue(displayReviews, 0, targets.reviews, 2000, true);
      }, 300); // 300ms delay aligns roughly with the zoom-in animations
    }
  },
  { threshold: 0.3 } // Trigger when 30% of the section is visible
)
</script>
