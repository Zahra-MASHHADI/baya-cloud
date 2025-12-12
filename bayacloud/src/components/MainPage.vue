<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
// import PlayList from "./PlayList/PlayList.vue";
// import MainPlayList from "./PlayList/MainPlayList.vue";


</script>

<template>
  <div class="min-h-screen bg-gray-50 grid grid-cols-5 content-start font-bold" dir="rtl">
    <!-- Sidebar -->
    <SideBar @changeDisplay="changeDisplay" class="col-span-full lg:col-span-1" />

    <!-- Main Content -->
    <div class="lg:col-span-4 col-span-full">
      <!-- Header -->
      <Header />
      <div>
        <router-view /> 
      </div>

    </div>
  </div>
</template>
