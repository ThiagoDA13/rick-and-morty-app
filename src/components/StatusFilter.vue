<template>
  <div class="status-filter">
    <select v-model="status" @change="emitStatusFilter" class="status-select">
      <option value="">Filtrar por status</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: '',
    };
  },
  methods: {
    emitStatusFilter() {
      console.log(this.status)
      this.$emit('updateStatusFilter', this.status);
    },
  },
};
</script>

<style scoped>
.status-filter {
  background-color: #394867; 
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.status-select {
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

.status-select option {
  background-color: #fff; 
  color: #333;
}
</style>
