<template>
  <div class="w-full min-h-screen bg-black items-center justify-center">
    <div class="flex items-center justify-center w-full min-h-screen bg-center bg-repeat bg-[url('@/assets/background.png')]">
      <div class="flex w-full items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Background",
};
</script>
