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

        </div>
        <!-- /login_input -->
    </div>
    <!-- /login_box -->
</template>

<script>
export default {
   
}


</script>

<style scoped>
.login_box{
    position: relative;
    display:block;
    text-align:center;
    width:100%;
    height:16em;
    background: -webkit-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: -o-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: -moz-linear-gradient(-90deg, #2e73ff , #184ebc);
    background: linear-gradient(-90deg, #2e73ff , #184ebc);
}
.login_box .logo_box{
    position:relative;
    display:block;
    width:auto;
    height:16em;
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
    border-radius:1em;
    z-index:2;
}
</style>