import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';


@Directive({
  selector: '[appKeyboardManagerItem]',
})
export class KeyboardManagerItemDirective {

  @Output() public focused = new EventEmitter<void>();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  public focus(): void {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  public isFocused(): boolean {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
