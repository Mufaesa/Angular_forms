import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent{
  proficiencyLevels = ["Basic", "Advanced", "Pro"];

  constructor() {}

  onSubmit(formValue: NgForm){
    console.log(formValue);
  }

}
