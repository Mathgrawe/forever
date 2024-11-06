<template>
  <Background>
    <div class="flex flex-col w-full items-center justify-center mx-6 lg:max-w-7xl">

      <div class="flex flex-col items-center justify-center mt-10">
        <h1 class="font-bold text-white font-dancing text-5xl">Helena e Matheus</h1>
        <h1 class="font-bold text-white font-dancing text-2xl mb-10">Forever With You</h1>
      </div>

      <div class="flex items-center justify-center w-full mb-10">
        <Carousel />
      </div>

      <div class="flex text-white flex-col w-full rounded-lg bg-white/20 shadow-lg backdrop-blur-sm p-3 gap-3 text-justify mb-5">
        <h1 class="font-bold text-white text-normal">Oi, meu amor!</h1>
        <p>Esse é um meio diferente de escrever uma carta de declaração diferente, mas estou aqui para expressar o quanto você é importante na minha vida.</p>
        <p>Lembro com carinho do dia em que nos conhecemos, foi 15 de setembro de 2024. Era madrugada, e você estava treinando na academia. Eu estava nervoso, porque eu estava conversando com uma garota tão linda quanto você! E posso dizer que o dia em que nossa história começou, e não poderia estar mais feliz por isso.</p>
        <p>Nosso primeiro encontro foi mágico! Nos encontramos no Muller, no dia 25 de setembro, e lembro como você estava nervosa. Você me contou que estava suando frio enquanto estava no Uber. Você estava deslumbrante em um vestido verde, com um laço no cabelo. A beleza que eu vi naquele momento é algo que guardarei para sempre. Depois conversamos um pouco e perder um pouco da timidez, fomos ao Guacamole, e que lugar incrível! E depois que saímos do local bem na esquina, esperando o sinal ficar verde, nossos olhares se encontraram, e tivemos nosso primeiro beijo! A sensação de estar com você e passear pela cidade na quela noite foi, sem dúvida, um dos melhores dias da minha vida. Sem falar que colocamos nossas iniciais na quela pedra.</p>
        <p>A partir daí, tivemos tantos momentos incríveis juntos. Desde jantares, cinema, barzinhos, até ficar na sua casa assistindo filmes e pedindo lanche e até mesmo ir ao mercado com você. Cada instante ao seu lado me faz perceber como a vida é boa e como sou feliz com você. Até mesmo limpando sua casa, sinto uma alegria imensa. Lembro de um dia em que saí da academia e vi você passando de moto. Corri para passar na sua frente, e sua reação foi simplesmente incrível! Esses pequenos gestos que eu faço são porque eu gosto de você e se eu puder te ver só por 5 min no dia, para mim já valeu tudo.</p>
        <p>Eu quero que, quando estivermos juntos, eu seja seu ponto seguro, seu apoio, alguém em quem você possa confiar. Quero ser a pessoa que estará ao seu lado nos momentos difíceis, enxugando suas lágrimas e oferecendo meu ombro para você chorar. Quero ser seu defensor, quem cuidará de você, quem vai te aconselhar e com quem você poderá dar boas risadas.</p>
        <p>Você é uma pessoa maravilhosa, e não poderia pedir mais. Sua compreensão, honestidade, carinho, independência, diversão, respeito, sua nerdice e aquele sorriso lindo que só você tem são só algumas das coisas que amo em você. Sua voz é linda, e você aprecia as coisas simples da vida. O mais importante é que você sabe viver a vida plenamente e tenho certeza de que tudo que você busca, você vai conquistar.</p>
        <p>Posso dizer que você é a garota 1 em 8 bilhões e meu furacão que eu quero para minha vida e estou ansioso para construir um futuro juntos, repleto de sonhos, risadas e amor.</p>
        <p>Com todo carrinho do seu catador de manga, Matheus Grawe</p>
      </div>

      <div class="flex w-full">
          <Contador />
      </div>

      <div class="flex w-full items-center justify-center mb-10">
          <router-link to="/surpresa">
            <button class="bg-gray-500 w-full  text-white font-bold px-4 py-2 rounded hover:bg-gray-700">Clique aqui para uma Surpresa</button>
          </router-link>
      </div>


    </div>
  </Background>
</template>

<script>
import Contador from "../components/Contador.vue";
import Background from "../components/background.vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: { Background, Contador, Carousel },
};
</script>
