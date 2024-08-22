import {
  ComponentPortal,
  PortalInjector,
  CdkPortalOutlet,
} from "@angular/cdk/portal";
import { Component, Injector, Input, OnInit, input } from "@angular/core";
import { Experience } from "../shared";
import { MatCard, MatCardContent } from "@angular/material/card";
import { NgIf, NgFor } from "@angular/common";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
  standalone: true,
  imports: [MatCard, MatCardContent, NgIf, MatIcon, CdkPortalOutlet, NgFor],
})
export class WorkExperienceComponent implements OnInit {
  @Input() public showPrintHack = false;
  @Input() experience: Experience;
  short = input(false);
  public portal: ComponentPortal<any>;
  constructor(protected injector: Injector) {}

  ngOnInit() {
    if (typeof this.experience.description != "string") {
      let portalInjector = new PortalInjector(
        this.injector,
        new WeakMap<any, any>()
      );
      this.portal = new ComponentPortal(
        this.experience.description,
        null,
        portalInjector
      );
    }
  }

  public get descriptionIsString(): boolean {
    return typeof this.experience.description == "string";
  }
}
