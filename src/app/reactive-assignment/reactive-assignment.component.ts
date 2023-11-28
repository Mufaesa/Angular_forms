import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {
  statusOptions = ['Stable', 'Critical', 'Finished'];
  ReactiveForm: FormGroup;
  forbiddenName: string = "Test";


  constructor() { }

  ngOnInit(): void {
    this.ReactiveForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required], this.forbiddenNameValidatorAsync),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.ReactiveForm);
  }

  forbiddenNameValidator = (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value.toLowerCase() === this.forbiddenName.toLowerCase()) {
      return { forbiddenProjectName: { value: control.value } };
    }
    return null;
  }

  forbiddenNameValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ forbiddenProjectName: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}