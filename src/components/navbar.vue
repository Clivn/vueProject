<template>
  <div class="nav">
    <ul>
     <!-- <li class="active"><a href="index_m.html" >首页</a></li>
      <li><a href="fllow_m.html">关注</a></li>
      <li><a href="column_m.html">栏目</a></li>-->
      <router-link to="/home" tag="li" active-class="active">
        <a href="javascript:;" >首页</a>
      </router-link>
      <router-link to="/follow" tag="li" active-class="active">
        <a href="javascript:;" >关注</a>
      </router-link>
      <router-link to="/column" tag="li" active-class="active">
        <a href="javascript:;" >栏目</a>
      </router-link>

    </ul>
  </div>
</template>
<script>
</script>
<style></style>