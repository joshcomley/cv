import {
  ComponentPortal,
  PortalInjector,
  CdkPortalOutlet,
} from "@angular/cdk/portal";
import { Component, Injector, Input, OnInit, input } from "@angular/core";
import { Experience } from "../../shared";
import { MatCard, MatCardContent } from "@angular/material/card";
import { NgIf, NgFor, CommonModule } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { DateTime } from "luxon";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
  standalone: true,
  imports: [MatCard, MatCardContent, NgIf, CommonModule, MatIcon, CdkPortalOutlet, NgFor],
})
export class WorkExperienceComponent implements OnInit {
  @Input() public showPrintHack = false;
  @Input() public showPrintText = "Work experience";
  @Input() experience: Experience;
  isPrintSummary = input(false);
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

  public getDuration(experience: Experience) {
    const date1 = DateTime.fromISO("2020-01-01T12:00");
    const date2 = date1.plus({ months: experience.durationInMonths });
    const diff = date2.diff(date1, ["years", "months"]);
    const s = (i: number) => (i == 1 ? "" : "s");
    const part = (i: number, name: string) =>
      i > 0 ? `${i} ${name}${s(i)}` : null;
    return [part(diff.years, "year"), part(diff.months, "month")]
      .filter((p) => p != null)
      .join(", ");
  }
}
