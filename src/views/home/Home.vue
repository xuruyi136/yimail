<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.code"></a>
      </swiper-item>
    </swiper> -->

  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      path: "/home/news",
      // result: null,

    };
  },
  //标题
  created() {
    // console.log("home created");
    // getHomeMultidata().then(response => (this.info = response.data.bpi));

    // document.title = "家";
  },
  destroyed() {
    console.log("home destroyed");
  },

  //这两个函数，只有组件被保持了状态使用了keep-alive时，才是有效的
  activated() {
    //活跃的
    console.log("activated");
    // this.$router.push(this.path);
  },
  deactivated() {
    //   //不活跃的
    //   console.log(this.$router.path)
    console.log("deactivated");
    //   this.path = this.$route.path;
  },

  //记录离开时的路径
  // beforeRouteLeave(to, from, next) {
  //   console.log(this.$route.path);
  //   this.path = this.$route.path;
  //   next();
  // },

  // mounted(){
  //   console.log('mounted')
  // },
  // updated(){
  //   console.log('updated')
  // },
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
