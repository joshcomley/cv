import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { KeySkillsComponent } from './key-skills/key-skills.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { SocialsComponent } from './socials/socials.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { ImportantSkillsPipe, OrderByExperiencePipe } from './pipes';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelfEmploymentComponent } from './self-employment/self-employment.component';
import { PortalModule } from '@angular/cdk/portal';
import { HighlightModule } from 'ngx-highlightjs';
import { HazceptionComponent } from './hazception/hazception.component';
 
@NgModule({
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PortalModule,
    HighlightModule,
    MatSlideToggleModule
  ],
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillComponent,
    KeySkillsComponent,
    TestimonialComponent,
    ImportantSkillsPipe,
    OrderByExperiencePipe,
    PortfolioItemComponent,
    SocialsComponent,
    ProfileImageComponent,
    SelfEmploymentComponent,
    HazceptionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
