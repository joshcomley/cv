import { Component, OnInit, Input } from '@angular/core';
import { Social } from  "../shared";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-socials',
    templateUrl: './socials.component.html',
    styleUrls: ['./socials.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class SocialsComponent implements OnInit {
  @Input() socials: Array<Social>;

  constructor() { }

  ngOnInit() {
  }

}
