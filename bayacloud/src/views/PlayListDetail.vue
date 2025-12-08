<template>
    <div class="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <!-- Header -->
      <header class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" class="w-32" />
          </div>
  
          <!-- Center Actions -->
          <div class="flex items-center gap-4">
            <button class="p-2 hover:bg-gray-100 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
  
          <!-- User Profile -->
          <div class="flex items-center gap-4">
            <button class="p-2 hover:bg-gray-100 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
  
      <div class="flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-white border-l border-gray-200 min-h-screen p-4">
          <nav class="space-y-2">
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>داشبورد</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>اسکرین</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>فایل</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-cyan-600 bg-cyan-50 rounded-lg transition border-r-4 border-cyan-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>پلی لیست</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>مدیا</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>لینک</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>گزارشات</span>
            </a>
            <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span>پیامک</span>
            </a>
          </nav>
  
          <!-- Version Info -->
          <div class="absolute bottom-4 left-4 text-xs text-gray-400">
            <div>V 1.0.1</div>
            <div>Last version</div>
          </div>
        </aside>
  
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
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
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
  
  <style>
  /* Add any custom styles here if needed */
  body {
    font-family: 'Vazir', 'Tahoma', sans-serif;
  }
  </style>