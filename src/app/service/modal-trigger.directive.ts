import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jquery.service';

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  constructor(@Inject(JQ_TOKEN) private $: any, Ref: ElementRef) {
    this.el = Ref.nativeElement;
   }

  ngOnInit(){
   this.el.addEventListener('click', e => {
    this.$('#app-modal').modal({});
   });
  }

}
