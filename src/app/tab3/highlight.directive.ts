import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// 指令
@Directive({
    selector:'[appHighlight]'
})

export class HighlightDirective{
    //绑定到@Input别名
    @Input('appHighlight') highlightColor:string;
    @Input() defaultColor:string;
    constructor(private el:ElementRef){}

    @HostListener('mouseenter') onmouseenter(){
        this.highlight(this.highlightColor||this.defaultColor||'red')
    }
    @HostListener('mouseleave') onmouseleave(){
        this.highlight(null)
    }

    private highlight(color:string){
        this.el.nativeElement.style.backgroundColor=color
    }
    
}