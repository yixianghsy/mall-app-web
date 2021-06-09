<template>
    <div class="navbar">

        <!--  default-active :　默认选中的菜单
            :router="true" true表示开启路由模式,开启之后, index值代表的就是路由地址
          -->
     <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu >
          <template slot ="title">
              <i class="el-icon-s-goods"></i>
              <span>商品管理</span>
          </template>
      <el-menu-item index="/pms/addProduct">
        <i class="el-icon-circle-plus"></i>
        <span slot="title">新增商品</span>
      </el-menu-item>
          <el-menu-item index="/pms/product">
        <i class="el-icon-s-goods"></i>
        <span slot="title">查询商品</span>
      </el-menu-item>
            <el-menu-item index="/pms/esit">
        <i class="el-icon-menu"></i>
        <span slot="title">规格参数</span>
          </el-menu-item>
      </el-submenu>
            <el-submenu >
          <template slot ="title">
              <i class="el-icon-location"></i>
              <span>网站内容管理</span>
          </template>
      <el-menu-item index="">
        <i class="el-icon-menu"></i>
        <span slot="title">内容分类管理</span>
      </el-menu-item>
            <el-menu-item index="/content/save">
        <i class="el-icon-menu"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      </el-submenu>
        <el-menu-item index=" ">
        <i class="el-icon-user"></i>
        <span slot="title">索引库管理</span>
      </el-menu-item>
     <el-menu-item index="/member/">
        <i class="el-icon-user-solid"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/supplier/">
        <i class="el-icon-s-cooperation"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/staff/">
        <i class="el-icon-user"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
    </el-menu>

    </div>
</template>


<style scoped>
.el-menu {
    border-right: none;
}
</style>