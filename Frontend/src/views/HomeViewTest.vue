<template>
    <div class="container">
        <div id="carouselExampleControls" class="carousel slide mt-4" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://cdn.pnj.io/images/promo/177/kimcuong-t8-1200X450__1___1_.jpg" class="d-block w-100"
                        alt="img carousel">
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.pnj.io/images/promo/146/kvv2_1200x450-best_seller.jpg" class="d-block w-100"
                        alt="img carousel">
                </div>
                <div class="carousel-item">
                    <img src="https://file.hstatic.net/1000381168/collection/web-3_7d7345db617845e3a434d730f95ea6d9.png"
                        class="d-block w-100" alt="img carousel">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>

        <div class="product row  my-4">
            <div class="col col-lg-3">
                <div class="card">
                    <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/102/gbdd00w000225-bong-tai-kim-cuong-vang-trang-14k-pnj.png"
                        class="card-img-top" alt="sản phẩm">
                    <div class="card-body">
                        <p class="card-text">
                            <span>Bông tai Kim cương Vàng trắng 14K PNJ DD00W000225</span>
                            <span class="product-price">49.521.000đ</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-lg-3">
                <div class="card">
                    <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/179/sp-gmddddh000077-mat-day-chuyen-kim-cuong-vang-14k-pnj-family-infinity-01.png"
                        class="card-img-top" alt="sản phẩm">
                    <div class="card-body">
                        <p class="card-text">
                            <span>Bông tai Kim cương Vàng trắng 14K PNJ DD00W000225</span>
                            <span class="product-price">49.521.000đ</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-lg-3">
                <div class="card">
                    <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/136/gnddddw003706-nhan-kim-cuong-vang-trang-14k-pnj-true-love-19-1.png"
                        class="card-img-top" alt="sản phẩm">
                    <div class="card-body">
                        <p class="card-text">
                            <span>Bông tai Kim cương Vàng trắng 14K PNJ DD00W000225</span>
                            <span class="product-price">49.521.000đ</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col col-lg-3">
                <div class="card">
                    <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/55/gbdrwa72039.5a0-bong-tai-kim-cuong-pnj-vang-trang-14k.png"
                        class="card-img-top" alt="sản phẩm">
                    <div class="card-body">
                        <p class="card-text">
                            <span>Bông tai Kim cương Vàng trắng 14K PNJ DD00W000225</span>
                            <span class="product-price">49.521.000đ</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.carousel-item {
    height: 420px;
}

.carousel-item img {
    height: 100%;
}

.card-text {
    text-align: center;
    display: flex;
    flex-direction: column;
}

.product-price {
    color: #c48c46;
}
</style>