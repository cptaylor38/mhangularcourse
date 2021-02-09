import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appListenerHighlight]'
})

export class ListenerDirective implements OnInit {
    @Input() defaultColor: string = 'aquamarine';
    @Input() highlightColor: string = 'green';
    // @Input('appListenerHighlight') highlightColor: string = "green";
    // <p [appListenerHighlight]="'orange'">Same directive html with alias</p>
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
    }

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
    }

    @HostBinding('style.backgroundColor') backgroundColor: string;

    @HostListener('mouseenter') mouseenter(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'mediumaquamarine');
        this.backgroundColor = this.defaultColor;
    }
}