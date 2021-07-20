<template>
    <div>
        <div class="card text-center" style="max-width: 480px">
            <div class="card-header bg-header">
                <h3>Pendaftaran</h3>
            </div>
            <div class="card-body px-5 py-4">
                <form @submit="register($event)" class="text-left">
                    <div class="form-group">
                        <div class="text-left">Nama lengkap</div>
                        <input type="text" class="form-control" id="fullname" aria-describedby="Nama lengkap Sesuai Ktp" placeholder="Nama lengkap Sesuai Ktp" v-model="data.fullName" required="true" />
                    </div>
                    <div class="form-group">
                        <div class="text-left">Alamat lengkap</div>
                        <input type="text" class="form-control" id="alamat" aria-describedby="Alamat Sesuai Ktp" placeholder="Alamat Sesuai Ktp" v-model="data.address" required="true" />
                    </div>
                    <div class="form-group">
                        <div class="text-left">Nomor telp</div>
                        <input type="text" class="form-control" id="notelp" aria-describedby="No. Telp" placeholder="No.Telp" v-model="data.noHp" required="true" />
                    </div>
                    <div class="form-group">
                        <div class="text-left">Email</div>
                        <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Email" v-model="data.email" required="true" />
                    </div>
                    <div class="form-group">
                        <div class="text-left">Username</div>
                        <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="username" v-model="data.username" required="true" />
                    </div>
                    <div class="form-group">
                        <div class="text-left">Password</div>
                        <input type="password" class="form-control" id="password" aria-describedby="password" placeholder="password" v-model="data.password" required="true" />
                    </div>
                    <div class="row">
                        <div class="col-md-6" style="padding-top:5px">
                            <button class="btn btn-primary w-100" type="submit">daftar</button>
                        </div>
                        <div class="col-md-6" style="padding-top:5px">
                            <button class="btn btn-primary w-100" v-on:click="oncancel()">batal</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import service from "../service/service.js";
export default {
    name: 'Register',
    data() {
        return {
            data: {
                address: "",
                email: "",
                fullName: "",
                noHp: "",
                password: "",
                username: ""
            }
        }
    },
    methods: {
        register(e) {
            e.preventDefault();
            service.register(this.data).then(res => {
                if (res.data) {
                    if (res.data.code != "404") {
                        alert(res.data.message)
                        this.$router.push({ path: '/login' })
                    } else {
                        alert(res.data.message)
                    }
                }
            })
        },
        oncancel() {
            event.preventDefault();
            this.$router.push({ path: './login' })
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

.btn-bg1 {
   background: #00AF9C;
   color: white;
   border: solid #00AF9C;
}
</style>
