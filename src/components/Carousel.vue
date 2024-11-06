<template>
  <div class="flex items-center justify-center max-w-3xl mx-auto">
    <Splide :options="splideOptions">
      <SplideSlide v-for="(image, index) in images" :key="index">
        <img :src="image.default" alt="Imagem do Carrossel" class="w-full h-auto object-cover rounded-lg" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  components: {Splide, SplideSlide},
  data() {
    return {
      images: [],
      splideOptions: {
        type: 'loop',
        autoplay: true,
        perPage: 1,
        arrows: false, // Remove as setas de navegação
        pagination: false, // Remove a paginação (contador de imagens)
        drag: true, // Permite arrastar as imagens
        gap: '1rem', // Ajusta o espaçamento entre as imagens
        padding: {left: '1rem', right: '1rem'}, // Ajusta o padding das bordas
        breakpoints: {
          640: {
            perPage: 1, // Exibe 1 imagem por vez em telas pequenas
            gap: '0.5rem', // Reduz o gap em telas pequenas
          },
        },
      }
    };
  },
  async created() {
    try {
      // Usa import.meta.glob para carregar todas as imagens .jpeg e .jpg na pasta assets/images
      const imageModules = import.meta.glob('@/assets/images/*.{jpeg,jpg}');

      // Resolve as promessas de cada função de importação e armazena o valor default de cada módulo
      this.images = await Promise.all(
          Object.values(imageModules).map((importImage) => importImage())
      );
    } catch (error) {
      console.error("Erro ao carregar imagens:", error);
    }
  }
};
</script>

