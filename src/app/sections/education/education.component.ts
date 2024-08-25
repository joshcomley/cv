import { Component, OnInit, Input } from '@angular/core';
import { Experience } from "../../shared";
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    standalone: true,
    imports: [MatCard]
})
export class EducationComponent implements OnInit {
  @Input() experience: Experience;
  constructor() { }

  ngOnInit() {
  }
}