import { Directive, ElementRef, OnInit } from '@angular/core';

//convention is camel case for selector

//This approach is bad practice because it manipulates the dom directly because Angular can render without a dom,
//meaning those properties/elements not be available.
@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
}

