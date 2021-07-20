<template>
    <div>
        <div class="bg-1">
            <img class="image-fluid" src="@/assets/banner.jpeg" alt="Responsive image">
            <h1>LESTARIN RENTAL</h1>
        </div>
        <div class="container" style="padding-bottom:25px">
            <h3>Rental Sepeda</h3>
            <div class="row">
                <div class="col-md-4 col-12 ptb" v-for="list in sepedalist" :key="list.id">
                    <div class="card">
                        <div class="text-center min-max">
                            <img class="card-img-top c-img" v-bind:src="require('../assets'+list.imageUrl)" alt="Card image cap" />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title mb-0" style="font-weight:bold;">{{ list.name }}</h5>
                            <p>Harga Perjam : <b>10.000,00</b> <br> Harga Perhari : <b>50.000,00</b> <br> Harga Perminggu: <b>300.000,00</b>
                            </p>
                            <button v-on:click="onCheck(list.id)">check</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import service from "../service/service";
export default {
    name: "Home",
    data() {
        return {
            sepedalist: []
        }
    },
    computed: {},
    mounted() {
        this.getBicycle();
    },
    methods: {
        getBicycle() {
            service.getBicycle('').then(res => {
                if (res.data) {
                    if (res.data.code == '200') {
                        this.sepedalist = res.data.data
                    }
                }
            })
        },
        getImage(path) {
            return '@/assets' + path
        },
        onCheck(id) {
            console.log(id);
            this.$router.push({
                name: 'Checkitem',
                params: { iditem: id }
            })
        }
    }
};
</script>

<style scoped>
.navbar {
    padding: 0.5rem 1rem;
    font-weight: bold;
    background: #1D434E;
}

.bg-1 {
    background: #F0EFDB;
}

h1 {
    padding-bottom: 1rem;
    padding-top: 1rem;
    font-weight: bolder;
    font-size: 1.5rem;
    font-family: cursive;
}

h3 {
    color: white;
    background: #1D434E
}

.c-img {
    width: 70%;
    padding: 15px;
}

.ptb {
    padding-bottom: 1rem;
}

.min-max {
    min-height: 150px;
    max-height: 150px;
}

.mb-0 {
    margin-bottom: 0px
}
</style>
