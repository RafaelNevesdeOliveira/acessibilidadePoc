import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  public form: FormGroup;
  public teste: string = null;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      yesNoAnswer: ['no']
    })
  }

  submit(){
    console.log(this.form.value)
  }

}
