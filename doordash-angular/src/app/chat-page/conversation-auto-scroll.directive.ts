import { AfterViewChecked, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appConversationAutoScroll]'
})
export class ConversationAutoScrollDirective implements AfterViewChecked {
  private previousScrollHeight = 0;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewChecked(): void {
    if (this.elementRef.nativeElement.scrollHeight !== this.previousScrollHeight) {
      this.scrollContent();
    }
  }

  scrollContent() {
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.scrollTop = Math.ceil(nativeElement.scrollHeight - nativeElement.clientHeight);

    this.previousScrollHeight = nativeElement.scrollHeight;
  }
}
