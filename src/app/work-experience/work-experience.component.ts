import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { Experience } from "../shared";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() experience: Experience;
  public portal: ComponentPortal<any>;
  constructor(protected injector: Injector) { }

  ngOnInit() {
    if (typeof this.experience.description != "string") {
      let portalInjector = new PortalInjector(this.injector, new WeakMap<any, any>());
      this.portal = new ComponentPortal(this.experience.description, null, portalInjector);
    }
  }

  public get descriptionIsString(): boolean {
    return typeof this.experience.description == "string";
  }
}