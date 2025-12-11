<script setup>
import { ref } from "vue";
import ChannelDetail from "../components/Channel/ChannelCard.vue";
import { useRouter } from "vue-router";
import SubHeader from "../components/SubHeader.vue";
const router = useRouter();
const playlists = ref([
  {
    id: 1,
    title: "پلی لیست",
    status: "منتشر شده",
    views: 4,
    avatars: [
      { name: "B", color: "bg-red-200" },
      { name: "a", color: "bg-orange-200" },
      { name: "u", color: "bg-green-200" },
      { name: "g", color: "bg-sky-200" },
      { name: "s", color: "bg-violet-200" },
      { name: "o", color: "bg-purple-200" },
    ],
    pictures: [
      "https://picsum.photos/600/400",
      "https://picsum.photos/800/600",
      "https://picsum.photos/id/237/400/300",
      "https://picsum.photos/id/1025/500/350",
    ],
    like: 0,
  },
  {
    id: 2,
    title: "پلی لیست",
    status: "منتشر نشده",
    views: 0,
    avatars: [
      { name: "B", color: "bg-red-200" },
      { name: "a", color: "bg-orange-200" },
      { name: "u", color: "bg-green-200" },
      { name: "g", color: "bg-sky-200" },
    ],
    pictures: [
      "https://i.pravatar.cc/150?img=1",
      "https://picsum.photos/id/237/400/300",
      "https://picsum.photos/id/1025/500/350",
    ],
    like: 1,
  },
  {
    id: 3,
    title: "پلی لیست",
    status: "منتشر نشده",
    views: 6,
    avatars: [
      { name: "a", color: "bg-orange-200" },
      { name: "s", color: "bg-sky-200" },
    ],
    pictures: [
      "https://picsum.photos/300/200",
      "https://picsum.photos/400/300",
    ],
    like: 0,
  },
]);
function changeRoute(id) {
  router.push(`/channel/${id}`);
}
</script>
<template>
  <div>
    <SubHeader @openModal="newPlaylistModal.showModal()" />
    <!-- Playlist Items -->
    <div class="space-y-2">
      <div
        v-for="item in playlists"
        :key="item.id"
   
      >
        <div @click="changeRoute(item.id)">
          <ChannelDetail :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
  
