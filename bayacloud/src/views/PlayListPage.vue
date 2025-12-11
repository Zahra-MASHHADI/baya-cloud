<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";
const playlists = ref([]);
const newPlaylistModal = ref(false);
import MainPlaylist from "../components/PlayList/MainPlaylist.vue"
const fetchPlayList = async () => {
  try {
    const response = await axios.get("http://localhost:3000/playlists");

    playlists.value = response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
onMounted(() => {
  fetchPlayList();
});
</script>
<template >
  <div>
    <MainPlaylist />
   </div>
</template>
<style >
</style>