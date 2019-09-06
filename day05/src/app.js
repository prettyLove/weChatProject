// #post 用户上传文件服务器端一定要用post接收
// #/uploadFile是处理文件程序路径
// #upload.single("mypic");一次上传一个文件
// #mypic  上传文件的参数名称   如"mypic":1.jpg
// #req请求对象
// #req,file保存上传文件信息
// req.file.size;   上传文件的大小
// req.file.originalname 上传文件原文件名  11.jpg
// req.file.mimetype     上传文件类型
// 如：image/jpg image/png text/css  application/javascript
// req.file.path  上传文件的路径  
   
   //引入三个模块  express/multer/fs
const fs=require("fs");  //完成将临时文件移到upload下
const express=require("express");
const multer=require("multer");
    //创建express对象
var server=express();
server.listen(3000);
    // 创建静态目录public
server.use(express.static("public"));
    // 创建upload对象
var upload=multer({dest:"upload/"});
    // 接收客户post请求
server.post("/uploadFile",upload.single("mypic"),(req,res)=>{
    // 获取原文件名
    var src=req.file.originalname;
    // 创建新文件名(var des=时间戳+随机数+文件后缀名)
    console.log(src);
    var ft=new Date().getTime();
    var tn=Math.floor(Math.random()*9999);
    var i3=src.lastIndexOf("."); //查找后缀.的下标
    var suff=src.substring(i3); //从i3位置开始截取
    var des=__dirname+"/upload/"+ft+tn+suff;
    console.log(des);
    // 将临时文件移动到upload目录下
    fs.renameSync(req.file.path,des);
    res.send({code:1,msg:"上传成功"})
})