    function init(isPCFlag){
        
        $(".meritBox li").mouseover(function(){
            $(".contentText .imgText").hide();
            // $(".meritBox .imgbox").css({top:"0px"});
            // $(this).find(".imgText").show();
            $(".contentText .imgText").eq($(this).index()).show()
            $(this).find(".imgbox").animate({top:"-20px"},100);
        });
        $(".meritBox li").mouseleave(function(){
            $(".meritBox .imgbox").animate({top:"0px"},100);
        });
        // 背光动画效果
        function goamian(){
            if(isPCFlag){
            }else{
            }
        }
        setTimeout(()=>{
            $('.dscbottomBox').animate({
                'opacity': '1'
            }, 1000)
            setTimeout(()=>{
                $(".contentText .imgText").eq(0).fadeIn(1000)
            },1000)
        },500)
        $(".dilaog").hide()
        $(".email").bind("input propertychange",function () {
            if(!isEmail($(".email").val())) {
                $(".email").next(".verification").show()
            }else {
                $(".email").next(".verification").hide()
            }
        });
        $(".phone").bind("input propertychange",function () {
            if(!isCellphone($(".phone").val())) {
                $(".phone").next(".verification").show()
            }else {
                $(".phone").next(".verification").hide()
            }
        });
        $(".sbumit").click(()=>{
            // console.log(isEmail($(".email").val()))
            // console.log(isCellphone($(".phone").val()))
            if(!isEmail($(".email").val())) {
                $(".email").next(".verification").show()
                
            }else {
                $(".email").next(".verification").hide()
            }
            if(!isCellphone($(".phone").val())) {
                $(".phone").next(".verification").show()
            }else {
                $(".phone").next(".verification").hide()
            }
            if(isEmail($(".email").val()) && isCellphone($(".phone").val())){
                CloseDiv('MyDiv','fade')
                $(".dialog input").val("")
                // 方案一：直接取项目资源文件
                
                // var url = "./static/pdf/DataSheet_BT5300-v5.pdf";
                // window.open(url);
                let a = document.createElement('a');
                a.setAttribute('href','./static/pdf/DataSheet_BT5300-v5.pdf');
                a.setAttribute('download','BT5300-v5.pdf');
                a.setAttribute('target','_blank');
                document.body.appendChild(a);
                a.style.display = 'none';
                a.click();
                document.body.removeChild(a)


                // 方案二：通过接口获取文件流 content 创建下载任务
                // var fileName = 'BT5300-v5.pdf'
                // var aTag = document.createElement('a');
                // var blob = new Blob([content],{ type: 'application/pdf' });
                // aTag.download = fileName;
                // aTag.href = URL.createObjectURL(blob);
                // aTag.click();
                // URL.revokeObjectURL(blob);
                // document.body.removeChild(aTag)
            }
        })
        
    }
    function ShowDiv(show_div, bg_div) {
        $("#"+show_div).fadeIn(300)
        $("#"+bg_div).fadeIn(300)
        var bgdiv = document.getElementById(bg_div);
        // bgdiv.style.width = document.body.scrollWidth;
        $("#" + bg_div).height($(document).height());
        };
        //关闭弹出层
        function CloseDiv(show_div, bg_div) {
        $("#"+show_div).fadeOut(300)
        $("#"+bg_div).fadeOut(300)
        };
    
        function isCellphone(str) {
        /**
         *@descrition:手机号码段规则
        * 13段：130、131、132、133、134、135、136、137、138、139
        * 14段：145、147
        * 15段：150、151、152、153、155、156、157、158、159
        * 17段：170、176、177、178
        * 18段：180、181、182、183、184、185、186、187、188、189
        * 
        */
        var pattern =  /^1\d{10}$|^(0\d{2,3}-?|0\d2,3)?[1-9]\d{4,7}(-\d{1,8})?$/;
        return str?pattern.test(str):false;
    }
    function isEmail(str){
        /**
         * @descrition:邮箱规则
         * 1.邮箱以a-z、A-Z、0-9开头，最小长度为1.
         * 2.如果左侧部分包含-、_、.则这些特殊符号的前面必须包一位数字或字母。
         * 3.@符号是必填项
         * 4.右则部分可分为两部分，第一部分为邮件提供商域名地址，第二部分为域名后缀，现已知的最短为2位。最长的为6为。
         * 5.邮件提供商域可以包含特殊字符-、_、.
         */
        var pattern = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
        return str?pattern.test(str):false;
    }
    
       
