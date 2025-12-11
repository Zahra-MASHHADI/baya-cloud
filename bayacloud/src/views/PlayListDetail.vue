  <script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import TopBarPlaylist from "../components/PlayList/TopBarPlaylist.vue";
const playListId = useRoute().params;
const playlistDetail = ref({});
const display = ref('page');
const items = ref([
  {
    id: 1,
    name: "Logo Brand",
    duration: "۰:۰۰:۲۲",
    image: "https://picsum.photos/id/237/400/300",
  },
  {
    id: 2,
    name: "Logo Brand",
    duration: "۰:۰۰:۲۲",
    image: "https://picsum.photos/id/1025/500/350",
  },
]);
onMounted(() => {
  fetchData();
});
async function fetchData() {
  let response = await axios.get(
    `http://localhost:3000/playlists/${playListId.id}`
  );
  playlistDetail.value = response.data;
}
function removeItem(index) {
  items.value.splice(index, 1);
}
function addItem() {
  let newId = items.value.length + 1;
  items.value.push({
    id: newId,
    name: "Logo Brand",
    duration: "۰:۰۰:۲۲",
    image: "https://picsum.photos/id/1025/500/350",
  });
}
</script>
<template>
  <!-- Main Content -->
  <div class="p-6">
    <!-- Top Bar -->
    <TopBarPlaylist />

    <!-- Content Area -->
    <div class="grid grid-cols-3 gap-6 rounded-lg">
      <!-- Items List -->
      <div class="space-y-4 mb-6 col-span-2">
        <div
          v-for="(item, index) in items"
          :key="item.id"
          class="grid grid-cols-5 items-center justify-between p-4 bg-white rounded-lg"
        >
          <div class="flex items-center gap-3 col-span-2">
            <img
              :src="item.image"
              alt=""
              class="size-10 ring-2 ring-neutral-200 rounded-full"
            />
            <span class="text-sm">{{ item.name }}</span>
          </div>
          <div class="flex items-center gap-2 col-span-2">
            <select
              class="border border-neutral-300 rounded rounded-xl w-1/2 p-4 text-sm"
            >
              <option>{{ item.duration }}</option>
            </select>
            <div>ویدیو</div>
          </div>

          <button
            class="flex justify-end hover:text-red-700 cursor-pointer"
            @click="removeItem(index)"
          >
            <svg
              class="size-6"
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
        </div>
        <!-- add button  -->
        <div
          class="bg-cyan-100/50 rounded-2xl cursor-pointer w-fit p-3 px-8 text-cyan-500"
          @click="addItem"
        >
          افزودن جدید
        </div>
      </div>

      <!-- Info Cards -->
      <div class="bg-white rounded-lg px-4">
        <div class="flex text-center">
          <span class="border-b w-1/2 p-2 pt-6 border-neutral-400 cursor-pointer" :class="{'border-b-2 !border-cyan-500 text-cyan-500' : display === 'page'}" @click="display = 'page'"> صفحه بندی </span>
          <span class="border-b w-1/2 p-2 pt-6 border-neutral-400 cursor-pointer" :class="{'border-b-2 !border-cyan-500 text-cyan-500' : display === 'setting'}" @click="display = 'setting'"> تنظیمات </span>
        </div>
        <div v-show="display === 'page'" class="">
          <div>
            <p class="mt-4 mb-2">توضیحات</p>
            <textarea rows="4" class="w-full rounded-xl border-2 border-neutral-300" />
          </div>
          <div>
            <p class="mt-4 mb-2">تگ</p>
            <input  class="w-full rounded-xl py-4 border-2 border-neutral-300" />
          </div>
          <div class="my-4">
            <div class="col-span-full px-2 py-4 rounded-t-xl bg-cyan-100/50 border  border-neutral-200">
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

      <!-- Standards Table -->
      <!-- <div class="mt-6 border-t pt-6">
        <table class="w-full text-sm">
          <tbody>
            <tr class="border-b">
              <td class="py-3 text-gray-600">استاندارد</td>
              <td class="py-3 text-left">هیچ کدام</td>
            </tr>
          </tbody>
        </table>
      </div> -->
    </div>
  </div>
</template>
  

  
  <style>
</style>