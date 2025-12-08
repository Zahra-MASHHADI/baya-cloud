  <script setup>
  import axios from 'axios';
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
  const playListId = useRoute().params;
  const playlistDetail = ref({})
  onMounted(()=>{
    fetchData()
  });
  async function fetchData(){
    let response = await axios.get(`http://localhost:3000/playlists/${playListId.id}`)
    playlistDetail.value = response.data

  }
  const items = ref([
    {
      id: 1,
      name: 'Logo Brand',
      duration: '۰:۰۰:۲۲',
      image: 'https://via.placeholder.com/40'
    },
    {
      id: 2,
      name: 'Logo Brand',
      duration: '۰:۰۰:۲۲',
      image: 'https://via.placeholder.com/40'
    }
  ])
  </script>
<template>
  {{ playlistDetail }}
      <div class="flex">
        <!-- Main Content -->
        <main class="flex-1 p-6">
          <!-- Top Bar -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-4">
              <h1 class="text-xl font-semibold">نام صاحب‌های پخش</h1>
              <button class="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                افزودن جدید
              </button>
            </div>
  
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <span>کل زمان پخش</span>
                <div class="bg-white px-3 py-1 rounded border border-gray-300">
                  0:00:44
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                <span class="text-sm text-gray-600">آنلاین</span>
              </div>
              <div class="text-xs text-gray-400">
                آخرین آپدیت : ۰۷ مهر - ۱۰:۰۱
              </div>
            </div>
          </div>
  
          <!-- Tabs -->
          <div class="border-b border-gray-200 mb-6">
            <div class="flex gap-8">
              <button class="pb-3 text-cyan-600 border-b-2 border-cyan-600 font-medium">
                صفحه‌نمایش
              </button>
              <button class="pb-3 text-gray-500 hover:text-gray-700">
                تنظیمات
              </button>
              <button class="pb-3 text-gray-500 hover:text-gray-700">
                توضیحات
              </button>
            </div>
          </div>
  
          <!-- Content Area -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <!-- Items List -->
            <div class="space-y-4 mb-6">
              <div 
                v-for="item in items" 
                :key="item.id"
                class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-cyan-300 transition"
              >
                <button class="text-red-500 hover:text-red-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
  
                <select class="border border-gray-300 rounded px-3 py-2 text-sm">
                  <option>ویدئو</option>
                  <option>تصویر</option>
                  <option>صدا</option>
                </select>
  
                <div class="text-sm text-gray-600">{{ item.duration }}</div>
  
                <div class="flex items-center gap-3">
                  <span class="text-sm">{{ item.name }}</span>
                  <img :src="item.image" alt="" class="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>
  
            <!-- Add New Button -->
            <button class="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-cyan-600 hover:border-cyan-400 hover:bg-cyan-50 transition">
              افزودن جدید
            </button>
  
            <!-- Info Cards -->
            <div class="grid grid-cols-3 gap-4 mt-6">
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-sm text-gray-600 mb-2">اطلاعات کلی</div>
                <div class="text-2xl font-bold">۱</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-sm text-gray-600 mb-2">شمارش محتوا</div>
                <div class="text-2xl font-bold">۱۲۶۳۴۵</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-sm text-gray-600 mb-2">مجموع تماشایی</div>
                <div class="text-2xl font-bold">۰۴۰۰۰۰</div>
              </div>
            </div>
  
            <!-- Standards Table -->
            <div class="mt-6 border-t pt-6">
              <table class="w-full text-sm">
                <tbody>
                  <tr class="border-b">
                    <td class="py-3 text-gray-600">استاندارد</td>
                    <td class="py-3 text-left">هیچ کدام</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    
  </template>
  

  
  <style>

  </style>