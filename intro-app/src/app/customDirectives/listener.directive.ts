import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appListenerHighlight]'
})

export class ListenerDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }

    ngOnInit(){
        
    }

    @HostBinding('style.backgroundColor') backgroundColor: string = 'aquamarine';

    @HostListener('mouseenter') mouseenter(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.backgroundColor = 'green';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'mediumaquamarine');
        this.backgroundColor = 'aquamarine';
    }
}