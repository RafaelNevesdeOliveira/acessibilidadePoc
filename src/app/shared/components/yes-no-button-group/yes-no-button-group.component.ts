import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id.services';
@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string = null
  @Input() public label= ''
  @Output() public valueChange = new EventEmitter<string>()
  public options = YesNoButtonGroupOptions;
  public id: string = null;
  public onChange = (value: string) => {
  }
  public onTouched = () => {}

  constructor(private uniqueIdService: UniqueIdService) {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group')
  }

  writeValue(value: string): void {
    this.value = value
    this.onChange(this.value)
    this.valueChange.emit(this.value)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: () => VoidFunction): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  public activate(value:string){
    this.writeValue(value)
  }


}

enum YesNoButtonGroupOptions{
  YES = 'yes',
  NO = 'no'
}
