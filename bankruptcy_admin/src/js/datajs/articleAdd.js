myApp.controller('articleAdd',['$scope',function($scope){
    console.log(serverConstant_GuideEnum)
    $scope.cateList = serverConstant_GuideEnum;
    $scope.form={};
    $scope.form.guide='';
    $scope.submit = function(){
        // 组装数据
        if(!$('input[name="title"]').val()){
            Base.alert('标题不能为空','error');
            return false;
        }

        var keywords = $scope.form.keyWords?$scope.form.keyWords:'';
        var keywords = keywords.split(',');
        var keyWordsObjList = [];
        for(var key in keywords){
            keyWordsObjList.push({keyWord:keywords[key]});
        }
        var data = {
            title:$scope.form.title,
            author:$scope.form.author?$scope.form.author:'',
            keyWords:keyWordsObjList,
            remarks:$scope.form.remarks?$scope.form.remarks:'',
            smallImage:$('input[name="smallImage"]').val()?$('input[name="smallImage"]').val():'',
            articleHtmlContent:ue.getContent(),
            guide:$scope.form.guide
        };
        console.log(data);
        Base.ajax({
            url:appConfig.serverPath+'article/save',
            data:data,
            loading:true,
            success:function(res){
                if(res.dataStatus=='t1'){
                    location.href ='./articleTables.html';
                }
            }
        })
    }


}])