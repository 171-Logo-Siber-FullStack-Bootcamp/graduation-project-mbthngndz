<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h2>Add Category</h2>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="category.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="category.description"
          name="description"
        />
      </div>
      <button @click="saveCategory" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCategory">Add</button>
    </div>
  </div>
</template>
<script>
import CategoryDataService from "../services/CategoryDataService";
export default {
  name: "add-category",
  data() {
    return {
      category: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveCategory() {
      var data = {
        title: this.category.title,
        description: this.category.description
      };
      CategoryDataService.create(data)
        .then(response => {
          this.category.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newcategory() {
      this.submitted = false;
      this.category = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>