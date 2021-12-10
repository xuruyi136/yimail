<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />

      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />

      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />

      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBarItem from "components/common/tabbar/TabBarItem";

import TabBar from "components/common/tabbar/TabBar";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
/* @import "assets/css/base.css"; */
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

body {
  padding: 0;
  margin: 0;
}
</style>
