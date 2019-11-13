import { Component, OnInit, Input } from '@angular/core';
import { Skill } from "../shared";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

  resolveScore(): number {
    let base = 100.0 / 36.0;
    base *= this.skill.months;
    if (base > 100) {
      base = 100;
    }
    return base;
  }
}
