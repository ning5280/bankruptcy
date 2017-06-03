myApp.controller('informInfo',['$scope','$sce',function($scope,$sce){
	Base.ajax({
        url:appConfig.serverPath+'article/pageList',
        data:{guide:'3_1',pageSize:1},
        loading:true,
        success:function(res){
            if(res.dataStatus=='t1'){
            	var serId = res.dataResult.list[0].id;
            	var id = Base.getUrlParam('id')?Base.getUrlParam('id'):serId;
				Base.ajax({
			        url:appConfig.serverPath+'article/info',
			        data:{id:id},
			        loading:true,
			        success:function(res){
			            if(res.dataStatus=='t1'){
			            	var dataDjson = res.dataResult;	
			                $scope.$apply(function(){
			                    $scope.dataAll = dataDjson;
			                    $scope.content=$sce.trustAsHtml($scope.dataAll.articleHtmlContent);
			                })
			            }
			        }
			    })
            }
        }
    })
	
}])
