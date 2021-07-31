<template>
    <b-navbar toggleable="md" type="light">
        <b-navbar-brand to="/" style="color:white !important;border-right:solid 1px white; padding-right:15px;">
            <i class="fa fa-bicycle" aria-hidden="true"></i>LESTARIN RENTAL
        </b-navbar-brand>
    
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/" :active="$route.name == 'Home'">
                    <span class="cw">Home</span>
                </b-nav-item>
                <b-nav-item to="/transaction">
                    <span class="cw">Transactions</span>
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-if="username != ''">
                    <span v-if="username" style="color:white;margin-right:15px;">Welcome, {{username}}</span>
                    <span class="cw" @click="onLogout()" style="padding: 5px 10px;background: #00AF9C;">Logout</span>
                </b-nav-item>
                <b-nav-item to="/login" v-if="username == ''">
                    <span class="cw">Login</span>
    
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import services from "../service/service";

export default {
    name: "Header",
    data() {
        return {
            username: "",
        }
    },
    computed: {},
    created() {
        this.getUsername();
    },
    methods: {
        getUsername() {
            const user = localStorage.getItem("username")
            if (user) {
                this.username = user
            } else {
                this.username = "";
            }
        },
        onLogout() {
            if (this.username != '') {
                localStorage.clear();
            }
            this.getUsername();
            this.$router.push({ path: "/login" })
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    padding: 0.5rem 1rem;
    font-weight: bold;
    background: #1D434E;
}

.cw {
    color: lightgray !important;
}
</style>
