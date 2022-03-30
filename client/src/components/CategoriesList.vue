<template>
    <div class="container">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search by title"
                    v-model="title"
                />

                <div class="input-group-append">
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="searchTitle"
                    >Search</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div
                class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
                v-for="category of categories"
                :key="category.id"
            >
                <div class="card w-100 h-100" style="margin-top: 10px">
                    <div class="embed-responsive embed-responsive-16by9">
                        <img
                            class="card-img-top embed-responsive-item"
                            :src="category.imageUrl"
                            alt="Category image"
                        />
                    </div>
                    <div class="card-body">
                        <div class="input-group-append">
                            <h5 class="card-title">{{ category.title }}</h5>
                        </div>
                        <div class="input-group-append">
                            <router-link
                                :to="{ name: 'category-details', params: { id: category.id } }"
                            >
                                <button class="btn btn-primary">Detail</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryDataService from "../services/CategoryDataService";

export default {
    name: "categories-list",
    data() {
        return {
            categories: [],
            currentCategory: null,
            currentIndex: -1,
            title: "",
        };
    },
    methods: {

        retrieveCategories() {
            CategoryDataService.getAll()
                .then(response => {
                    this.categories = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        setActiveCategory(category, index) {
            this.currentCategory = category;
            this.currentIndex = category ? index : -1;
        },
        searchTitle() {
            CategoryDataService.searchWithElastic(this.title)
                .then(response => {
                    this.categories = response.data;
                    this.setActiveCategory(null);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveCategories();
    }
};


</script>
<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>