<template>
    <!-- login_box -->
    <div class="login_box">
        <!-- logo_box -->
        <div class="logo_box">
            <div class="logo">
                <img src="../../assets/login/App_Logo_White.png">
            </div>
            <span>欢迎您来到</span>
            <span>我是文煒</span>
        </div>
        <!-- /logo_box -->
        <!-- login_input -->
        <div class="login_input">
            <div class="title">密码登录</div>
            <form>
                <!-- user -->
                <div class="user">
                    <svg-icon icon-class="user"></svg-icon><input type="text" v-model="login_input.username" id="username" >
                </div>
                <!-- /user -->

                <div class="psw">
                    <svg-icon icon-class="psw"></svg-icon><input type="text" v-model="login_input.password" id="username" >
                </div>
                

                <button @click="login">登录</button>
            </form>
        </div>
        <!-- /login_input -->
    </div>
    <!-- /login_box -->
</template>

<script>
export default {
    
    data(){
        return {
            login_input:{
                username:'请输入您的账号',
                password:'请输入您的密码',
            },
        }
    },
    
}


</script>

<style scoped>
.login_box{
    position: relative;
    display:block;
    text-align:center;
    width:100%;
    height:100%;
    overflow: hidden;
}
.login_box .logo_box{
    position:relative;
    display:block;
    width:auto;
    height:16em;
    padding:0 2em;
    background: -webkit-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: -o-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: -moz-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: linear-gradient(-90deg, #2e73ff , #184ebc);
    z-index:1;
}
.login_box .logo_box .logo{
    position:relative;
    display:inline-block;
    margin-top: 3em;
    width:6em;
    height:6em;
}
.login_box .logo_box .logo img{
    width:100%;
    height:auto;
}
.login_box .logo_box span:nth-child(2){
    display:block;
    font-size:1em;
    color:#FFF;
    letter-spacing: 0.05em;
}
.login_box .logo_box span:nth-child(3){
    display:block;
    font-size:2em;
    color:#FFF;
    letter-spacing: 0.05em;
}
.login_box .login_input{
    position:relative;
    background:#FFF;
    margin-top:-1em;
    height:auto;
    padding: 0 2em;
    border-radius:1em;
    z-index:2;
    overflow: hidden;
}
.login_box .login_input .user{
    position:relative;
    display:block;
    width:100%;
    height:auto;
    overflow:hidden;
    margin-bottom: 1em;
    border-bottom: 0.0625em #efefef solid;
}
.login_box .login_input .user:active{
    border-bottom: 0.0625em #184ebc solid;
}
.login_box .login_input .user:active .svg-icon{
    color:#184ebc;
}
.login_box .login_input .user:active input{
    color:#184ebc;
}
.login_box .login_input .psw{
    position:relative;
    display:block;
    width:100%;
    height:auto;
    overflow:hidden;
    margin-bottom: 1em;
    border-bottom: 0.0625em #efefef solid;
}
.login_box .login_input .psw:active{
    border-bottom: 0.0625em #184ebc solid;
}
.login_box .login_input .psw:active .svg-icon{
    color:#184ebc;
}
.login_box .login_input .psw:active input{
    color:#184ebc;
}
.login_box .login_input .user .svg-icon,.login_box .login_input .psw .svg-icon{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 2em;
    margin-top:-0.5em;
    margin-left:-2em;
    height: 2em !important;
    color: #bfbfbf;
}
.login_box .login_input .title{
    font-size: 1.3em;
    text-align: left;
    padding: 1.5em 0 1em;
    letter-spacing: 0.05em;
}
.login_box .login_input input{
    position: relative;
    display: inline-block;
    text-align:left;
    width: 80%;
    height: auto;
    font-size: 1em;
    line-height: 2.6em;
    text-indent: 0.5em;
    color: #bfbfbf;
    border: none;
    margin-left: 0.5em;
    margin-bottom: 0em;
    border-bottom:none;
    outline: #184ebc;
    border-radius: 1%;
}
.login_box .login_input button{
    width: 100%;
    height:3em;
    border:none;
    border-radius: 0.6em;
    font-size:1em;
    color:#FFF;
    margin-top: 2em;
    letter-spacing: 0.05em;
    line-height: 3em;
    background: -webkit-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: -o-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: -moz-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: linear-gradient(-90deg, #2e73ff , #184ebc);
    outline: none;
    transition:0.5s ease-in-out;
}
.login_box .login_input button:active{
    background: -webkit-linear-gradient(90deg, #1c1c1c , #333);
    background: -o-linear-gradient(90deg, #1c1c1c , #333);
    background: -moz-linear-gradient(90deg, #1c1c1c , #333);
    background: linear-gradient(90deg, #1c1c1c , #333);
    transition:0.5s ease-in-out;
}
</style>