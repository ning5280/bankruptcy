myApp.controller('articleList',['$scope','$sce',function($scope,$sce){
	var id = Base.getUrlParam('id');
	Base.ajax({
        url:appConfig.serverPath+'article/info',
        data:{id:id},
        loading:true,
        success:function(res){
            if(res.dataStatus=='t1'){
            	//二级标题
            	//获取一级标题
            	var dataDjson = res.dataResult;
				var id = dataDjson.guide.substr(0,1);
				document.title = dataDjson.title+'-中国破产法论坛网';
				$scope.id = id;
				var Djson = {};
				var Dnum = 0
				$.each(serverConstant_GuideEnum, function(i) {
					var Dkey = i;
					
					if(i.indexOf(id+'_')!=-1){
						Djson[Dnum] = {};
						Djson[Dnum]['id'] = Dkey;
						Djson[Dnum]['name'] = serverConstant_GuideEnum[Dkey];
						if(id == 2){
							Djson[Dnum]['url'] = '../viewList/list.html?id='+id+'&guide='+Dkey;
						}else{
							Djson[Dnum]['url'] = '../articleList/list.html?id='+id+'&guide='+Dkey;
						}
						Dnum++;
					}
				});
				//二级标题的切换事件
				$scope.chosedIndex = dataDjson.guide.substr(2,1)-1;
				$scope.secondNameD = Djson[0]['name'];
				$scope.secondSrc = Djson[0]['id'];
				$scope.DtwoClick = function(index){
					$scope.chosedIndex = index;
					$scope.secondNameD = Djson[index]['name'];
					$scope.secondSrc = Djson[index]['id'];
				}
                $scope.$apply(function(){
                	$scope.GuideEnum = serverConstant_GuideEnum[id];
                    $scope.Dsecond = Djson;
                    $scope.dataAll = dataDjson;
                    $scope.content=$sce.trustAsHtml($scope.dataAll.articleHtmlContent);
                })
            }
        }
    })
	
    Base.ajax({
        url:appConfig.serverPath+'article/pageList',
        data:{pageSize:3},
        loading:true,
        success:function(res){
        	console.log(res)
            if(res.dataStatus=='t1'){
                $scope.$apply(function(){
                    $scope.dataList = res.dataResult.list;
                })
            }
            
//          var middleHeight = $('.d-ct-content').height();
//			var articleHeight = $('.d-ct-article').height();
//			var leftHeight = $('.d-ct-left').height();
//			console.log(middleHeight);
//			console.log(articleHeight);
//			if(middleHeight<articleHeight){
//				$('.d-ct-middle').height(articleHeight);
//			}
        }
    })
}])

$(function(){
	//详情页中的页面高度问题
	
		
	
})
