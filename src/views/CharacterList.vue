<template>
  <div>
    <search-bar v-model="search" @updateSearch="updateSearch" />
    <status-filter v-model="statusFilter" @updateStatusFilter="updateStatusFilter" />
    <div class="character-list">
      <character-card v-for="character in filteredCharacters" :key="character.id" :character="character" />
    </div>
    <div v-if="loading">Carregando...</div>
  </div>
</template>

<script>
import axios from 'axios';
import CharacterCard from '@/components/CharacterCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import StatusFilter from '@/components/StatusFilter.vue';

export default {
  data() {
    return {
      characters: [],
      search: '',
      statusFilter: '',
      loading: false,
      info: {},
      page: 1,
    };
  },
  components: {
    CharacterCard,
    SearchBar,
    StatusFilter,
  },
  computed: {
   filteredCharacters() {
    return this.characters.filter((character) => {
      const nameMatch = character.name.toLowerCase().includes(this.search.toLowerCase());
      const statusMatch = !this.statusFilter || character.status === this.statusFilter;
      return nameMatch && statusMatch;
    });
  },
  },
  methods: {
 async fetchCharacters() {
  try {
    this.loading = true;
    const response = await axios.get('character', {
      params: {
        page: this.page,
        name: this.search, 
        status: this.statusFilter, 
      },
    });

    if (response.data.results.length === 0) {
      this.loading = false;
      return;
    }

    const newCharacters = response.data.results;

    newCharacters.forEach((character) => {
      if (!this.characters.some((existingCharacter) => existingCharacter.id === character.id)) {
        this.characters.push(character);
      }
    });

    this.page++;
    this.loading = false;
  } catch (error) {
    console.error(error);
    this.loading = false;
  }
},



    resetCharacters() {
      this.characters = [];
      this.page = 1;
      this.fetchCharacters();
    },
    handleScroll() {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        this.info.next &&
        !this.loading
      ) {
        this.page++;
        this.fetchCharacters();
      }
    },
    updateSearch(searchTerm) {
      this.search = searchTerm;
      this.resetCharacters();
    },
    updateStatusFilter(status) {
      this.statusFilter = status;
      this.resetCharacters();
    },
  },
  watch: {
    search: 'resetCharacters',
    statusFilter: 'resetCharacters',
  },
  mounted() {
    this.fetchCharacters();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
