myApp.controller('articleList',['$scope','pageSize',function($scope,pageSize){
    $scope.cateList  = serverConstant_GuideEnum;

    $scope.dataList = [];
    var cid = Base.getUrlParam('cid')?Base.getUrlParam('cid'):'';
    $scope.searchCate = cid;
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: pageSize,
        pagesLength: 5,
        perPageOptions: [parseInt(pageSize)],
        rememberPerPage: 'perPageItems',
        onChange: function(){

            Base.ajax({
                url:appConfig.serverPath+'article/pageList',
                data:{pageSize:pageSize,pageNo:$scope.paginationConf.currentPage,orderBy:'a.update_time desc','guide':$scope.searchCate},
                loading:true,
                success:function(res){
                    if(res.dataStatus=='t1'){
                        $scope.$apply(function(){
                            $scope.dataList = res.dataResult.list;
                            $scope.paginationConf.totalItems = res.dataResult.count;
                            $scope.$broadcast('reset');
                        })
                    }
                }
            })
        }
    };

    // setTimeout(function(){
    //     // $scope.$broadcast('reset');
    //     $scope.paginationConf.onChange();
    // })

    $scope.resetList=function(){
        var cid = $scope.searchCate;
        // alert(cate);
        location.href = './articleTables.html?cid='+cid;
    }

    $scope.del = function(e,id){
        console.log(e,id);
        Base.commonConfirm({
            message:'确定要删除吗?',
            url:appConfig.serverPath+'article/delete',
            data:{id:id},
            success:function(res){
                if(res.dataStatus=='t1'){
                    angular.element(e.target).parents('tr').remove();
                }
            }
        })
    }
}])