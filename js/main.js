let data = {
  experience : [
    {
      workyear : "2018/1~2019/1",
      company : "睿傳資訊股份有限公司",
      jobtitle: "資訊助理人員",
      content : ["軟體測試","硬體測試","撰寫圖表程式"]
    },
    {
      workyear : "2019/12~2021/2",
      company : "豐軒科技股份有限公司 ",
      jobtitle: "助理工程師",
      content : 
      [
        "產品文件撰寫(產品功能FA、產品畫面FA、產品說明)",
        "測試API",
        "撰寫自動化測試程式",
        "處理客服人員及業務助理回報問題",
        "處理公司產品方向及營運方向的工作"
      ]
    }
  ]
};

let vm = new Vue({
  el:"#app",
  data:data,
  mounted() {
    window.addEventListener('scroll', () => {
      const nav = this.$el.querySelector("nav");
      const navHeight = nav.offsetHeight;
      if (window.pageYOffset > navHeight) { 
        return nav.classList.add('black', 'lighten-3', 'shadow') 
      }
      else nav.classList.remove('black', 'lighten-3', 'shadow')
    })
  },
});
