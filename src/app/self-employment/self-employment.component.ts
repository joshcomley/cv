import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-self-employment',
  templateUrl: './self-employment.component.html',
  styleUrls: ['./self-employment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelfEmploymentComponent implements OnInit {
  public languages = ["typescript"];

public docNet = `{{foreach:posts post}}
Author: {{post.author}} {{image: source="post.author.photo" maxWidth="'1in'" maxHeight="'1in'" }}
{{post.text}}
{{if:((post.text != null && fan.longitude != null) || 
  fan.locations.filter(_ => _.latitude != null && _.longitude != null).length > 0)}}
{{map: centreLatitude="fan.latitude" centreLongitude="fan.longitude"}}
{{foreach:fan.locations location}}
{{map-pin: latitude="location.latitude" longitude="location.longitude" 
  autoLabel="true" color="location.status > 2 ? 'red' : 'green'"}}
{{:map-pin}}	
{{:foreach}}
{{:map}}
{{:if}}`;
constructor() { }

  ngOnInit() {
  }

}
