<template>
  <div class="app">
    <header>
      <h1>Personagens de Rick and Morty</h1>
    </header>

    <main>
      <router-view></router-view>
    </main>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.app {
  text-align: center;
  color: #333;
}

header {
  background-color: #282c34;
  padding: 20px;
  color: white;
}

footer {
  background-color: #282c34;
  padding: 10px;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
