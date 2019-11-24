<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/logo.png" class="app-icon" />
    </div>
    <strong>Pinjam Cash</strong>
    <span>Kami adalah platform pinjaman online yang dapat digunakan untuk melengkapi aplikasi pinjaman melalui aplikasi online. Pinjaman itu "tanpa jaminan, tanpa tanda tangan" dan Anda dapat mendaftar langsung menggunakan aplikasi. Setelah aplikasi disetujui, itu akan dibayarkan langsung ke rekening bank Anda.</span>
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
  height: 100%;;
  flex-direction: column;
  align-items: center;
  padding-left: 27px;
  padding-right: 27px;
  background: #ffffff;

  .header {
    width: 74.6px;
    height: 74.6px;
    margin-top: 40px;
    border-radius: 50%;
    display: flex;
    border: 0.5px solid @blue;
    justify-content: center;
    align-items: center;
    .app-icon {
      width: 43.8px;
      height: 43.8px;
    }
  }

  strong{
    font-family: SourceHanSansCN-Bold;
    font-size: 16px;
    color: @blue;
    text-align: center;
    margin-top: 18.4px;
  }
  span {
    font-family: SourceHanSansCN-Regular;
    font-size: 12px;
    color: @text-color;
    line-height: 20px;
    margin-top: 26px;
  }
}
</style>
