import { Component, OnInit, Input } from '@angular/core';
import { Experience } from  "../shared";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() experience: Experience;
  constructor() { }

  ngOnInit() {
  }

}