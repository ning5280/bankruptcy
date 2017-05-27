$(function(){
    $('.tpl-login-btn').on('click',function(){
        var loginName = $('[name=loginname]').val();
        var password = $('[name=password]').val();
        Base.ajax({
            url:appConfig.serverPath+'login',
            data:{loginName:loginName,password:password},
            loading:true,
            success:function(res){
                if(res.dataStatus=='t1'){
                    location.href = '../home/index.html';
                }
            }

        })
    })
})