import { Component, OnInit, Input } from '@angular/core';
import { Skill } from "../shared";

@Component({
  selector: 'app-key-skills',
  templateUrl: './key-skills.component.html',
  styleUrls: ['./key-skills.component.scss']
})
export class KeySkillsComponent implements OnInit {
  @Input() skills: Array<Skill>;

  constructor() { }

  ngOnInit() {
  }

}
