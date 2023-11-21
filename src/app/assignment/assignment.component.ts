import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class AssignmentComponent {
  proficiencyLevels = ["Basic", "Advanced", "Pro"];

  constructor() {}

  onSubmit(formValue: NgForm){
    console.log(formValue);
  }
}
