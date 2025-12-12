<script setup>
import {  ref } from "vue";

import MenuContent from "./MenuContent.vue";

const menuDisplay = ref(false);
function showMenu() {
  menuDisplay.value = !menuDisplay.value;
}
</script>
<template>
  <div
    class="col-span-1 border-l lg:bg-blue-50 bg-white border-gray-200 p-4 flex flex-col justify-between"
  >
    <div class="flex flex-col">
      <div class="lg:mb-16 sm:mb-4 flex items-center justify-between">
        <div class="lg:hidden block">
          <!-- mobile menu icon  -->

          <div class="drawer drawer-end">
            <input id="my-drawer-5" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
              <!-- Page content here -->
              <label for="my-drawer-5" class="drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  /></svg
              >
            </label>
            </div>
            <div class="drawer-side">
              <label
                for="my-drawer-5"
                aria-label="close sidebar"
                class="drawer-overlay"
              ></label>
              <div class="menu min-h-full w-46 bg-white">
                <menu-content />
              </div>
            </div>
          </div>
        </div>
        <h1 class="text-4xl font-bold text-center text-blue-500">BAYACLOUD</h1>
        <!-- mobile search icon  -->
        <div class="lg:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div class="space-y-2 text-xl lg:block hidden">
        <MenuContent />
      </div>
    </div>

    <div class="text-center text-sm text-gray-500 mt-8 lg:block hidden">
      <div class="font-medium">V 1.0.1</div>
      <div>Last version</div>
    </div>
  </div>
</template>