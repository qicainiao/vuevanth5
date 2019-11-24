<template>
  <div class="container">
    <span>Pernyataan privasi</span>
    <span>
      Untuk menghindari penipuan, kami memerlukan persetujuan Anda (otorisasi) untuk memberikan informasi perangkat Anda, GPS dan informasi lainnya. Jika Anda tidak setuju (otorisasi), aplikasi ini tidak akan berjalan.
      <br/>
       <br/>
      Untuk menghindari penipuan, kami memerlukan persetujuan Anda (otorisasi) untuk memberikan informasi perangkat Anda, GPS dan informasi lainnya. Jika Anda tidak setuju (otorisasi), aplikasi ini tidak akan berjalan.
      <br/>
       <br/>
      Untuk menghindari penipuan, kami memerlukan persetujuan Anda (otorisasi) untuk memberikan informasi perangkat Anda, GPS dan informasi lainnya. Jika Anda tidak setuju (otorisasi), aplikasi ini tidak akan berjalan.
    </span>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  span {
    font-family: SourceHanSansCN-Regular;
    margin-top: 26px;
    &:first-child {
      font-size: 20px;
      color: @blue;
    }

    &:last-child {
      font-size: 14px;
      color: @text-color;
      line-height: 20px;
    }
  }
}
</style>
