myApp.filter('myFilter',function(){
	return function(val){
		return val+1111;
	}
})
myApp.filter('pic',function(){
	return function(id){
		if(id){
			return appConfig.serverPath+'fm/file/download?fileId='+id;
		}else{
			return appConfig.serverPath+'fm/file/download?fileId=4ff869b92c4941f7a4fd7b2a8739fdb8';
		}
	}
})
//关键字得筛选
myApp.filter('keyword',function(){
	var aa = Base.getUrlParam('keywords')?Base.getUrlParam('keywords'):'';
	return function(text){
		if(text){
			if(text.indexOf(aa)>-1){
				var a = new RegExp(aa,"g");
				text = text.replace(a,("<span  class='d-ct-list-key-red'>" + aa + "</span>"));
				return text;
			}else{
				return text;
			}
		}
	}
})