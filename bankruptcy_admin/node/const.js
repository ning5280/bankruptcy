var http = require('http');
var fs = require('fs');
var iconv = require("iconv-lite");
// var iconv = require('iconv-lite');
var ajaxPath="http://192.168.0.128:8082/bbls/";
// var destPath = "/usr/work/tools/tomcat8082/webapps/fwshop/";
var destPath="";
var datas=[];
var size=0;
//var rs=fs.createReadStream('test.md');
//rs.setEncoding('utf8');
http.get(ajaxPath+"content/getAll", function(res) {
    var body='';
    var constantStr='';
    res.on('data', function (data) {
        datas.push(data);
        size +=data.length;
//    	body += data;
    })
    res.on('end',function(){

        var buf=Buffer.concat(datas,size);
        var body=iconv.decode(buf,'utf8');
        var dataBody = JSON.parse(body);
        var dataConstant=dataBody.dataResult;
        // dataConstant = JSON.stringify(dataConstant);
        for(var key in dataConstant){
            // key值为点获取属性的形式 做为变量名会报错 截取最后一个属性名
            var varName = key.substr(key.lastIndexOf('.')+1);
            constantStr=constantStr+'var serverConstant_'+varName+'='+JSON.stringify(dataConstant[key])+';\n';
        }

        // 读取原始常量文件
        fs.readFile('../config/localConst.js',function(err,data){
            if(err) {
                console.log(err);
                return false;
            }
            var localConstant= data.toString();

            // 写入整合 常量 js文件
            fs.writeFile('../config/const.js',constantStr+'\n'+localConstant,function(err,data){
                if(err){
                    console.log(err);
                    return false;
                }
                console.log('系统常量写入成功');
            })

        })
        // constantStr=iconv.encode(constantStr,'utf-8')
        //  console.log(constantStr.toString());



    })

    // console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});