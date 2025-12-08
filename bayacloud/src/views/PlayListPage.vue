<script setup>
import { onMounted, ref } from "vue";
import PlayList from "../components/PlayList/PlayList.vue";
const playlists = ref([]);
const fetchPlayList = async () => {
  try {
    const response = await axios.get('http://localhost:3000/playlists')
    playlists.value = response.data
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}
onMounted(() => {
  fetchPlayList()
})
</script>
<template >
    <div>
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
         
          class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
        >
        <router-link :to="{ name: 'palylist', params: { id: item.id } }">
        <PlayList :item="item"   />
        </router-link>
        </div>
      </div>
    </div>
</template>
<style >
    
</style>