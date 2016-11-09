import { Component, OnInit, Input } from '@angular/core';
import { Experience } from  "../shared";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() experience: Experience;
  constructor() { }

  ngOnInit() {
  }

}