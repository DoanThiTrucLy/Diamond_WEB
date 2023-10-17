<template>
    <div class="container mt-3 mb-3" >
        <h1>Đăng Nhập</h1>
        <div class="row">

            <div class="col-lg-3"></div>
            <form class="form-col col-lg-6" method="POST" @submit.prevent="handleSubmitForm()">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="formLogin.username">
                </div>
                <div class="form-group">
                    <label for="pwd">Password</label>
                    <input type="password" class="form-control" id="pwd" v-model="formLogin.password">
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
                <span style="font-style: italic;">Bạn chưa có tài khoản? <router-link to="/auth/signup">đăng ký</router-link></span>
            </form>
        </div>
    </div>
</template>
<script>
import authService from '../services/auth.service.js';
export default {
    data() {
        return {
            formLogin: {
                username: '',
                password: ''
            }
        }
    },

    methods: {
        async handleSubmitForm() {
            const res = await authService.login(this.formLogin);
            console.log(res);
            if(res.status == 200) {
                this.$router.push('/');
            }
            else {
                alert('username hoặc password không đúng');
            }
        }
    }
}
</script>
<style scoped>
.container {
    min-height: 71.3vh;
}

/* Đổi màu nền của biểu mẫu */
form {
    background-color: rgb(246, 116, 246);
    margin-top: 4rem;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 15px;
}

/* Đổi màu nền của nút Sign in */
.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    float: right;
}

/* Đổi màu chữ của nút Sign in */
.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

</style>
