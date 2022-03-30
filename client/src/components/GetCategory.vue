<template>
  <div class="container">
    <div v-if="currentCategory">
      <div class="card w-100 h-100" style="width: 18rem;">

          <img
            class="card-img-top embed-responsive-item"
            :src="currentCategory.imageUrl"
            alt="Category image"
          />
        <div class="card-body">
          <div class="description">
            <h5 class="card-description">Model: {{ currentCategory.description }}</h5>
          </div>
          <div class="price">
            <h5 class="card-price">Fiyat:{{ currentCategory.price }} TL</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryDataService from "../services/CategoryDataService";
export default {
  name: "GetCategory",
  data() {
    return {
      currentCategory: null,
      message: ''
    };
  },
  methods: {
    getCategory(id) {
      CategoryDataService.get(id)
        .then(response => {
          this.currentCategory = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getCategory(this.$route.params.id);
  }
};
</script>
<style>
.container {
  max-width: 300px;
  margin: auto;
}
</style>