myApp.controller('articleList',['$scope','pageSize',function($scope,pageSize){
	//获取搜索关键词
	var keywords = Base.getUrlParam('keywords')?Base.getUrlParam('keywords'):'';

	$scope.keywords = decodeURI(keywords) ;
	//获取二级导航
	//获取一级标题
	var id = Base.getUrlParam('id')?Base.getUrlParam('id'):'';
	$scope.GuideEnum = serverConstant_GuideEnum[id];
	
	
	$scope.id = id;
	var Djson = {};
	var Dnum = 0;
	$.each(serverConstant_GuideEnum, function(i) {
		var Dkey = i;
		
		if(i.indexOf(id+'_')!=-1){
			Djson[Dnum] = {};
			Djson[Dnum]['id'] = Dkey;
			Djson[Dnum]['name'] = serverConstant_GuideEnum[Dkey];
			
			Dnum++;
		}
	});
	$scope.Dsecond = Djson;
	//获取guide
	var guide = Base.getUrlParam('guide')?Base.getUrlParam('guide'):Djson[0]['id'];
	//二级标题的切换事件
	if(Base.getUrlParam('guide')){
		$scope.chosedIndex = Base.getUrlParam('guide').substr(2,1)-1;
	}else{
		$scope.chosedIndex = 0;
	}
	
	$scope.secondNameD = Djson[0]['name'];
	$scope.DtwoClick = function(index){
		$scope.chosedIndex = index;
		$scope.secondNameD = Djson[index]['name'];
	}

	//二级导航点击事件

	$scope.DarticClick = function(guide,name){

		Base.ajax({
            url:appConfig.serverPath+'article/pageList',
            data:{pageSize:pageSize,pageNo:$scope.paginationConf.currentPage,guide:guide,searchContent:keywords},
            loading:true,
            success:function(res){
            	console.log(res);
                if(res.dataStatus=='t1'){
                    $scope.$apply(function(){
                        $scope.dataList = res.dataResult.list;
                        $scope.dataOther = res.dataResult;
                        $scope.paginationConf.totalItems = res.dataResult.count;
                        $scope.paginationConf.currentPage = 1;
                    })
                }
            }
        })
	}
	
    var reqNum = 0;
    $scope.dataList = [];
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 100,
        itemsPerPage: pageSize,
        pagesLength: 5,
        perPageOptions: [parseInt(pageSize)],
        rememberPerPage: 'perPageItems',
        onChange: function(){
            reqNum++;
            if(reqNum==2){
                return false;
            }
            console.log($scope.paginationConf );
            Base.ajax({
                url:appConfig.serverPath+'article/pageList',
                data:{pageSize:pageSize,pageNo:$scope.paginationConf.currentPage,guide:guide,searchContent:keywords},
                loading:true,
                success:function(res){
                	console.log(res);
                    if(res.dataStatus=='t1'){
                        $scope.$apply(function(){
                            $scope.dataList = res.dataResult.list;
                            $scope.dataOther = res.dataResult;
                            $scope.paginationConf.totalItems = res.dataResult.count;
                        })
                    }
                }
            })
        }
    };
}])



