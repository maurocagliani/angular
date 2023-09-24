import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundedBlock]'
})
export class RoundedBlockDirective {

  constructor(public elementRef: ElementRef, public rederer: Renderer2) { 
    this.establecerColorDeFondo();
    this.establecerBordeRedondeado();
 }

 establecerColorDeFondo(){
  this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'red')
 }

 establecerBordeRedondeado(){
  this.rederer.setStyle(this.elementRef.nativeElement,'border-radius','15px')
 }

}
