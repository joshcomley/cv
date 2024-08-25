import { DOCUMENT, NgFor, NgIf } from "@angular/common";
import { Component, Inject, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from "@angular/material/button-toggle";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from "@angular/material/card";
import { MatSlideToggle } from "@angular/material/slide-toggle";
import { ActivatedRoute } from "@angular/router";
import { Cv } from "./cv";
import { CvBuilder } from "./cv-builder";
import { EducationComponent } from "./sections/education/education.component";
import { ImportantSkillsPipe, OrderByExperiencePipe } from "./pipes";
import { PortfolioItemComponent } from "./sections/portfolio-item/portfolio-item.component";
import { TestimonialComponent } from "./sections/testimonial/testimonial.component";
import { WorkExperienceComponent } from "./sections/work-experience/work-experience.component";
import { SocialsComponent } from "./sections/socials/socials.component";
import { SkillComponent } from "./shared/components/skill/skill.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    FormsModule,
    MatSlideToggle,
    MatCard,
    MatCardContent,
    MatButtonToggle,
    MatButtonToggleGroup,
    NgIf,
    NgFor,
    SocialsComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillComponent,
    TestimonialComponent,
    PortfolioItemComponent,
    MatCardHeader,
    MatCardTitle,
    ImportantSkillsPipe,
    OrderByExperiencePipe,
  ],
})
export class AppComponent implements OnInit {
  themeName: string = "Dark";
  fragment: string;
  short = signal(false);
  cv: Cv;

  constructor(
    @Inject(DOCUMENT) protected document: Document,
    private route: ActivatedRoute
  ) {
    this.cv = CvBuilder.BuildMyCv();
  }

  public phoneNumber(number: string): string {
    return "tel: " + number.split(" ").join("");
  }

  public switchTheme() {
    let body = this.document.getElementsByTagName("html")[0];
    if (body.className.includes("dark")) {
      this.themeName = "Light";
    } else {
      this.themeName = "Dark";
    }
    body.className = this.themeName.toLowerCase();
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      setTimeout(() => {
        const elm = document.getElementById(fragment);
        if (elm) {
          elm.scrollIntoView();
        }
      }, 1000);
    });
  }
}
