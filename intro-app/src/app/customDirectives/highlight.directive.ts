import { Directive, ElementRef, OnInit } from '@angular/core';

//convention is camel case for selector
@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
};

