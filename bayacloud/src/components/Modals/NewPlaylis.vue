<script setup>
import { ref } from "vue";
    const emit = defineEmits(['closeModal'])
const selectedTab = ref("media");
</script>
<template>
  <div class="bg-neutral-100 lg:w-1/2 w-full rounded-xl p-4 px-8 max-w-none modal-box">
    <div class="flex justify-between border-b-2 pb-4 border-neutral-400">
      <span> پلی لیست جدید </span>
      <svg @click="$emit('closeModal')" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

    </div>
    <div
      class="flex w-full text-center font-bold text-neutral-400 pt-6 text-xl"
    >
      <div
        class="w-1/2 border-b-2 cursor-pointer pb-4"
        @click="selectedTab = 'media'"
        :class="[
          selectedTab === 'media'
            ? 'border-b-3 border-blue-500 text-blue-400'
            : 'border-neutral-400',
        ]"
      >
        مدیا
      </div>
      <div
        class="w-1/2 border-b-2 cursor-pointer pb-4"
        @click="selectedTab = 'link'"
        :class="[
          selectedTab === 'link'
            ? 'border-b-3 border-blue-500 text-blue-400'
            : 'border-neutral-400',
        ]"
      >
        لینک
      </div>
    </div>
    <div>
      <p class="py-2">جست و جو</p>
      <input
        type="text"
        class="rounded-xl ring-2 ring-neutral-300 w-full p-3 py-4 my-3"
        placeholder="جست و جو کنید"
      />
    </div>
    <div class="text-center py-2">
      <div v-show="selectedTab === 'link'">
        <p class="font-bold text-lg">آیا میخواهید لینک خود را نمایش دهید؟</p>
        <p class="text-neutral-400 py-2">هیچ لینکی اضافه نشده است</p>
        <div class="border-2 w-full border-blue-500 text-blue-500 rounded-2xl cursor-pointer  my-4">

            <label
              class="w-full "
            >
            <input type="file" hidden />
            <p class="w-full py-4">

                اضافه کردن لینک
            </p>
            </label>
        </div>
      </div>
      <div v-show="selectedTab === 'media'" class="lg:text-base text-xs sm:text-xs">
          <div class="grid grid-cols-5 bg-blue-200/50 rounded-t-xl px-4 py-5 text-neutral-600 text-start">
            <p class="col-span-2">
              نام
            </p>
            <p>
              زمان نمایش
            </p>
            <p>
              نوع
            </p>
            <p>
              سایز
            </p>
          </div>
          <div class="grid grid-cols-5 border  border-t-0 mb-2 border-neutral-200 rounded-b-xl px-4 py-5 items-center text-neutral-600 text-start">
            <div class="col-span-2 flex gap-2 items-center">
                <img src="https://picsum.photos/id/1025/500/350" class="rounded-xl lg:size-12 size-8" />
                <span>اسکرین روم</span>
            </div>
            <div class="">
              آفلاین
            </div>
            <div class="">
              12 ثانیه
            </div>
            <div class="">
              62 KB
            </div>
          </div>
      </div>
      <div
        class="flex items-center justify-start text-neutral-400 border-b border-neutral-300 pb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="size-6 stroke-neutral-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        راهنما
      </div>
      <div class="flex w-full gap-4">
        <div
          class="w-1/2 bg-blue-500 text-white rounded-2xl cursor-pointer py-4 my-4"
        >
          ذخیره
        </div>
        <div
        @click="$emit('closeModal')" 
          class="w-1/2 border-2 border-blue-500 text-blue-500 rounded-2xl cursor-pointer py-4 my-4"
        >
          لغو
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>