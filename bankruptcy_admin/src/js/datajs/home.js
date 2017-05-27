$(function(){
    $('.loginout').on('click',function(){
        Base.commonConfirm({
            message:'确定退出吗?',
            url:appConfig.serverPath+'logout',
            success:function (res) {
                if(res.dataStatus=='t1'){
                    location.href = '../login/index.html';
                }
            }
        })
    })
})