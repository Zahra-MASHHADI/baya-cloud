<script setup>
import { ref } from "vue";

const props = defineProps({
    item: Object,
});

const emit = defineEmits(["delete", "play", "download", "toggleFavorite"]);


</script>
<template>
    <div class="bg-white rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <div class="flex items-center justify-between">
            <!-- Right - Title & Status -->
            <div class="flex items-center gap-4">
                <!-- Thumbnail Icon -->
                <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg class="size-7" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="16" y="8" width="32" height="48" rx="10" stroke="#002B2B" stroke-width="4" />
                        <rect x="6" y="16" width="10" height="32" rx="5" stroke="#002B2B" stroke-width="4" />
                        <rect x="48" y="16" width="10" height="32" rx="5" stroke="#002B2B" stroke-width="4" />
                        <path
                            d="M36 22V34.5C36 38 33 40 30 40C27 40 25 38 25 35.5C25 33 27 31 30 31C31.5 31 33 31.7 34 32.8V22H36Z"
                            fill="none"
                            stroke="#002B2B"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div class="text-right">
                    <h3 class="text-lg font-bold text-gray-800 mb-1">{{ item.title }}</h3>
                    <span class="text-sm px-3 py-1 rounded-full inline-block" :class="item.status ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'">
                        {{ item.status ? 'منتشر شده' : 'منتشر نشده' }}
                    </span>
                </div>
            </div>
      
            <!-- Center - Avatars -->
            <div class="lg:flex hidden items-center gap-4">
    
                <div class="flex items-center">
                    <div v-for="(avatar, index) in item.avatars.slice(0, 3)" :key="index" class="relative  flex items-center justify-center rounded-full border-2 border-neutral-100 dark:border-neutral-700 size-12" :class="[index !== 0 && `!-ms-7 z-[${index}]` , ` ${avatar.color}`]" >
                       <p class="capitalize text-xl"> 
                        {{ avatar.name }}
                       </p>
                    </div>
                   
                <div v-if="item.avatars.length > 3">
                    
                    <div

                        class="flex justify-center !-ms-7 z-[4] items-center border-2 border-neutral-100 rounded-full shadow-md shadow-neutral-400 bg-neutral-200 dark:bg-neutral-700 size-12 relative "
                    >
                        <p class=" font-bold text-xs flex justify-center items-center ">
                            +{{ item.avatars.slice(2 , item.avatars.slice(2,2).length - 1).length }}
                        </p>
                    </div>
                </div>
                </div>

            </div>
            <div class="lg:flex hidden items-center gap-4">
                <div class="flex items-center">
                    <div v-for="(avatar, index) in item.pictures.slice(0, 3)" :key="index" class="relative" :class="[index !== 0 && `!-ms-7 z-[${index}]`]" >
                        <img :src="avatar" :alt="`Avatar ${index + 1}`" class="size-12 rounded-full border-2 border-white object-cover " />
                    </div>
                   
                <div v-if="item.pictures.length > 3">
                    
                    <div

                        class="flex justify-center !-ms-7 z-[4] items-center border-2 border-neutral-100 rounded-full shadow-md shadow-neutral-400 bg-neutral-200 dark:bg-neutral-700 size-12 relative "
                    >
                        <p class=" font-bold text-xs flex justify-center items-center ">
                            +{{ item.pictures.slice(2 , item.pictures.slice(2,2).length - 1).length }}
                        </p>
                    </div>
                </div>
                </div>

            </div>

            <!-- Action Icons -->
            <div class="flex gap-2 items-center justify-end">
                <button class="lg:p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer" @click.stop="item.like = !item.like">
                    <svg class="size-8" fill="none" :class="[item.like ? 'stroke-yellow-500 fill-yellow-500' : 'stroke-black']" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                </button>
                <button class="lg:p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <svg
                        class="size-8"
                        fill="#000000"
                        height="200px"
                        width="200px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="-51.2 -51.2 614.40 614.40"
                        xml:space="preserve"
                        transform="matrix(-1, 0, 0, -1, 0, 0)rotate(45)"
                        stroke="#000000"
                        stroke-width="14.848029">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="57.34411200000001"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <path
                                        d="M508.788,174.522c-3.286-5.89-8.671-10.149-15.16-11.991l-56.983-16.167c-4.474-1.267-9.127,1.328-10.397,5.801 c-1.268,4.473,1.328,9.127,5.801,10.397l56.983,16.167c4.466,1.267,7.068,5.931,5.8,10.396l-68.876,242.749 c-0.614,2.164-2.034,3.958-3.997,5.053s-4.235,1.359-6.312,0.772l-67.876-20.056h34.388c13.926,0,25.254-11.328,25.254-25.254 V82.413c0-13.926-11.328-25.254-25.254-25.254H129.831c-13.926,0-25.254,11.328-25.254,25.254v309.978 c0,13.926,11.328,25.254,25.254,25.254h37.195l-70.595,20.03c-2.163,0.614-4.436,0.35-6.4-0.747 c-1.963-1.095-3.383-2.89-3.997-5.053l-68.876-242.75c-1.267-4.466,1.335-9.128,5.801-10.396l58.857-16.699 c4.473-1.269,7.069-5.924,5.801-10.397c-1.269-4.473-5.925-7.068-10.396-5.801l-58.858,16.699 C4.967,166.333-2.839,180.324,0.962,193.72L69.836,436.47c1.842,6.49,6.1,11.874,11.991,15.16 c3.814,2.128,8.017,3.212,12.268,3.212c2.314,0,4.643-0.322,6.931-0.971l127.681-36.226h59.654l122.606,36.226 c2.289,0.65,4.616,0.971,6.931,0.971c4.25,0,8.454-1.084,12.267-3.212c5.891-3.286,10.149-8.67,11.991-15.16L511.03,193.72 C512.872,187.231,512.076,180.413,508.788,174.522z M289.423,400.809H129.831c-4.642,0-8.418-3.777-8.418-8.418V82.413 c0-4.642,3.776-8.418,8.418-8.418h252.331c4.641,0,8.418,3.776,8.418,8.418v309.978c0,4.642-3.777,8.418-8.418,8.418h-92.643 C289.487,400.809,289.455,400.809,289.423,400.809z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <button class="lg:p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <svg class="size-8" fill="none" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            stroke="currentColor"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" stroke="currentColor" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <button class="lg:p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                    <svg class="size-8 stroke-red-500" fill="none" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
