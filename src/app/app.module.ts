import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// declarations-----该应用拥有的组件
/**
 * 该模块的declarations数组告诉angular哪些组件属于该模块。
 * declarations数组只能接受可声明对象：组件、指令和管道
 * 可声明对象只能属于一个模块，如果同一个类被声明在多个模块中，编译器会报错
 * 除非把它们从当前模块导出，并让对方模块导入本模块
 */
//imports-----------导入BrowerModule以获取浏览器特有的服务，比如DOM渲染、无害化处理和location
/**
 * 模块的import数组只会出现在@NgModule元数据对象中。他告诉angular该模块想要正常工作，还需要哪些模块
 */
//providers---------各种服务提供商the service providers
//bootstrap---------根组件，Angular创建它并插入index.html宿主页面
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
