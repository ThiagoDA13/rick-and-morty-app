<template>
  <div class="character-card">
    <img :src="character.image" :alt="character.name">
    <h3>{{ character.name }}</h3>
    <p>Status: {{ character.status }}</p>
    <p>Espécie: {{ character.species }}</p>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
}
</script>

<style scoped>
.character-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  transition: transform 0.2s;
}

.character-card:hover {
  transform: scale(1.05);
}
</style>
