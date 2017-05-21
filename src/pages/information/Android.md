## SDK接入准备
1、将获的得安全图片放在/res/drawable目录下，如果包名或签名发生变更，需要向麦啦索取新的安全图片用于替换。 

2、下载麦啦SDK将SDK包拷贝到libs目录下。  

3、配置项目中的build.gradle
 
```
dependencies {
    compile fileTree(include: ['*.jar'], dir: 'libs')
    compile 'com.android.support:appcompat-v7:23.3.0'
    //基础安全组件(必选)
    compile 'com.taobao.android:securityguardaar3:5.1.81@aar'

    //ut(必选)
    //deviceID，主要用于计算设备的uttid， 设备唯一标识 （67kb）
    compile 'com.taobao.android:utdid4all:1.1.5.3_proguard@jar'
    //UT，用于组件、接口可用性统计（337kb）
    compile 'com.alibaba.mtl:app-monitor-sdk:2.5.1.1_for_bc_proguard@jar'

    //登陆授权(必选)
    compile 'com.ali.auth.sdk:alibabauth_core:1.1.4@jar'
    compile 'com.ali.auth.sdk:alibabauth_ui:1.1.4@aar'
    compile 'com.ali.auth.sdk:alibabauth_ext:1.1.4@jar'

    //基础电商组件(必选)
    compile 'com.alibaba.sdk.android:alibc_trade_sdk:3.1.1.9@aar'

    //mtop(必选)
    compile 'com.taobao.android:mtopsdk_allinone_open:1.2.2.4@jar'

    //applink(必选)
    compile 'com.taobao.android:alibc_applink:2.0.0.7@jar'

    //fastjson（必选）
    compile 'com.alibaba:fastjson:1.2.9'
}


```
 4、修改项目的AndroidManifest.xml文件，添加权限申明：
```
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.READ_SMS"/>
<uses-permission android:name="android.permission.BATTERY_STATS" />
<uses-permission android:name="android.permission.PACKAGE_USAGE_STATS"
    tools:ignore="ProtectedPermissions"/>
<uses-permission android:name="android.permission.GET_TASKS" />

```
5、在Application下增加meta-data，填入麦啦appkey和appid:
```
```
## SDK初始化代码接入（详细请参考demo代码）
1、SDK导入后，即可在代码中使用相关组件，在使用具体功能前需要在应用的入口方法（Application的onCreate）中初始化SDK
```
public class SdkApplication extends Application {

    public static SdkApplication application = null;

    @Override
    public void onCreate() {
        super.onCreate();

        application = this;

    }
}
```
附：如果使用的安卓API大于6.0，可以放到入口activity里面初始化，在初始化SDK之前动态申请一下READ_PHONE_STATE权限
```
if (Build.VERSION.SDK_INT >= 23) {
    int checkCallPhonePermission = ContextCompat.checkSelfPermission(this, Manifest.permission.CALL_PHONE);
    if(checkCallPhonePermission != PackageManager.PERMISSION_GRANTED){
        ActivityCompat.requestPermissions(this,new String[]{Manifest.permission.READ_PHONE_STATE},0);
    }
}
```
## 导购页面接入代码（详细请参考demo代码）
1、导购页面的加载，在布局文件中添加GuidePageView导购页面控件
```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    android:id="@+id/activity_main"
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    >

    <com.duiba.m.sdk.GuidePageView
        android:id="@+id/pageView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>
</RelativeLayout>
2、专场页面的加载，为使开发者能够自定义专场页面，开发者需要创建一个Activity，布局文件中放入专场加载控件
</RelativeLayout>
```
获取sdk透传的url加载专场页面
```
public class WebViewActivity extends BaseActivity {
    private WebPageView pageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_view);

        pageView = (WebPageView) findViewById(R.id.web_content);

        Uri url = getIntent().getData();
        pageView.loadUrl(url.toString());
    }
}
```
## 代码混淆规则
在proguard文件中加入以下内容：
```
#maila
-keep class com.duiba.maila.sdk.** { *; }
-keep class sun.misc.Unsafe { *; }
-keep class com.taobao.** {*;}
-keep class com.alibaba.** {*;}
-keep class com.alipay.** {*;}
-dontwarn com.taobao.**
-dontwarn com.alibaba.**
-dontwarn com.alipay.**
-keep class com.ut.** {*;}
-dontwarn com.ut.**
-keep class com.ta.** {*;}
-dontwarn com.ta.**
-keep class org.json.** {*;}
-keep class com.ali.auth.**  {*;}
-dontwarn com.ali.auth.**
-keep class mtopsdk.**  {*;}
-dontwarn mtopsdk.**
```