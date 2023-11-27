import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent implements OnInit {
  ReactiveForm = FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.ReactiveForm);
  }

}
