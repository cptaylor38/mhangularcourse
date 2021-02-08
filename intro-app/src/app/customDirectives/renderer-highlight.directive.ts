import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appRendererHighlight]'
})

// Instructor's notes explaining the difference:
// When using the renderer, manipulating the element is okay because you'll 
// NOT directly interact with it but through the Renderer. The Renderer is 
// essentially a "tool" provided by Angular that will manipulate DOM elements 
// with both the runtime environment and Angular in mind. So it will do that in a way 
// that will not fail in non-DOM 
// environments (e.g. server-side rendering) and it will also "inform" Angular about the change.

export class RendererHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'mediumaquamarine');
    }
}