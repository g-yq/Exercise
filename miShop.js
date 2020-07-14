// let btn = document.getElementById('btnl');
// btn.onclick = function () {
//   console.log('点击了')
// }
let nextPic = function () {
  console.log('下一张')
}
let upPic = function () {
  console.log('上一张')
}
// var endTime = new Date('19:00'),endSeconds = endTime.getTime();
// var h=m=s=0
// let id = setInterval(seckill,1000)
// function seckill() {
//   let nowTime = new Date()
//   let remaining = parseInt((endSeconds - nowTime.getTime()) / 1000);
//   if (remaining > 0){
//     d = parseInt(remaining / 86400)
//     h = parseInt((remaining / 3600)%24)
//     m = parseInt((remaining /60)%60)
//     s = parseInt(remaining % 60)
//   }
//   document.getElementById('h').innerHTML = h + '小时'
//   document.getElementById('m').innerHTML = m + '分钟'
//   document.getElementById('s').innerHTML = s + '秒'
// }

const app = new Vue({
  el: '#app',
  data: {
    images: ['./images/bg01.webp','./images/bg02.jpg','./images/bg03.webp','./images/bg04.webp','./images/bg05.webp'],
    img: ['./images/'],
    phone: [
      {name: '小米10 青春版 5G',img: './images/01.webp', title: '50倍潜望式镜头',price: '1899元起',delete: '2099元'},
      {name: '小米10',img: './images/02.webp', title: '骁龙865/1亿像素相机',price: '3799元起',delete: '3999元'},
      {name: 'Redmi K30 Pro',img: './images/03.webp', title: '双模5G，骁龙865，弹出全面屏',price: '2499元起',delete: '2999元'},
      {name: 'Redmi K30 Pro 变焦版',img: './images/04.webp', title: '双模5G，骁龙865，弹出全面屏',price: '3799元起',delete: ''},
      {name: '小米10 Pro',img: './images/05.webp', title: '骁龙865/50倍变焦',price: '4999元起',delete: ''},
      {name: 'Redmi K30',img: './images/06.webp', title: '120Hz流速屏，全速热爱',price: '1499元起',delete: '1699元'},
      {name: 'Redmi K30 5G',img: './images/07.webp', title: '双模5G，120Hz流速屏',price: '1899元起',delete: '2299元'},
      {name: 'Redmi 8',img: './images/08.webp', title: '5000mAh超长续航',price: '799元起',delete: ''},
    ],
    autoPlayPic1: [
      {name: '小米AI音箱',img: './images/lunbo01.jpg', title: '听音乐、语音遥控家电',price: '199元',delete: '299元'},
      {name: '小米净水器S1 800G 白色',img: './images/lunbo02.jpg', title: ' APP检测水质，OLED屏显水龙头',price: '2499元',delete: '2999元'},
      {name: '小米移动电源10000mAh高配',img: './images/lunbo13.jpg', title: ' 轻薄设计，轻松出行',price: '129',delete: '149元'},
      {name: '圈厨多功能涮烤锅',img: './images/lunbo04.jpg', title: '深浅双盘多用途',price: '329元',delete: '399元'}
    ],
    autoPlayPic2: [
      {name: 'RedmiBook 13 锐龙版 R5',img: './images/lunbo05.jpg', title: '全面屏高性能轻薄本',price: '3799元',delete: '3999元'},
      {name: '米家电磁炉',img: './images/lunbo06.jpg', title: '双频火力，精准控温',price: '279元',delete: '299元'},
      {name: '米家直流变频落地扇1X',img: './images/lunbo07.png', title: '模拟自然风算法',price: '279元',delete: '299元'},
      {name: ' 14 Ⅱ R5 8G 512G',img: './images/lunbo08.jpg', title: '全面屏高性能轻薄本',price: '3599元',delete: '3799元'},
    ],
    autoPlayPic3: [
      {name: '小米净水器1A（厨下式）',img: './images/lunbo09.webp', title: '小身材节省空间，大流量直出纯净水',price: '999元',delete: '1499元'},
      {name: '定频 | 米家空调 大1匹',img: './images/lunbo10.jpg', title: '出众静音，快速制冷热',price: '1499元',delete: '1799元'},
      {name: '日常元素抽纸 青春版 24包/箱',img: './images/lunbo11.webp', title: '精选原生竹浆，健康环保',price: '27.9元',delete: '32.9元'},
      {name: 'DR·BEI 免洗抑菌洗手液',img: './images/lunbo12.jpg', title: '有效消毒抑菌，长效健康防护',price: '30元',delete: '49元'},
    ],
    second: [
      {name: '小米10 青春版 5G',img: './images/01.webp', title: '50倍潜望式镜头',price: '1899元起',delete: '2099元'},
      {name: '小米10',img: './images/02.webp', title: '骁龙865/1亿像素相机',price: '3799元起',delete: '3999元'},
      {name: 'Redmi K30 Pro',img: './images/03.webp', title: '双模5G，骁龙865，弹出全面屏',price: '2499元起',delete: '2999元'},
      {name: 'Redmi K30 Pro 变焦版',img: './images/04.webp', title: '双模5G，骁龙865，弹出全面屏',price: '3799元起',delete: ''},
      {name: '小米10 Pro',img: './images/05.webp', title: '骁龙865/50倍变焦',price: '4999元起',delete: ''},
      {name: 'Redmi K30 5G',img: './images/07.webp', title: '双模5G，120Hz流速屏',price: '1899元起',delete: '2299元'}
    ],
    current: 0,
    isShow: 0
  },
  methods: {
    changeCurrent(index) {
      this.current = index
    },
    up() {
      this.current -= 1;
      if(this.current < 0){
        this.current = 4
      }
    },
    next() {
      this.current += 1;
      if(this.current > 4){
        this.current = 0
      }
    },
    before(isShow){
      this.isShow -= 1
      if(this.isShow < 0) {
        this.isShow = 2
      }
    },
    last(isShow) {
      this.isShow += 1
      // console.log('是我',this.isShow)
      if(this.isShow > 2){
        this.isShow = 0
        // console.log('小于2',this.isShow)
      }
    },
    autoIsShow(){
      this.isShow ++ 
      // console.log('打印list')
      if(this.isShow > 1 ){
        this.isShow = 0;
      }
      // console.log(this.list)
    },

    autoPlay(){
      this.current ++ ;
      // console.log('autoplay')
      if(this.current > 4){
        this.current = 0
      }
    },
    play() {
      // console.log('play')
      this.time1 = setInterval(this.autoPlay,3000);
    },
    play1(){
      setInterval(this.autoIsShow,4000)
    },
    // 鼠标移入停止轮播
    stop() {
      clearInterval(this.time1)
    },
    // 鼠标移出，开始轮播
    start(){
      this.time1 = setInterval(this.autoPlay,3000)
    }
    // readIndex (index) {
    //   console.log(index)
    // }
  },
  created () {
    this.play();
    this.play1();
  }
})