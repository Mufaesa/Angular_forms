import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {
  statusOptions = ['Stable', 'Critical', 'Finished'];
  ReactiveForm: FormGroup;  


  constructor() { }

  ngOnInit(): void {
    this.ReactiveForm = new FormGroup({
      projectName: new FormControl(null),
      email: new FormControl(null),
      status: new FormControl(null)
    });
  }

  onSubmit(){
    console.log(this.ReactiveForm);
  }

}