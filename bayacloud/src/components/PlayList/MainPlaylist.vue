<script setup>
import { onMounted, ref } from "vue";
import PlayList from "./PlayList.vue";
import NewPlaylis from "../Modals/NewPlaylis.vue";
import SubHeader from "../SubHeader.vue";
import axios from "axios";
const playlists = ref([]);
const newPlaylistModal = ref(false);

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
    <SubHeader @openModal="newPlaylistModal.showModal()" />

    <!-- Playlist Items -->
    <div class="space-y-4">
      <div
        v-for="item in playlists"
        :key="item.id"
        class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
      >
        <router-link :to="`/playlists/${+item.id}`">
          <PlayList :item="item" />
        </router-link>
      </div>
    </div>
  </div>
  <dialog ref="newPlaylistModal" class="modal modal-middle">
    <NewPlaylis @closeModal="newPlaylistModal.close()" />
  </dialog>
</template>
<style >
</style>