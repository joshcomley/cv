import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Skill } from '@/app/shared';

@Component({
    selector: 'app-key-skills',
    templateUrl: './key-skills.component.html',
    styleUrls: ['./key-skills.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class KeySkillsComponent {
  @Input() skills: Array<Skill>;
}
