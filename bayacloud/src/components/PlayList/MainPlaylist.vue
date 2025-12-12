<script setup>
import { computed, onMounted, ref } from "vue";
import PlayList from "./PlayList.vue";
import NewPlaylis from "../Modals/NewPlaylis.vue";
import SubHeader from "../SubHeader.vue";
import axios from "axios";
import { useRouter } from "vue-router";
const playlists = ref([]);
const newPlaylistModal = ref(false);
const loading = ref(false);
const tabData = ref("all");
const router = useRouter();

const fetchPlayList = async () => {
  try {
    loading.value = true;
    const response = await axios.get("http://localhost:3000/playlists");

    playlists.value = response.data;
    loading.value = false;
  } catch (error) {
    loading.value = false;
    playlists.value = [
      {
        id: "1",
        title: "پلی لیست",
        status: "0",
        like: 1,
        photo: "3",
        link: "2",
      },
      {
        id: "2",
        title: "پلی لیست",
        status: "0",
        like: 0,
        photo: "0",
        link: "0",
      },
      {
        id: "3",
        title: "پلی لیست",
        status: "1",
        like: 0,
        photo: "0",
        link: "0",
      },
    ];
  }
};
onMounted(() => {
  fetchPlayList();
});
const filtredPlaylist = computed(() => {
  let filtred = playlists.value;

  if (tabData.value === "publish") {
    filtred = filtred.filter((item) => +item.status === 1);
  }
  if (tabData.value === "drafts") {
    filtred = filtred.filter((item) => +item.status === 0);
  }
  return filtred;
});
function changeTab(item) {
  tabData.value = item;
}
function changeRoute(id) {
  router.push(`/playlists/${+id}`);
}
</script>
<template >
  <div>
    <SubHeader
      @openModal="newPlaylistModal.showModal()"
      @changeTab="changeTab"
    />
    <div v-if="loading" class="flex items-center justify-center"> 
      در حال بارگیری 
      <span class="loading loading-ring loading-md"></span>

    </div>
    <!-- Playlist Items -->
    <div class="space-y-4" v-else>
      <div
        v-for="item in filtredPlaylist"
        :key="item.id"
        class="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
      >
        <div @click="changeRoute(item.id)">
          <PlayList :item="item" />
        </div>
      </div>
    </div>
  </div>
  <dialog ref="newPlaylistModal" class="modal modal-middle">
    <NewPlaylis @closeModal="newPlaylistModal.close()" />
  </dialog>
</template>
<style >
</style>