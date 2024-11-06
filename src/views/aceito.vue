<template>
  <Background>
    <div class="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-80 relative">
      <div class="relative z-10 text-center p-8 max-w-2xl mx-auto text-white">
        <h2 class="text-5xl font-bold mb-4 text-shadow-lg">Você aceitou! 💖</h2>
        <p class="text-lg mb-6">Estou tão feliz que você aceitou! Chegou o momento incrível de dar o próximo passo, é hora da aliança!"</p>
      </div>
      <div class="relative z-10 mx-10 mb-10">
        <img :src="imgBackground" alt="Imagem de fundo" class="w-full rounded-lg shadow-xl" />
      </div>
    </div>
  </Background>
</template>

<script>
import Background from "@/components/background.vue";

export default {
  name: "Aceito",
  components: {Background},
  data() {
    return {
      // Usando import direto para imagens no Vite
      imgBackground: new URL('@/assets/images/img12.jpeg', import.meta.url).href,
    };
  },
};
</script>

<style scoped>
.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
