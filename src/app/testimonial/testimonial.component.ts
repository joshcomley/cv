import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from  "../shared";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  @Input() testimonial: Testimonial;

  constructor() { }

  ngOnInit() {
  }

}
