import { Component, OnInit, Input } from '@angular/core';
import { Skill } from "../shared";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-key-skills',
    templateUrl: './key-skills.component.html',
    styleUrls: ['./key-skills.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class KeySkillsComponent implements OnInit {
  @Input() skills: Array<Skill>;

  constructor() { }

  ngOnInit() {
  }

}
