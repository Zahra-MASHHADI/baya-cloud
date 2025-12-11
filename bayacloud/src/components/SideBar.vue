<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

  const router = ref(useRoute());
  const path = computed(() => router.value.path)
</script>
<template>

  <div class="col-span-1  border-l bg-cyan-50 border-gray-200 p-4 flex flex-col justify-between">
    <div class="flex flex-col ">
      <div class="mb-16">
        <h1 class="text-4xl font-bold text-center text-cyan-500">BAYACLOUD</h1>
      </div>
  
      <div class="space-y-2 text-xl">
        <a
          href="#"
          class="flex items-center gap-1 px-4 pt-2 hover:text-cyan-500 hover:bg-white rounded-lg"
        >
          <svg
            class="size-10 "
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Dome -->
            <path
              d="M32 20c-5 0-9 4-9 7h18c0-3-4-7-9-7z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
  
            <!-- Saucer -->
            <ellipse
              cx="32"
              cy="30"
              rx="18"
              ry="7"
              stroke="currentColor"
              stroke-width="1.5"
              fill="none"
            />
  
            <!-- Windows -->
            <circle cx="26" cy="30" r="2.2" fill="currentColor" />
            <circle cx="32" cy="30" r="2.2" fill="currentColor" />
            <circle cx="38" cy="30" r="2.2" fill="currentColor" />
  
            <!-- Light beams -->
            <line
              x1="28"
              y1="37"
              x2="28"
              y2="45"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
  
            <line
              x1="32"
              y1="37"
              x2="32"
              y2="45"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
  
            <line
              x1="36"
              y1="37"
              x2="36"
              y2="45"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span>داشبورد</span>
        </a>
  
        <a
          href="#"
          class="flex items-center gap-1 px-4 py-3 hover:text-cyan-500 hover:bg-white rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7"
            width="64"
            height="44"
          >
            <path
            class=""
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
  
          <span>اسکریپت</span>
        </a>
  
        <router-link to="/" :class="{ '!text-cyan-500 !bg-white' : path === '/'}"
          class="flex items-center gap-1 px-4 py-3 hover:text-cyan-500 hover:bg-white rounded-lg"
        >
          <svg
            class="size-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <span>کانال</span>
        </router-link>
  <!-- {{ router }} -->
        <router-link to="/playLists" :class="{ '!text-cyan-500 !bg-white' : path === '/playLists'}" class="flex items-center gap-1 px-4 py-3 hover:text-cyan-500 hover:bg-white rounded-lg">
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
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
  
          <span>پلی لیست</span>
        </router-link>
  
        <a
          href="#"
          class="flex items-center gap-1 px-4 py-3 hover:text-cyan-500 hover:bg-white rounded-lg"
        >
          <svg
            class="size-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
          <span>مدیا</span>
        </a>
  
        <a
          href="#"
          class="flex items-center gap-1 px-4 py-3 hover:text-cyan-500 hover:bg-white rounded-lg"
        >
          <svg
            class="size-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span>لینک</span>
        </a>
  
        <a
          href="#"
          class="flex items-center gap-1 px-4 py-3 hover:text-cyan-500 hover:bg-white rounded-lg"
        >
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
              d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
            />
          </svg>
  
          <span>گزارش‌ها</span>
        </a>
  
        <a
          href="#"
          class="flex items-center gap-1 px-4 py-3 hover:text-cyan-500 hover:bg-white rounded-lg"
        >
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
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
  
          <span>تیکت</span>
        </a>
      </div>

    </div>

    <div class="text-center text-sm text-gray-500 mt-8">
      <div class="font-medium">V 1.0.1</div>
      <div>Last version</div>
    </div>
  </div>
</template>