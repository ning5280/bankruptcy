myApp.controller('homeList',['$scope',function($scope){
	Base.ajax({
        url:appConfig.serverPath+'/article/pageList',
        data:{pageSize:999,orderBy:'a.update_time desc'},
        loading:true,
        success:function(res){
            if(res.dataStatus=='t1'){
            	var dataDjson = res.dataResult.list;
                // console.log(dataDjson);
                var list={};
                dataDjson.map(function(item,index){
                    if(list[item.guide]){
                        list[item.guide].push(item);
                    }else{
                        list[item.guide]=[];
                        list[item.guide].push(item);
                    }
                });
                // console.log(list);
                $scope.$apply(function(){
                     $scope.dataAll = list;

                })
            }
        }
    })
    $scope.announce=function(id){
        $('.y-thirdSection iframe').attr('src',"../iframe/inform.html?id="+id);
    }
    
}])