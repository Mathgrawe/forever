<template>
  <Background>
    <div class="flex items-center justify-center mx-6 lg:max-w-7xl p-6">
      <div class="flex flex-col items-center justify-center text-center max-w-md w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-xl p-8">
        <h2 class="text-4xl font-semibold text-white mb-8 text-shadow-lg">Aceita namorar comigo?</h2>
        <div class="flex flex-row items-center justify-center space-x-6">
          <div>
            <button class="bg-white text-pink-600 px-8 py-4 rounded-full shadow-2xl hover:bg-pink-200 transition duration-300 text-lg font-semibold">Sim</button>
          </div>
          <div>
            <button class="bg-white text-red-600 px-8 py-4 rounded-full shadow-2xl hover:bg-red-200 transition duration-300 text-lg font-semibold">Não</button>
          </div>
        </div>
      </div>
    </div>
  </Background>
</template>

<script>
import Background from "@/components/background.vue";

export default {
  name: "Surpresa",
  components: {Background},
};
</script>

<style scoped>
.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
