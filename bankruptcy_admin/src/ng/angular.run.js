myApp.run(['ipCookie',function(ipCookie){

    if(!ipCookie('passport')){
        top.location.href = '../login/index.html';
    }
}])

myApp.value('appName','破产法论坛');

myApp.value('pageSize','12');

