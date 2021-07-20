<template>
    <div style="padding-top:50px;padding-bottom:100px;" class="bg-1">
        <div class="container" v-if="data">
            <div class="row" style="margin-top:50px;margin-bottom:50px">
                <div class="col-md-6 col-12" v-if="data.imageUrl">
                    <img class="img-fluid" v-bind:src="require('../assets' +data.imageUrl)" alt="" style="margin-top:50px !important;margin:auto;" />
                </div>
                <div class="col-md-6 col-12" style="font-size:20px;margin:auto">
                    <div class="row" style="">
                        <div class="col-md-12">
                            <h3><strong>{{data.name}}</strong></h3>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label>Jumlah Stock <span class="stock">{{data.stock}}</span></label>
                            </div>
                            <p>Harga Perjam : <b>10.000,00</b>
                                <br> Harga per 3 jam: <b>20.000,00</b>
                                <br> Harga Perhari : <b>50.000,00</b>
                                <br> Harga Perminggu: <b>300.000,00</b>
                            </p>
                            <button class="btn btn-primary" v-on:click="onBook()" style="background:#1D434E;border:#1D434E">
                                            <i class="fa fa-shopping-cart mr-1"></i>Booking</button>
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
    name: "Checkitem",
    data() {
        return {
            data: {}
        }
    },
    created() {
        const id = this.$route.params.iditem
        if (id != undefined) {
            service.getBicycle(id).then(res => {
                if (res.data.code == '200') {
                    this.data = res.data.data[0]
                }
            })
        } else {
            this.$router.push({ name: 'Home' })
        }
    },
    methods: {
        onBook() {
            this.$router.push({ name: 'FormBooking', params: { data: this.data } })
        }
    }
};
</script>

<style scoped>
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

.stock {
    background: #1D434E;
    color: white;
    padding: 5px 10px;
    border-radius: 100%;
}

.container {
    border: solid 2px;
    background: white;
    border-radius: 10px;
}
</style>
