<script setup>
import { ref, onMounted, computed } from "vue";
import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "vue-chartjs";
ChartJS.register(...registerables);
const data = {
  labels: ['استفاده شده', 'خالی'],
  datasets: [
    {
      label: '',
      data: [190,40],
      backgroundColor:["#109beb" , "#bfc4c7"],
    }
  ]
};
const options = ref({
     maintainAspectRatio: false,
      responsive: true,
       plugins: { 
         legend: { display: false, },
          title: { display: false, }, }
      

           });
</script>
<template >
  <div class="size-12">
    <Doughnut class="size-10" :data="data" :options="options" :width="300" :height="300" />
  </div>
</template>
<style >
</style>