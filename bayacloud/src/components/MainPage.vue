<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";

const playlists = ref([
  {
    id: 1,
    title: "پلی لیست",
    status: "بدون کانکت",
    likes: "0",
    dislikes: "3",
  },
  {
    id: 2,
    title: "پلی لیست",
    status: "بدون کانکت",
    likes: "",
    dislikes: "",
  },
  {
    id: 3,
    title: "پلی لیست",
    status: "پابلیش شده",
    likes: "",
    dislikes: "",
  },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50 grid grid-cols-5" dir="rtl">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main Content -->
    <div class="col-span-4">
      <!-- Header -->
      <Header />

      <!-- Action Buttons -->
      <div class="flex justify-end gap-3 mb-6 px-8 ">
        <!-- upload icon  -->
        <button
        class="flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors"
        >
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>

      <span class="text-cyan-500">آپلود</span>
    </button>
    <button
      class="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-2xl hover:bg-cyan-600 transition-colors"
    >
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      <span>فایل جدید</span>
    </button>
      </div>

      <!-- Tabs -->
      <div class="flex gap-2 font-bold mb-6 px-8">
        <button
          class="px-6 py-1 text-white bg-cyan-500 border-cyan-500 border-1 rounded-xl font-medium"
        >
          همه
        </button>
        <button
          class="px-6 py-1 text-gray-600 hover:text-gray-900  border-cyan-500 border-1 rounded-xl "
        >
          منتشر شده‌ها
        </button>
        <button
          class="px-6 py-1 text-gray-600 hover:text-gray-900  border-cyan-500 border-1 rounded-xl"
        >
          پیش‌نویس‌ها
        </button>
      </div>

      <!-- Playlist Items -->
      <div class="space-y-4">
        <div
          v-for="item in playlists"
          :key="item.id"
          class="bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
        >
          <div class="flex items-center gap-4 flex-1">
            <!-- Action Icons -->
            <div class="flex gap-2">
              <button
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>

              <button
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              <button
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>

              <button
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </div>

            <!-- Content -->
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium text-gray-900">{{ item.title }}</h3>
                  <p class="text-sm text-gray-500">{{ item.status }}</p>
                </div>

                <div class="flex items-center gap-8 text-sm text-gray-500">
                  <div class="flex items-center gap-2">
                    <span>{{ item.likes }} لایک</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span>{{ item.dislikes }} دیسلایک</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Thumbnail -->
            <div
              class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
