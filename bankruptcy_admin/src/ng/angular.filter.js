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