// bgimg.js

function MiddleBg(obj){
    this.id = obj.id;
    this.imgsrc = obj.imgsrc;
    this.bgimgDOM = document.getElementById(this.id);
    this.bgimg = new Image();
    this.bgimg.src = this.imgsrc;
}

MiddleBg.prototype = {
    init: function(){
        this.bgimgDOM.className = this.id + '_bgimg';
        let styleEle = document.createElement('style');

        // es6 模板字符串，不了解的请自行查阅
        styleEle.innerHTML = `
        .${this.bgimgDOM.className}{
            background: url('${this.imgsrc}') no-repeat center;
        }`;
        this.bgimgDOM.appendChild(styleEle);
    },
    resizeListener: function(){
       // console.log(this.bgimgDOM.style.backgroundSize);
        // if(this.bgimgDOM.style.backgroundSize){
        //     if (window.innerWidth / window.innerHeight >= this.bgimg.naturalWidth / this.bgimg.naturalHeight) {
        //         console.log(1111)
        //         this.bgimgDOM.style.backgroundSize = '100% auto';
        //     } else {
        //         console.log(222)
        //         this.bgimgDOM.style.backgroundSize = 'auto 100%';
        //     }
        // }else{
        //     this.bgimgDOM.style.backgroundSize = 'auto 100%';
        // }
       // console.log(this.bgimgDOM.style.backgroundSize);
       this.bgimgDOM.style.backgroundSize = 'cover';
       
    },
    bgRender: function(){
        // onload 确保图片资源已加载以获取图片原始大小，再进行箭头函数中的操作
        // window.onload = ()=>{ // es6 箭头函数，不了解的请自行查阅(只能执行一次)
        //     this.init();
        //     this.resizeListener();
        // }
        $(()=> {
            this.init();
            this.resizeListener();
        }) 
        window.onresize = ()=>{ // 添加监听事件，在此处使用箭头函数，防止this指向window
            this.resizeListener();
        }
    }
}