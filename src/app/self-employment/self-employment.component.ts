import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-employment',
  templateUrl: './self-employment.component.html',
  styleUrls: ['./self-employment.component.scss']
})
export class SelfEmploymentComponent implements OnInit {
  public code = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-self-employment',
    templateUrl: './self-employment.component.html',
    styleUrls: ['./self-employment.component.scss']
  })
  export class SelfEmploymentComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  `;
  constructor() { }

  ngOnInit() {
  }

}
