<template>
  <div class="container">
    <div v-if="currentCategory" class="edit-form">
      <div class="row">
        <div class="col-xl-4 col-md-6 col-12 pt-3 d-flex" :key="currentCategory.id">
          <div class="card w-1000 h-1000" style="margin-top: 10px">
            <div class="embed-responsive embed-responsive-16by9">
              <img
                class="card-img-top embed-responsive-item"
                :src="currentCategory.imageUrl"
                alt="Category image"
              />
            </div>
            <div class="card-body">
              <div class="input-group-append">
                <h5 class="card-title">{{ currentCategory.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>Category</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="currentCategory.title" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentCategory.description"
          />
        </div>
        <div class="form-group">
          <label>
            <strong>Status:</strong>
          </label>
          {{ currentCategory.published ? "Published" : "Pending" }}
        </div>
      </form>
      <button
        class="badge badge-primary mr-2"
        v-if="currentCategory.published"
        @click="updatePublished(false)"
      >UnPublish</button>
      <button v-else class="badge badge-primary mr-2" @click="updatePublished(true)">Publish</button>
      <button class="badge badge-danger mr-2" @click="deleteCategory">Delete</button>
      <button type="submit" class="badge badge-success" @click="updateCategory">Update</button>
      <p>{{ message }}</p>
    </div>
    <div v-else>
      <br />
      <p>Please click on a Category...</p>
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
    updatePublished(status) {
      var data = {
        id: this.currentCategory.id,
        title: this.currentCategory.title,
        description: this.currentCategory.description,
        published: status
      };
      CategoryDataService.update(this.currentCategory.id, data)
        .then(response => {
          console.log(response.data);
          this.currentCategory.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateCategory() {
      CategoryDataService.update(this.currentCategory.id, this.currentCategory)
        .then(response => {
          console.log(response.data);
          this.message = 'The category was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCategory() {
      CategoryDataService.delete(this.currentCategory.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "categories" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCategory(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>