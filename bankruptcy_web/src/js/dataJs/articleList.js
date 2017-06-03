myApp.controller('articleList',['$scope','pageSize',function($scope,pageSize){
	//获取搜索关键词
	var keywords = Base.getUrlParam('keywords')?Base.getUrlParam('keywords'):'';
	$scope.keywords=keywords = decodeURIComponent(keywords) ;
	// keywords=decodeURIComponent(keywords);
	//获取二级导航
	//获取一级标题
	var id = Base.getUrlParam('id')?Base.getUrlParam('id'):'';
	var guide = Base.getUrlParam('guide')?Base.getUrlParam('guide'):'';
	//地址判断
	var Did = id;
	var Dguide = guide;
	
	
	if(!id&&guide){
		id = guide.substr(0,1);
	}
	$scope.GuideEnum = serverConstant_GuideEnum[id];
	
	
	
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
	guide = guide?guide:Djson[0]['id'];
	$scope.id = id;
	//二级标题的切换事件
	if(guide){
		$scope.chosedIndex = guide.substr(2,1)-1;
	}else{
		$scope.chosedIndex = 0;
	}
	
	$scope.secondNameD = Djson[$scope.chosedIndex]['name'];
	$scope.secondSrc = Djson[$scope.chosedIndex]['id'];
	$scope.DtwoClick = function(index){
		$scope.chosedIndex = index;
		$scope.secondNameD = Djson[index]['name'];
		$scope.secondSrc = Djson[index]['id'];
	}

	//二级导航点击事件

	$scope.DarticClick = function(guide,name){
		$scope.paginationConf.guide =guide;
		// $scope.$broadcast('reset');
		$scope.paginationConf.onChange();
        // console.log('处罚点击');

        // Base.ajax({
        //     url:appConfig.serverPath+'article/pageList',
        //     data:{pageSize:pageSize,pageNo:$scope.paginationConf.currentPage,guide:guide,searchContent:keywords},
        //     loading:true,
        //     success:function(res){
        //     	console.log(res);
        //         if(res.dataStatus=='t1'){
        //             $scope.$apply(function(){
        //                 $scope.dataList = res.dataResult.list;
        //                 $scope.dataOther = res.dataResult;
        //                 $scope.paginationConf.totalItems = res.dataResult.count;
        //                 $scope.paginationConf.currentPage = 1;
        //             })
        //         }
        //     }
        // })
	}

	

    var reqNum = 0;
    $scope.dataList = [];
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: pageSize,
        pagesLength: 5,
        perPageOptions: [parseInt(pageSize)],
        guide:guide,
        rememberPerPage: 'perPageItems',
        ramdom:0,
        onChange: function(){

            // reqNum++;
            // if(reqNum==2){
            //
            //     return false;
            // }
            //

			//data数据
			var DdataJson = {pageSize:pageSize,pageNo:$scope.paginationConf.currentPage};
			if(Did||Dguide){
				DdataJson['guide'] = $scope.paginationConf.guide;
			}
			if(keywords){
				DdataJson['searchContent'] = $scope.keywords;
			}

            Base.ajax({
                url:appConfig.serverPath+'article/pageList',
                data:DdataJson,
                loading:true,
                success:function(res){
                	console.log(res);

                    if(res.dataStatus=='t1'){
                        $scope.$apply(function(){

                            $scope.dataList = res.dataResult.list;
                            $scope.dataOther = res.dataResult;
                            $scope.paginationConf.totalItems = res.dataResult.count;
							$scope.$broadcast('reset');

                        })
						document.title = serverConstant_GuideEnum[$scope.paginationConf.guide.substr(0,1)]+'-中国破产法论坛网';

                    }
                }
            })
        }
    };
}])



