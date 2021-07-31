<template>
<div style="padding-top:50px;padding-bottom:100px;" class="bg-1">
    <h1>Histori Transaksi</h1>
    <div class="container" v-for="list in list" :key="list.id" style="margin-bottom:25px">
        <div class="row">
            <div class="col-md-6 col-12">
                <img class="img-fluid" v-bind:src="require('../assets' +list.bicycle.imageUrl)" alt="" style="margin-top:50px !important;margin:auto;padding:15px;width:70%" />
            </div>
            <div class="col-md-6">
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Rental ID</div>
                    <div class="col-md-6">{{list.rentalId}}</div>
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Nama Produk</div>
                    <div class="col-md-6">{{list.bicycle.name}}</div>
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Alamat</div>
                    <div class="col-md-6">{{list.address}}</div>
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Tanggal Transaksi</div>
                    <div class="col-md-6">{{currentDateTime(list.createdDate)}}</div>
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Quantity</div>
                    <div class="col-md-6">{{list.orderQuantity}}</div>
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Peminjaman</div>
                    <div class="col-md-6">{{list.numberOfRents}} {{list.rentType}}</div>
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Total rental</div>
                    <div class="col-md-6">{{currency(list.rentPrice)}}</div>
                </div>
                <div class="row" style="padding-top:5px" v-if="list.deliveryServicePrice != 0">
                    <div class="col-md-4">Harga delivery</div>
                    <div class="col-md-6">{{currency(list.deliveryServicePrice)}}</div>
                </div>
                <div class="row" style="padding-top:5px">
                    <div class="col-md-4">Total Pembayaran</div>
                    <div class="col-md-6">{{currency(list.totalPrice)}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import service from "../service/service";
import moment from 'moment'
export default {
    name: "Transaction",
    data() {
        return {
            data: {},
            list: []
        }
    },
    mounted() {
        this.getlist();
    },
    methods: {
        getlist() {
            service.getRent().then(res => {
                if (res.data) {
                    this.list = res.data.data
                }
            })
        },
        currency(data) {
            return 'Rp. ' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ',00';
        },
        currentDateTime(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a')
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
