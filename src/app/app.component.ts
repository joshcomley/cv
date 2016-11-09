import { Component, Pipe, Injectable, PipeTransform } from '@angular/core';
import { Experience, Skill, Testimonial, PortfolioItem, Social } from "./shared";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Full stack developer and architect';
  name = "Josh Comley";
  email = "joshcomley@googlemail.com";
  phone = "+447979 857504";
  whatsApp = "+491781 413829";
  portfolioSite = "cv.joshcomley.com";
  profile = "I am a developer";
  current = "I am free";
  profileImage  = "assets/images/profile-image.jpg";
  experiences = new Array<Experience>();
  educations = new Array<Experience>();
  skills = new Array<Skill>();
  testimonials = new Array<Testimonial>();
  portfolioItems = new Array<PortfolioItem>();
  helps = new Array<string>();
  socials = new Array<Social>();

  constructor() {
    this.experiences.push(
      new Experience("Sciensus", "Brighton, UK", "Developer", "2013", "I did a job here"));
    this.educations.push(
      new Experience("Sussex University", "Brighton, UK", "Computer Science and AI", "2002 - 2005", "I did it"));
    this.skills.push(new Skill("C#", 98, "Expert", "11", "I am good"));
    this.skills.push(new Skill("PHP", 10));
    this.helps.push("Front-end development with AngularJS");
    this.socials.push(new Social("", "fa fa-linkedin"));
    this.socials.push(new Social("", "fa fa-twitter"));
    this.socials.push(new Social("", "fa fa-google-plus"));
    this.socials.push(new Social("", "fa fa-github-alt"));
    this.socials.push(new Social("", "fa fa-skype"));
    //this.testimonial(new Testimonial())
  }

  phoneNumber(number): string {
    return "tel: " + number.split(" ").join("");
  }
}
@Pipe({
  name: 'importantSkills',
  pure: false
})
@Injectable()
export class ImportantSkillsPipe implements PipeTransform {
  transform(items: Skill[], args: boolean): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => args ? item.description : !item.description);
  }
}