<script setup>

</script>
<template >
   <div class="grid grid-cols-6 content-start lg:bg-inherit bg-white rounded-lg  xs:p-4 sm:p-4 md:p-4 lg:p-0 p-4 items-center justify-between mb-6">
      <div class="lg:col-span-3 col-span-full flex gap-4">
        <div class="lg:w-3/5 w-full relative ">
          <input
            class="text-lg font-semibold py-3 rounded-xl border-neutral-400 border w-full bg-white px-2 relative"
            placeholder="نام محتوای پخشی"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-3 absolute left-2 top-[40%]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>

        </div>
        
      </div>

      <div class="lg:col-span-2 col-span-3 lg:mt-0 mt-2 items-center gap-4">
        <div class=" items-center gap-2 text-sm text-gray-600"></div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          <span class="text-sm text-gray-600">آنلاین</span>
        </div>
        <div class="text-xs text-gray-400">آخرین آنلاین : 13 مهر - 12:30</div>
      </div>
      <div class="flex lg:col-span-1 col-span-3 lg:mt-0 mt-2 items-center gap-4  justify-end">
        
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
     
       
      </div>
    </div>
</template>

<style >
    
</style>