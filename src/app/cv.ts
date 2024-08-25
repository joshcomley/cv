import {
    Experience,
    KeySummary,
    PortfolioItem,
    Skill,
    Social,
    Testimonial
} from "./shared";

export class Cv {
  public title: string;
  public name: string;
  public email: string;
  public phone: string;
  public whatsApp: string;
  public portfolioSite: string;
  public profile: string;
  public current: string;
  public experiences = new Array<Experience>();
  public educations = new Array<Experience>();
  public skills = new Array<Skill>();
  public testimonials = new Array<Testimonial>();
  public portfolioItems = new Array<PortfolioItem>();
  public helps = new Array<string>();
  public socials = new Array<Social>();
  public keySkills = new Array<Skill>();
  public keySummaries = new Array<KeySummary>();
}
