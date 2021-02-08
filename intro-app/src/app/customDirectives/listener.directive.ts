import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appRendererHighlight]'
})

export class ListenerDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'mediumaquamarine');
    }
}