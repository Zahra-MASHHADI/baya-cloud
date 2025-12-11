  <script setup>

import TopBarChannel from "../components/Channel/TopBarChannel.vue";
import ChannelDetail from "../components/Channel/ChannelDetail.vue";

</script>
<template>
  <!-- Main Content -->
  <div class="p-6">
    <!-- Top Bar -->
    <TopBarChannel />

    <!-- Content Area -->
    <div class="grid grid-cols-3 gap-6 rounded-lg">
     <ChannelDetail />

    </div>
  </div>
</template>
  

  
  <style>
</style>    