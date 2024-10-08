import { Component, OnInit, Input } from '@angular/core';
import { PortfolioItem } from  "../../shared";

@Component({
    selector: 'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.scss'],
    standalone: true
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: PortfolioItem;

  constructor() { }

  ngOnInit() {
  }

}
