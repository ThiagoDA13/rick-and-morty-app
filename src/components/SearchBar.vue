<template>
  <div class="search-bar">
    <input v-model="search" placeholder="Pesquisar por nome" @input="emitSearch" class="search-input" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    emitSearch() {
      this.$emit('updateSearch', this.search);
    },
  },
};
</script>

<style scoped>
.search-bar {
  background-color: #394867;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #fff; 
  margin: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  color: #333;
}

.search-input::placeholder {
  color: #999; 
}
</style>

