<template>
  <!-- ad_pass_button -->
  <div class="ad_pass" @click="ad_pass"><span>{{content}}</span></div>
  <!-- /ad_pass_button -->
</template>

<script>
export default {
  name: 'ad_pass',
  data () {
    return {
      content: '跳过广告 5s',  // 按钮里显示的内容
      totalTime: 5      //记录具体倒计时时间
    }
  },
  mounted(){

    this.countDown()  //加载倒计时
     // setTimeout(() => {
    //   this.$router.push({name:'login'})
    // }, 500);
  },
  methods:{

    // goto01:function(){
    //   this.$router.push({name:'login'})
    // },

    countDown() {
      let clock = window.setInterval(() => {
        this.totalTime--
        this.content = "跳过广告 " + this.totalTime + 's'
        if (this.totalTime < 1) {
          window.clearInterval(clock)
          this.totalTime = 0 
          // this.$router.push({name:'login'})
         this.content = "立即体验"
        }
        if (this.totalTime > 1) {
        }
      },1000)
    },

    ad_pass(){

      if (this.totalTime > 1) {
        alert("请登录成为会员")
      }
      if (this.totalTime < 1) {
        this.$router.push({name:'login'})
      }

    }

  }
}
</script>

<style scoped>
.ad_pass{
  positon:relative;
}
</style>