import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, ImportantSkillsPipe, OrderByExperiencePipe } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { SocialsComponent } from './socials/socials.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillComponent,
    TestimonialComponent,
    ImportantSkillsPipe,
    OrderByExperiencePipe,
    PortfolioItemComponent,
    SocialsComponent,
    ProfileImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
