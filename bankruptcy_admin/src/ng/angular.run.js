myApp.run(['$rootScope','ipCookie',function($rootScope,ipCookie){

    if(!ipCookie('passport')){
        top.location.href = '../login/index.html';
    }


    var serverConstant_GuideEnum_Tree = [];
    for(var i in serverConstant_GuideEnum){
        if(i.indexOf('_')>0){continue;}
        serverConstant_GuideEnum_Tree.push({id:i,name:serverConstant_GuideEnum[i],treeName:serverConstant_GuideEnum[i]});

        for(var j in serverConstant_GuideEnum){
            // if(i.indexOf('_')<0){break;}
            // console.log(j);
            if(j.indexOf(i+'_')>=0){

                serverConstant_GuideEnum_Tree.push({id:j,name:serverConstant_GuideEnum[j],treeName:'--'+serverConstant_GuideEnum[j]});
            }
        }
    }
    console.log(serverConstant_GuideEnum_Tree)
    $rootScope.serverConstant_GuideEnum_Tree=serverConstant_GuideEnum_Tree;
}])

myApp.value('appName','破产法论坛');

myApp.value('pageSize','12');

