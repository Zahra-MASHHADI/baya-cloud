<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
// import PlayList from "./PlayList/PlayList.vue";
// import MainPlayList from "./PlayList/MainPlayList.vue";


</script>

<template>
  <div class="min-h-screen bg-gray-50 grid grid-cols-5 font-bold" dir="rtl">
    <!-- Sidebar -->
    <SideBar @changeDisplay="changeDisplay" />

    <!-- Main Content -->
    <div class="col-span-4">
      <!-- Header -->
      <Header />
      <div>
        <router-view /> 
      </div>

    </div>
  </div>
</template>
