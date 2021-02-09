import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appListenerHighlight]'
})

export class ListenerDirective implements OnInit {
    @Input() defaultColor: string = 'aquamarine';
    @Input() highlightColor: string = 'green';
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }

    ngOnInit(){
        
    }

    @HostBinding('style.backgroundColor') backgroundColor: string = 'aquamarine';

    @HostListener('mouseenter') mouseenter(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'mediumaquamarine');
        this.backgroundColor = this.defaultColor;
    }
}