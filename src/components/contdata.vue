<template>
  <div class="flex flex-col w-full items-center justify-center rounded-lg bg-white/20 shadow-lg backdrop-blur-sm mb-10 gap-3">
    <p class="text-white text-2xl text-center font-bold">Desde o Nosso Dia</p>
    <p class="text-white font-semibold">{{ days }} dias, {{ hours }} horas, {{ minutes }} minutos, {{ seconds }} segundos</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: new Date('2024-09-15T00:00:10'),
      currentDate: new Date(),
    };
  },
  computed: {
    elapsedTime() {
      const diff = Math.max(0, this.currentDate - this.startDate);
      return diff;
    },
    days() {
      return Math.floor(this.elapsedTime / (1000 * 60 * 60 * 24));
    },
    hours() {
      return Math.floor((this.elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    },
    minutes() {
      return Math.floor((this.elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    },
    seconds() {
      return Math.floor((this.elapsedTime % (1000 * 60)) / 1000);
    },
  },
  methods: {
    updateCurrentDate() {
      this.currentDate = new Date();
    },
  },
  mounted() {
    this.updateCurrentDate();
    setInterval(this.updateCurrentDate, 1000);
  },
};
</script>

