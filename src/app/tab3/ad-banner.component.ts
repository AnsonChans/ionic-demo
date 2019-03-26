import { AdComponent } from './ad.component';
import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';
import { OnInit, OnDestroy, Input, Component, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
    selector: 'app-ad-banner',
    template: `
            <div class="ad-banner-example">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
            </div>
            `
})
// <ng-template>元素就是刚才制作的指令将应用到的地方，要应用AdDirective，<ng-template>不会渲染任何额外的输出
export class AdBannerComponent implements OnInit, OnDestroy {
    @Input() ads: AdItem[];
    currentAdIndex = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval)
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAdIndex];
        
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component)

        let viewContainerRef = this.adHost.viewContainerRef
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data
    }

    getAds(){
        this.interval = setInterval(()=>{
            this.loadComponent()
        },3000)
    }
}