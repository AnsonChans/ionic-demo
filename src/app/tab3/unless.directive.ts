
import {Input, Directive, TemplateRef,ViewContainerRef } from '@angular/core';
@Directive({
    selector:'[appUnless]'
})
export class UnlessDiretive{
    private hasView = false;
    constructor(
        private templateRef:TemplateRef<any>,
        private viewContainerRef:ViewContainerRef
    ){}

    @Input() set appUnless(condition:boolean){
        if(!condition&&!this.hasView){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            this.hasView=true;
        }else if(condition&&this.hasView){
            this.viewContainerRef.clear();
            this.hasView=false;
        }
    }
}