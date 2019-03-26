import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[ad-host]'
})

export class AdDirective{
    constructor(public viewContainerRef:ViewContainerRef){}
}
// AdDirective 注入了ViewContainerRef 来获取对容器视图的访问权，这个容器就是动态组件的宿主
