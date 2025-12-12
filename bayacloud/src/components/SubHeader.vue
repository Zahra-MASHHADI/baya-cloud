<script setup>
import { ref } from 'vue';

const emit = defineEmits(["openModal"]);
const tabData = ref('all')
function changeTab(item){
  tabData.value = item
  emit('changeTab' , item)
}
</script>
<template>
  <div class="flex items-center flex-wrap flex-col-reverse lg:flex-row lg:text-md text-sm justify-between">
    <!-- Tabs -->
    <div class="flex gap-2 lg:w-fit  w-full font-bold mb-6 px-5">
      <button
      @click="changeTab('all')"
      :class="{'bg-blue-500 text-white' : tabData === 'all'}"
        class="px-6 py-1  border-blue-500 border-1 rounded-xl font-medium cursor-pointer"
      >
        همه
      </button>
      <button
        @click="changeTab('publish')"
        :class="{'bg-blue-500 text-white' : tabData === 'publish'}"
        class="px-6 py-1 text-gray-600 border-blue-500 border-1 rounded-xl cursor-pointer"
      >
        منتشر شده‌ها
      </button>
      <button
        @click="changeTab('drafts')"
        :class="{'bg-blue-500 text-white' : tabData === 'drafts'}"
        class="px-6 py-1 text-gray-600  border-blue-500 border-1 rounded-xl cursor-pointer"
      >
        پیش‌نویس‌ها
      </button>
    </div>
    <!-- Action Buttons -->
    <div class="flex justify-end lg:w-fit w-full gap-3 mb-6 px-5">
      <!-- upload icon  -->
      <button
        class="flex items-center gap-2 px-6 py-2 border-2 border-blue-500 text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="size-6 stroke-blue-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
          />
        </svg>

        <span class="text-blue-500">آپلود</span>
      </button>
      <button
        @click="$emit('openModal')"
        class="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffff"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span>فایل جدید</span>
      </button>
    </div>
  </div>
</template>

<style lang="">
</style>