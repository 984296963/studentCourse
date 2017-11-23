<template>
  <div id="app">
    <el-row class="header">
      <el-col :span='4'>
        <div class="title">选课系统</div>
      </el-col>
      <el-col :span='20'></el-col>
    </el-row>
    <el-row>
      <el-col :span='4' class='leftNav'>
        <el-menu router=true default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <!--  -->
          <el-submenu index="/student">
            <template slot="title"><i class="el-icon-message"></i>
              <span>学生管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/student/info">档案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <el-submenu index="/course">
            <template slot="title"><i class="el-icon-menu"></i>
              课程管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/course/info">信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <el-submenu index="/class">
            <template slot="title"><i class="el-icon-setting"></i>
              班级管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/class/info">档案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <el-submenu index="/sc">
            <template slot="title"><i class="el-icon-setting"></i>
              选课管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="/sc/info">档案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span='20' class="container">
        <!--路由出现的位置-->
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
  name: 'app', // el:'#app'
  data:function(){
    return {
      title:'Hello World'
    }
  },
  mounted:function(){
    $('.leftNav').height($(window).height()-48);
  }
}
</script>

<style>
  body{
    margin: 0;
    padding:0;
  }
  .header{
    background-color: #1f2d3d;
    color: #FFF;
  }
  .header .title{
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 18px;
  }
  .leftNav{
    background-color: #48576a;
  }
  .container{
    padding: 10px;
  }
</style>
