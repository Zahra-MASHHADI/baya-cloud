<script setup>

</script>
<template >
   <div class="grid grid-cols-6 items-center justify-between mb-6">
      <div class="col-span-3 flex gap-4">
        <div class="w-3/5 relative ">
          <input
            class="text-lg font-semibold py-3 rounded-xl border-neutral-400 border w-full bg-white px-2 relative"
            placeholder="نام محتوای پخشی"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3 absolute left-2 top-[40%]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

        </div>
        <div class='w-2/5'>
          <span>کل زمان پخش</span>
          <div class=" px-3 py-1 rounded">
            0:00:44
          </div>
        </div>
      </div>

      <div class=" col-span-2 items-center gap-4">
        <div class=" items-center gap-2 text-sm text-gray-600"></div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span class="text-sm text-gray-600">آنلاین</span>
        </div>
        <div class="text-xs text-gray-400">آخرین آنلاین : 13 مهر - 12:30</div>
      </div>
      <div class="flex items-center gap-4 justify-evenly">
        <!-- eye icon  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <!-- upload icon  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
          />
        </svg>
        <!-- 3 dots icon  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffff"
          viewBox="0 0 24 24"
          stroke-width="4"
          stroke="currentColor"
          class="size-7"
        >
          <path
            stroke-linecap="round"
            fill="#ffff"
            stroke-linejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
</template>

<style >
    
</style>