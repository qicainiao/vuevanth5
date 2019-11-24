<template>
  <div class="hello">
    <jy-button type="default">默认按钮</jy-button>
    <jy-button type="primary">主要按钮</jy-button>
    <jy-button type="info">信息按钮</jy-button>
    <jy-button type="warning">警告按钮</jy-button>
    <jy-button type="danger">危险按钮</jy-button>
  </div>
</template>

<script>
import { Button } from "juanziaaa";
import api from "api";
export default {
  components: {
    [Button.name]: Button
  },
  props: {
    msg: String
  },

  created() {
    api.fnGetRecordRule().then(res => {
      console.log("====fnGetRecordRule=======", res);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

.hello{
    font-family: "FZZhiATJW";
}
</style>
