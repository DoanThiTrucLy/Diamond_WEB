<template>
    <div class="container mt-3 mb-3">
        <h1>
            Đăng Ký
        </h1>

        <br />

        <div class="row">
            <div class="col-lg-3"></div>
            <form method="POST" @submit.prevent="handleSubmitForm" class="form-col col-lg-6">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="form-group-label" for="username">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="username" v-model="formRegister.username">
                    </div>
                    <div class="form-group col-md-6">
                        <label class="form-group-label" for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" v-model="formRegister.password">
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-group-label" for="fullname">Họ và tên</label>
                    <input type="text" class="form-control" id="fullname" placeholder="Nguyen Van A" v-model="formRegister.name">
                </div>
                <div class="form-group">
                    <label class="form-group-label" for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="email" v-model="formRegister.email">
                </div>
                <div class="form-group">
                    <label class="form-group-label" for="phone">Số điện thoại</label>
                    <input type="text" class="form-control" id="phone" placeholder="số điện thoại" v-model="formRegister.numberphone">
                </div>
                <div class="form-group">
                    <label class="form-group-label" for="address">Địa chỉ</label>
                    <input type="text" class="form-control" id="address"
                        placeholder="Khu 2, Đ. 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. CT" v-model="formRegister.address">
                </div>
                <button type="submit" class="btn btn-primary">Đăng ký</button>
                <br />
                <br />
                <span style="font-style: italic;">Bạn đã có tài khoản? <router-link to="/auth/signin">đăng nhập</router-link></span>
            </form>
        </div>
    </div>
</template>
<script>
import authService from '../services/auth.service.js';

export default {
    data() {
        return {
            formRegister: {
                username: '',
                password: '',
                name: '',
                numberphone: '',
                email: '',
                address: ''
            }
        }
    },

    methods: {
        async handleSubmitForm() {
            const res = await authService.register(this.formRegister);
            if(res.status == 201) {
                window.alert('Bạn đã đăng ký thành công!!!!');
                this.$router.push('/auth/signin')
            }
        }
    }
}
</script>
<style scoped>
/* Đoạn CSS dưới đây chỉ là một ví dụ và bạn có thể tùy chỉnh theo ý muốn */

/* Đổi màu nền của biểu mẫu */
form {
    background-color: #f0f0f0;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 15px;
}

/* Đổi màu nền của nút Sign in */
.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    padding: 5px 10px;
    font-size: 1.3rem;
}

/* Đổi màu chữ của nút Sign in */
.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

.form-col {
    background-color: rgb(246, 116, 246);
    box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 2.5rem;
}

.form-group-label {
    font-weight: 600;
}
</style>
