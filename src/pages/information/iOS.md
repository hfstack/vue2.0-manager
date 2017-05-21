## mSDK集成流程
1、将mSDK文件夹添加到工程中。  

![此处输入图片的描述][1]  

2、添加系统库
点击主工程名进入工程配置界面，在General中Linked Frameworks and Libraries选项中点击+号添加如下类库库  
![此处输入图片的描述][2]  
3、将获的得安全图片yw_1222.jpg放在工程中，如果BundleID发生变更，需要向m索取新的安全图片用于替换  
4、添加项目工程的plist文件  
![此处输入图片的描述][3] 
LSApplicationQueriesSchemes  
5、添加编译参数 –lstdc++   和  -ObjC
![此处输入图片的描述][4]  
6、在info中添加配置URL Types  
![此处输入图片的描述][5]  
7、在对应工程的info.plist中 , 添加LSApplicationQueriesSchemes 两条数据  
![此处输入图片的描述][6]  
至此，SDK集成完毕。
## 调用接口
1、注册SDK  
需要在AppDelegate中使用从m平台获取的mappkey和appid来注册SDK，对接过程中会给到这两个参数。  
![此处输入图片的描述][7]  
2、调用m的webview  
![此处输入图片的描述][8]  
![此处输入图片的描述][9]  
3、实现代理方法  
![此处输入图片的描述][10]  

  [1]:http://upload-images.jianshu.io/upload_images/629700-af02ffa28d61057b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [2]: http://upload-images.jianshu.io/upload_images/629700-c462f270c35cde35.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [3]: http://upload-images.jianshu.io/upload_images/629700-43afc1f3663b849b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [4]: http://upload-images.jianshu.io/upload_images/629700-18c8a94a5fde805b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [5]: http://upload-images.jianshu.io/upload_images/629700-db2ce96ba4786657.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [6]: http://upload-images.jianshu.io/upload_images/629700-319437ea8bdb5e0e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [7]: http://upload-images.jianshu.io/upload_images/629700-6a9ebd278157649c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [8]: http://upload-images.jianshu.io/upload_images/629700-dcaa7005725eb0d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/20000
  [9]: http://upload-images.jianshu.io/upload_images/629700-e1487736e1cd63ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [10]: http://upload-images.jianshu.io/upload_images/629700-bbb9981ae1eacc53.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
  [11]: https://yun.duiba.com.cn/mSDK-iOS-V2.0.0.zip