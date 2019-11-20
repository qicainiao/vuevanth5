<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <jy-button type="default">默认按钮</jy-button>
    <jy-button type="primary">主要按钮</jy-button>
    <jy-button type="info">信息按钮</jy-button>
    <jy-button type="warning">警告按钮</jy-button>
    <jy-button type="danger">危险按钮</jy-button>
  </div>
</template>

<script>
import { Button } from 'juanziaaa';
export default {
  name: "HelloWorld",
  components: {
    [Button.name]: Button
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
