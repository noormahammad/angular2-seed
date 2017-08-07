import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)' : 'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class AutoGrowDirective {
    _el: Element
    constructor(private el:ElementRef, private renderer:Renderer){

    }
    onFocus(){
        this.renderer.setElementStyle(this.el,'width','200px');
    }

    onblur() {
        this.renderer.setElementStyle(this.el,'width','120px');
    }
}