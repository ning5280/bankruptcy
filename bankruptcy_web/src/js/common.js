// 公共方法
/*
*
 */
var Base = {
    //ajax 方法
	ajax:function(e){
        var url = e.url?e.url:'';
        var data = e.data?e.data:{};
        var callback = e.success?e.success:function(){};
        var method = e.method?e.method:'post';
        // 是否遮罩
        if(e.loading){
            Base.layerIndex = layer.load(1);
        }
		$.ajax({
			url:url,
            data:Base.md5Param(data),
            async:e.async,
            method:method,
            dataType:'json',
			success:function(res){
                Base.ajaxBack(res);
                layer.close(Base.layerIndex);
                callback(res);
			},
            error:function(){
                Base.alert('服务忙,请稍后再试','error');
            }
		})
	},
    //ajax回调处理函数
    ajaxBack:function(res){
        layer.close(Base.layerIndex);
        if(res.dataStatus=='f1'){
            this.alert(res.dataMessage,'error');
        }
////      else if(res.dataStatus=='f2'){
//          // console.log(res);
//          top.location.href = '/pages/login/index.html';
//      }
    },
    //参数处理
    md5Param:function (jsn) {
            if(typeof jsn=='string'){
                return jsn;
            }

            var my_jsn = paramTool.sortObjEncodeByKey(jsn);
            // jsn = paramTool.sortObjByKey(jsn);
            // var signStr = md5(jsn+'923047ae3f8d11d8b19aeb9f3d1bc002');
            // my_jsn =my_jsn+'&md5Sign='+signStr;
            return my_jsn;
    },
    //弹窗提示
    alert:function(message,type){
        if(type=="success"){
            layer.msg(message, {icon: 1});
        }else{
            layer.msg(message, {icon: 2});
        }
    },
	test:function(){
		console.log('test');
	},
    // 获取url参数方法
    getUrlParam:function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);

        if(r!=null)return  unescape(r[2]); return null;
    },
    //删除单个文章
    delSingle:function(e){
        var jsonParam = e;
        jsonParam.message=jsonParam.message?jsonParam.message:'确定要删除吗？';
        jsonParam.success= jsonParam.success?jsonParam.success:function(){};
        layer.confirm(jsonParam.message,{title:'系统提示'}, function(index){
            this.ajax({
                url:jsonParam.url,
                data:{id:jsonParam.id},
                loading:true,
                success:function(e){
                    if(e.dataStatus==statusT1){
                        jsonParam.success(jsonParam.id);
                        layer.close(index);
                        Base.alert('删除成功','success');

                    }else{
                        Base.alert('删除失败，请稍候再试','error');
                    }
                }
            })

        });
    },
    //通用提问窗
    commonConfirm:function (e){
        var jsonParam = e;
        jsonParam.message=jsonParam.message?jsonParam.message:'确定要删除吗？';

        jsonParam.success= jsonParam.success?jsonParam.success:function(){};

        layer.confirm(jsonParam.message,{title:'系统提示'}, function(index){
            Base.ajax({
                url:jsonParam.url,
                data:jsonParam.data,
                loading:true,
                success:function(e){

                    if(e.dataStatus=='t1'){
                        jsonParam.success(e);
                        layer.close(index);
                        Base.alert('操作成功','success');

                    }
                }
            })

        });
    },
    //自动撑开
    setIframeHeight:function(iframe){
        if (iframe) {
            setTimeout(function(){
            	var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
	            if (iframeWin.document.body) {
	                iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
	            }
            },500)
        }
    }
}



var paramTool = {
    //针对json对象key进行排序 保留原json
    sortObjByKey:function(obj,sort){
        var formatObj = this.formatObj(obj);
        sort = (sort != 'desc')?'asc':'desc';
        var jsonStr = this.sortObj(formatObj,sort);
        if(jsonStr != ''){
            jsonStr = jsonStr.substring(0,jsonStr.lastIndexOf('&'));
        }
        return jsonStr;
    },
    formatObj:function(obj,parentKey,newObj){
        parentKey = (typeof parentKey == "undefined") ? "": parentKey;
        newObj = (typeof newObj == "undefined") ? {}: newObj;
        if (!obj) {
            return newObj;
        }
        if (Array.isArray(obj)) {
            for (var j = 0; j < obj.length; j++) {
                if (typeof obj[j] == 'object') {
                    var pParent;
                    if('' == parentKey){
                        pParent = j;
                    }else{
                        pParent = parentKey +'['+j+']';
                    }
                    result = this.formatObj(obj[j],pParent,newObj);

                } else if (obj[j] != undefined && obj[j] != null && obj[j] !== '') {
                    var key = j;
                    if('' != parentKey){
                        key =  parentKey +'['+j+']';
                    }
                    newObj[key]= obj[j];
                }
            }
        } else if (typeof obj == 'object') {
            var keys =Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                if (typeof obj[keys[i]] == 'object') {
                    var pParent;
                    if('' == parentKey){
                        pParent = keys[i];
                    }else{
                        pParent = parentKey +'.'+keys[i];
                    }
                    result = this.formatObj(obj[keys[i]],pParent,newObj);

                } else if (obj[keys[i]] != undefined && obj[keys[i]] != null && obj[keys[i]] !== '') {
                    var key = keys[i];
                    if('' != parentKey){
                        key = parentKey +'.'+key;
                    }
                    newObj[key] = obj[keys[i]];
                }
            }
        }
        return newObj;
    },
    sortObj:function(obj,sort,result,parentKey){
        result = (typeof result == "undefined") ? "": result;
        parentKey = (typeof parentKey == "undefined") ? "": parentKey;
        if (!obj) {
            return result;
        }
        if (Array.isArray(obj)) {
            for (var j = 0; j < obj.length; j++) {
                if (typeof obj[j] == 'object') {
                    var pParent;
                    if('' == parentKey){
                        pParent = j;
                    }else{
                        pParent = parentKey +'['+j+']';
                    }
                    result = this.sortObj(obj[j],sort,result,pParent);

                } else if (obj[j] != undefined && obj[j] != null && obj[j] !== '') {
                    var key = j;
                    if('' != parentKey){
                        key =  parentKey +'['+j+']';
                    }
                    result += key + "=" + obj[j] + "&";
                }
            }
        } else if (typeof obj == 'object') {
            var keys =('desc' === sort)?Object.keys(obj).sort().reverse():Object.keys(obj).sort();
            for (var i = 0; i < keys.length; i++) {
                if (typeof obj[keys[i]] == 'object') {
                    var pParent;
                    if('' == parentKey){
                        pParent = keys[i];
                    }else{
                        pParent = parentKey +'.'+keys[i];
                    }
                    result = this.sortObj(obj[keys[i]],sort, result,pParent);

                } else if (obj[keys[i]] != undefined && obj[keys[i]] != null && obj[keys[i]] !== '') {
                    var key = keys[i];
                    if('' != parentKey){
                        key = parentKey +'.'+key;
                    }
                    result += key + "=" + obj[keys[i]] + "&";
                }
            }
        }
        return result;
    },
    //针对json对象key进行排序 对原json
    sortObjEncodeByKey:function(obj,sort){
        var formatObj = this.formatObj(obj);
        sort = (sort != 'desc')?'asc':'desc';
        var jsonStr = this.sortObjEncode(formatObj,sort);
        if(jsonStr != ''){
            jsonStr = jsonStr.substring(0,jsonStr.lastIndexOf('&'));
        }
        return jsonStr;
    },
    sortObjEncode:function(obj,sort,result,parentKey){
        result = (typeof result == "undefined") ? "": result;
        parentKey = (typeof parentKey == "undefined") ? "": parentKey;
        if (!obj) {
            return result;
        }
        if (Array.isArray(obj)) {
            for (var j = 0; j < obj.length; j++) {
                if (typeof obj[j] == 'object') {
                    var pParent;
                    if('' == parentKey){
                        pParent = j;
                    }else{
                        pParent = parentKey +'['+j+']';
                    }
                    result = this.sortObjEncode(obj[j],sort,result,pParent);

                } else if (obj[j] != undefined && obj[j] != null && obj[j] !== '') {
                    var key = j;
                    if('' != parentKey){
                        key =  parentKey +'['+j+']';
                    }
                    result += key + "=" + encodeURIComponent(obj[j]) + "&";
                }
            }
        } else if (typeof obj == 'object') {
            var keys =('desc' === sort)?Object.keys(obj).sort().reverse():Object.keys(obj).sort();
            for (var i = 0; i < keys.length; i++) {
                if (typeof obj[keys[i]] == 'object') {
                    var pParent;
                    if('' == parentKey){
                        pParent = keys[i];
                    }else{
                        pParent = parentKey +'.'+keys[i];
                    }
                    result = this.sortObjEncode(obj[keys[i]],sort, result,pParent);

                } else if (obj[keys[i]] != undefined && obj[keys[i]] != null && obj[keys[i]] !== '') {
                    var key = keys[i];
                    if('' != parentKey){
                        key = parentKey +'.'+key;
                    }
                    result += key + "=" + encodeURIComponent(obj[keys[i]]) + "&";
                }
            }
        }
        return result;
    }
};