import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = "pet";
  answer: string ="";
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }
  submitted: boolean = false;

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

  onSubmit(){
    console.log(this.signupForm);

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.submitted = true;

    this.signupForm.reset();
  }
}
