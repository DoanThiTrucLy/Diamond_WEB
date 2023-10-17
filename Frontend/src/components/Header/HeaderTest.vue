<template>
    <header class="header">
        <nav class="nav-pc">
            <div class="logo">
                <img class="w-100" src="https://theme.hstatic.net/1000381168/1000941305/14/logo.png?v=405" alt="Logo Image">
            </div>
            <ul class="nav-list text-uppercase">
                <li class="navigate active">
                    <router-link to="/" class="nav-link">Trang Chủ</router-link>
                </li>
                <li class="navigate">
                    <router-link to="/" class="nav-link">Kim Cương</router-link>
                </li>
                <li class="navigate">
                    <router-link to="/" class="nav-link">Sản Phẩm Kim Cương</router-link>
                </li>
                <li class="navigate">
                    <router-link to="/" class="nav-link">Đăng Ký</router-link>
                </li>
                <li class="navigate">
                    <router-link to="/" class="nav-link">Đăng Nhập</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {

}
</script>
<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: whitesmoke;
}

.nav-pc {
    display: flex;
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    justify-content: space-between;
    align-items: center;
}

.nav-pc .logo {
    width: 72px;
    margin-left: 24px;
    margin-right: 24px;
}

.nav-pc .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-pc .nav-list .navigate,
.nav-pc .nav-list .nav-auth {
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 5px;
    overflow: hidden;
}

.navigate:not(.active):hover {
    background-color: rgba(255, 0, 0, 0.08);
}

.navigate.active {
    color: #8F006D;
}

.nav-link {
    text-decoration: none;
    margin-right: 8px;
    color: inherit;
}
</style>