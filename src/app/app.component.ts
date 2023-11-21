import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = "pet";
  answer: string ="";
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // This is a possible way to set the value of a form using typeScript
    // When using a form.setValue, you MUST pass a value for every form field
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    // This can be used to update 1 value in the form
    // It uses the form.form.patchValue, with which you can update the value of a specific field
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }})
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);
  }
}
