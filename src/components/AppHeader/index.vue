<template>
<div class="header"> 
            <a href="#/">
            <img class="logo" src="@/assets/logo.png" width="25px">
            <span class="company">商场后台管理系统</span>
        </a>
         <!-- 头部右侧下拉菜单 -->
        <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
        admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">修改密码</el-dropdown-item>
        <el-dropdown-item command="b">退出系统</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
</div>

</template>

<script>
import {logout} from '@/api/login'
export default {
        methods: {
            handleCommand(command) {
            // this.$message('click on item ' + command);
            //退出登录
            switch (command) {
                case 'a':
                    // 打开修改密码窗口
                    this.handlePwd()
                    break;
                case 'b':
                    // 退出系统
                    this.handleLogout()
                    break;
                default:
                    break;
            }
            },
            //退出系统
            handleLogout(){
                logout().then(response => {
                       const resp = response.data
                       if(resp.flag){
                            // 退出成功
                            // 清除本地数据
                            localStorage.removeItem('mxg-msm-token')
                            localStorage.removeItem('mxg-msm-user')
                            //回到登录页面
                            this.$router.push('/login')
                       }else{
                           //message UI自带的属性
                           this.$message({
                            message: resp.message,
                            type: 'warning',
                            duration: 500 // 弹出停留时间
                    });
                       }
                })
            },
            //打开修改密码窗口
            handlePwd(){

            }
        }
}
</script>

<style scoped>
.logo {
vertical-align: middle;
/* 上 右 下 左 */
padding: 0 10px 0 40px;
}
.company {
position: absolute;
color: white;
}
/* 下拉菜单 */
.el-dropdown {
float: right;
margin-right: 40px;
}
.el-dropdown-link {
cursor: pointer;
color: #fff;
}
</style>