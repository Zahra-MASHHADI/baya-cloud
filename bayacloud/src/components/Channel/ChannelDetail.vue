<script setup>
import { ref } from "vue";
import PieChart from "./PieChart.vue";

const display = ref("page");
</script>
<template >
  <!-- Items List -->
  <div
    class="space-y-4 mb-6 flex flex-col lg:h-[60vh] items-center justify-center lg:col-span-2 col-span-full lg:bg-inherit bg-white lg:p-0 p-4 rounded-lg text-center"
  >
    <p>صفحه نمایش شما یا خاموش است یا اتصال به اینترنت قطع شده است!</p>
    <p>لطفا دستگاه خود را بررسی کنید.</p>
    <p class="text-xs text-neutral-400">
      آخرین حضور 2025 اکتبر 11 - شنبه 15:10
    </p>
  </div>

  <!-- Info Cards -->
  <div class="bg-white rounded-lg px-4 lg:col-span-1 col-span-full">
    <div class="flex text-center">
      <span
        class="border-b w-1/2 p-2 pt-6 border-neutral-400 cursor-pointer"
        :class="{
          'border-b-2 !border-blue-500 text-blue-500': display === 'page',
        }"
        @click="display = 'page'"
      >
        صفحه بندی
      </span>
      <span
        class="border-b w-1/2 p-2 pt-6 border-neutral-400 cursor-pointer"
        :class="{
          'border-b-2 !border-blue-500 text-blue-500': display === 'setting',
        }"
        @click="display = 'setting'"
      >
        تنظیمات
      </span>
    </div>
    <div v-show="display === 'page'" class="">
      <div>
        <p class="mt-4 mb-2">توضیحات</p>
        <textarea
          rows="4"
          class="w-full rounded-xl border-2 border-neutral-300"
        />
      </div>
      <div>
        <p class="mt-4 mb-2">تگ</p>
        <input class="w-full rounded-xl py-4 border-2 border-neutral-300" />
      </div>
      <div class="my-4 space-y-5">
        <!-- <div
              class="col-span-full px-2 py-4 rounded-t-xl bg-blue-100/50 border border-neutral-200"
            >
            اندازه نمایشگر
            </div> -->
        <div class="flex px-2 py-4 justify-between">
          <div class="">اندازه نمایشگر</div>
          <div class="text-neutral-500 text-sm">1920x1080</div>
        </div>
        <div
          class="flex px-2 py-4 justify-between bg-blue-100/50 border-1 border-blue-200 rounded-xl"
        >
          <div class="">
            <p>230</p>
            <p class="text-xs text-neutral-500">فضای دستگاه</p>
          </div>
          <PieChart />
        </div>
        <div class="flex gap-4 justify-between">
          <div
            class="w-1/2 px-2 py-4 bg-blue-100/50 border-1 border-blue-200 rounded-xl"
          >
            <p>GB 3.8</p>
            <p class="text-xs text-neutral-500">حافظه</p>
          </div>
          <div
            class="w-1/2 px-2 py-4 bg-blue-100/50 border-1 border-blue-200 rounded-xl"
          >
            <p>26.0 ℃</p>
            <p class="text-xs text-neutral-500 capitalize">دمای cpu</p>
          </div>
        </div>
        <div class="flex gap-4 justify-between">
          <div
            class="w-1/2 px-2 py-4 bg-blue-100/50 border-1 border-blue-200 rounded-xl"
          >
            <p>نیست</p>
            <p class="text-xs text-neutral-500">دمانی جی پی یو</p>
          </div>
          <div
            class="w-1/2 px-2 py-4 bg-blue-100/50 border-1 border-blue-200 rounded-xl"
          >
            <p>1.1.18</p>
            <p class="text-xs text-neutral-500 capitalize">ورژن اپلیکیشن</p>
          </div>
        </div>
           <div class="my-4">
            <div class="col-span-full px-2 py-4 rounded-t-xl bg-blue-100/50 border  border-neutral-200">
                اطلاعات کلی
            </div>
            <div class="flex px-2 py-4 border border-t-0 border-neutral-300">
              <div class="w-1/2">
                  شماره محتوا
              </div>
              <div class="w-1/2">
                  2345
              </div>
            </div>
            <div class="flex px-2 py-4 border border-t-0 border-neutral-300">
              <div class="w-1/2">
                   مجموع نمایش
              </div>
              <div class="w-1/2">
                  0:00:00
              </div>
            </div>
            <div class="flex px-2 py-4 border border-t-0 rounded-b-xl border-neutral-300">
              <div class="w-1/2">
                  استفاده با 
              </div>
              <div class="w-1/2">
                  هیچ کانال
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>