<template>
<div>
    <div class="card text-center" style="margin-left:50px;margin-right:50px">
        <div class="card-header bg-header">
            <h3>Form Booking</h3>
        </div>
        <form @submit="onOrder($event)" class="text-left">
            <div class="card-body px-5 py-4">
                <div class="row">
                    <div class="col-md-4 col-12">
                        <img class="img-fluid" v-bind:src="require('../assets' +routedata.imageUrl)" alt="" style="margin-top:50px !important;margin:auto;width:70%" />
                        <div class="text-center" style="font-weight:bold;">{{routedata.name}}</div>
                        <label>Stock <span class="stock">{{routedata.stock}}</span></label>
                        <p>Harga Perjam : <b>Rp. 10.000,00</b>
                            <br> Harga per 3 jam: <b>Rp. 20.000,00</b>
                            <br> Harga Perhari : <b>Rp. 50.000,00</b>
                            <br> Harga Perminggu: <b>Rp. 300.000,00</b>
                        </p>
                        <div style="font-weight: bold;font-size: 36px;padding: 50px;margin-bottom:15px;border: solid 1px lightgray;">
                            {{currency(totalprice)}}
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="text-left">
                            <div class="form-group">
                                <div class="text-left">Nama lengkap</div>
                                <input type="text" class="form-control" id="fullname" aria-describedby="Nama lengkap Sesuai Ktp" placeholder="Nama lengkap Sesuai Ktp" v-model="data.name" required="true" />
                            </div>
                            <div class="form-group">
                                <div class="text-left">Alamat lengkap</div>
                                <input type="text" class="form-control" id="alamat" aria-describedby="Alamat Lengkap" placeholder="Alamat Lengkap" v-model="data.address" required="true" />
                            </div>
                            <div class="form-group">
                                <div class="text-left">Nomor telp</div>
                                <input type="text" class="form-control" id="notelp" aria-describedby="No. Telp" placeholder="No.Telp" v-model="data.noHp" required="true" />
                            </div>
                            <div class="form-group">
                                <div class="text-left">Kuantitas</div>
                                <input type="number" class="form-control" id="orderQuantity" aria-describedby="orderQuantity" placeholder="kuantitas" v-model="data.orderQuantity" required="true" />
                            </div>
                            <div class="form-group col-md-12 col-12 row" style="padding-right:0px">
                                <div class="text-left pl-0">Lama rental</div>
                                <div class="col-md-6 col-6 pl-0">
                                    <input type="number" class="form-control" id="numberOfRents" aria-describedby="numberOfRents" placeholder="lama rental" v-model="data.numberOfRents" required="true" />
                                </div>
                                <div class="col-md-6 col-6 pl-0" style="padding-right:0px">
                                    <b-form-select v-model="data.rentType" class="form-control" :required="true" placeholder="tipe waktu rental">
                                        <b-form-select-option :value="null">---- Tipe ----</b-form-select-option>
                                        <b-form-select-option value="Jam">Jam</b-form-select-option>
                                        <b-form-select-option value="Hari">Hari</b-form-select-option>
                                        <b-form-select-option value="Minggu">Minggu</b-form-select-option>
                                    </b-form-select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="text-left">Total Rental</div>
                                <input type="number" :disabled="true" class="form-control" id="rentPrice" aria-describedby="rentPrice" placeholder="harga rental" v-model="totalRental" required="true" />
                            </div>
                            <div class="form-group">
                                <div class="text-left">Jasa delivery</div>
                                <b-form-checkbox v-model="data.deliveryService" name="check-button" switch>
                                </b-form-checkbox>
                            </div>
                            <div class="form-group" v-if="data.deliveryService == true">
                                <div class="text-left">Harga Ongkir</div>
                                <input type="number" :disabled="true" class="form-control" id="deliveryServicePrice" aria-describedby="deliveryServicePrice" placeholder="harga ongkir" v-model="data.deliveryServicePrice" required="true" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="text-left">
                            <div class="form-group" v-if="data.deliveryService == true">
                                <GmapMap :center='center' :zoom='12' style='width:100%;  height: 400px;'>
                                    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position" />
                                </GmapMap>
                            </div>
                            <div class="form-group" v-if="data.deliveryService == true">
                                <div class="text-left">latitude</div>
                                <input type="text" class="form-control" id="latitude" @input="onGetDelivery()" aria-describedby="latitude" placeholder="latitude" v-model="latitude" required="true" />
                            </div>
                            <div class="form-group" v-if="data.deliveryService == true">
                                <div class="text-left">longitude</div>
                                <input type="text" class="form-control" id="longitude" @input="onGetDelivery()" aria-describedby="longitude" placeholder="longitude" v-model="longitude" required="true" />
                            </div>
                            <div class="form-group" v-if="data.deliveryService == true">
                                <div class="text-left">Jarak Pengiriman</div>
                                <input type="text" class="form-control" id="deliveryServiceDistance" @input="onGetDelivery()" aria-describedby="longitude" placeholder="jarak pengiriman" v-model="data.deliveryServiceDistance" required="true" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="padding-top:15px;">
                    <div class="col-md-6" style="padding-top:5px">

                    </div>
                    <div class="col-md-6 text-right" style="padding-top:5px">
                        <button class="btn btn-primary btn-bg1" type="submit">Order</button>
                        <button class="btn btn-primary btn-cancel" v-on:click="oncancel()">Batal</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <b-modal ref="my-modal" hide-footer hide-header>
        <h3 class="text-center">Transaksi Berhasil</h3>
        <div class="text-center" style="border: solid 2px black;padding: 15px;margin: 10px;">
            Booking Code
            <h3 class="text-center">{{resData.rentalId}}</h3>
            Total Pembayaran
            <h3 class="text-center">{{currency(data.totalPrice)}}</h3>
        </div>

        <div class="text-center">
            <p>Silahkan konfirmasi dan sertakan bukti pembayaran ke Nomor +62 0000-0000 dengan keterangan Booking Code
            </p>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Konfirmasi</b-button>
    </b-modal>
</div>
</template>

<script>
import service from "../service/service.js";
export default {
    name: 'FormBooking',
    data() {
        return {
            center: { lat: 2.01829942878062, lng: 98.96486180212405 },
            currentPlace: null,
            markers: [],
            places: [],
            latitude: 2.058551361455722,
            longitude: 98.9523052119784,
            routedata: {},
            data: {
                address: "",
                bicycle: {
                    id: 0,
                    imageUrl: "",
                    name: "",
                    rents: [
                        null
                    ],
                    stock: 0
                },
                name: "",
                noHp: "",
                orderQuantity: 0,
                numberOfRents: 0,
                rentType: null,
                rentPrice: 0,
                totalPrice: 0,
                deliveryService: false,
                deliveryServiceDistance: 0,
                deliveryServicePrice: 0
            },
            rentID: "",
            username: "",
            resData: {}
        }
    },
    computed: {
        totalRental() {
            if (this.data.orderQuantity != 0 && this.data.numberOfRents != 0 && this.data.rentType) {
                return this.data.orderQuantity * this.calculatetotalrent(this.data.numberOfRents, this.data.rentType)
            } else {
                return 0
            }
        },
        deliveryServiceDistance() {
            if (this.latitude != '' && this.longitude != '') {
                this.onGetDelivery();
            }
        },
        totalprice() {
            if (this.totalRental) {
                if (this.data.deliveryService == true) {
                    return this.totalRental + this.data.deliveryServicePrice
                } else {
                    return this.totalRental
                }
            } else {
                return 0
            }
        }
    },
    created() {
        this.routedata = this.$route.params.data
    },
    mounted() {
        this.username = localStorage.getItem("username")
        this.onGetDelivery();
    },
    methods: {
        currency(data) {
            return 'Rp. ' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ',00';
        },
        calculatetotalrent(rent, type) {
            if (type == 'Jam' && this.data.numberOfRents%3 != 0) {
                return rent * 10000
            } 
            else if (type == 'Jam' && this.data.numberOfRents%3 == 0) {
                return rent * 20000 / 3
            } else if (type == 'Hari') return rent * 50000
            else return rent * 300000
        },
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng(),
                };
                this.markers.push({ position: marker });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function () {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },
        oncancel() {
            event.preventDefault();
            this.$router.push({ path: './' })
        },
        onOrder(e) {
            e.preventDefault();
            this.data.totalPrice = this.totalprice;
            this.data.totalRental = this.totalRental;
            this.data.bicycle.imageUrl = this.routedata.imageUrl;
            this.data.bicycle.id = this.routedata.id;
            this.data.bicycle.stock = this.routedata.stock;
            this.data.bicycle.name = this.routedata.name;
            this.data.bicycle.rents = this.routedata.rents;
            console.log(this.data)
            service.postRent(this.data).then(res => {
                if (res.data.code == "200") {
                    this.resData = res.data.data[0]
                    this.showModal();
                }
            })
        },

        onGetDelivery() {
            var data = {
                lat1: this.center.lat,
                lon1: this.center.lng,
                lat2: this.latitude,
                lon2: this.longitude
            }
            service.getDeliveryPrice(data).then(res => {
                if (res.data) {
                    this.data.deliveryServiceDistance = res.data.distance
                    this.data.deliveryServicePrice = res.data.price
                }
            })
        },
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
            this.$router.push({ path: './' })
        },
        toggleModal() {
            this.$refs['my-modal'].toggle('#toggle-btn')
        }
    }
}
</script>

<style scoped>
h3 {
    margin: 0 auto;
}

.bg-header {
    color: white;
    font-weight: bold;
    background: #00AF9C;
}

.card {
    margin: 100px auto;
}

.pl-0 {
    padding-left: 0px;
}

.btn-bg1 {
    background: #00AF9C;
    color: white;
    border: solid #00AF9C;
}

.btn-cancel {
    background: red;
    color: white;
    border: solid red;
}
</style>
