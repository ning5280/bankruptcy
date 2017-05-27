myApp.controller('articleEdit',['$scope',function($scope){
    // console.log(serverConstant_GuideEnum)
    $scope.cateList = serverConstant_GuideEnum;
    $scope.form = {};
    var id = Base.getUrlParam('id');
    Base.ajax({
        url:appConfig.serverPath+'article/info',
        data:{id:id},
        loading:true,
        success:function(res){
            var keyWordList = [];
            for(var key in res.dataResult.keyWords){
                keyWordList.push(res.dataResult.keyWords[key]['keyWord']);
            }
            $scope.$apply(function(){
                $scope.form = res.dataResult;
                ue.setContent(res.dataResult.articleHtmlContent?res.dataResult.articleHtmlContent:'');
                $scope.form.keyWords = keyWordList.join(',');

            })

            // // 回选复选框
            // $('input[name=guides]').each(function(){
            //     if($.inArray($(this).val(),res.dataResult.guides)>=0){
            //         $(this).attr('checked',true);
            //         // console.log($(this).val());
            //     }
            //
            // })
        }
    })

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
            guide:$scope.form.guide,
            id:id
        };
        console.log(data);
        Base.ajax({
            url:appConfig.serverPath+'article/update',
            data:data,
            loading:true,
            success:function(res){
                if(res.dataStatus=='t1'){
                    location.href = './articleTables.html';
                }
            }
        })
    }


}])