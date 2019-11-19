<template>
  <main style="display:flex">
    <aside>
      <left></left>
    </aside>
    <article style="flex:1;padding:10px">
      <header>
        <top></top>
      </header>
      <section>
        <router-view />
      </section>
    </article>
  </main>
</template>

<script>
import { left, top } from "@/components";
export default {
  components: {
    left,
    top
  }
};
</script>

<style>
</style>