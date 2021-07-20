<template>
    <div>
        <div class="card text-center" style="max-width: 480px">
            <div class="card-header bg-header">
                <h3>Login</h3>
            </div>
            <div class="card-body px-5 py-4">
                <form @submit="login($event)" class="text-left">
                    <div class="form-group">
                        <div class="text-left">Username</div>
                        <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="username" v-model="logindata.username" required="true" />
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-left">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="logindata.password" required="true" />
                    </div>
                    <button class="btn btn-primary w-100 btn-bg1" type="submit">Login</button>
                </form>
                <router-link to="/register">Don't have an account?</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import service from '../service/service.js'
export default {
    name: 'Login',
    data() {
        return {
            logindata: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            service.postlogin(this.logindata).then(res => {
                if (res.data) {
                    if (res.data.code != "404") {
                        alert(res.data.message);
                        localStorage.setItem("username", this.logindata.username);
                        window.location.href = "/"
                    } else {
                        alert(res.data.message)
                    }
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
