import { Component, OnInit, Input } from '@angular/core';
import { Social } from  "../shared";

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent implements OnInit {
  @Input() socials: Array<Social>;

  constructor() { }

  ngOnInit() {
  }

}
