export class Social {
    link: string;
    icon: string;

    constructor(link: string, icon: string) {
        this.link = link;
        this.icon = icon;
    }
}

export class ExperienceReference {
    name: string;
    phone: string;
    address: string;

    constructor(name: string, phone: string, address: string) {
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}

export enum ExperienceType {
    Education = 1,
    Contract = 2,
    Permanent = 3,
    SelfEmployed = 4
}

export class Experience {
    place: string;
    summary: string;
    location: string;
    title: string;
    fromTo: string;
    description: string;
    skills: Array<string>;
    endYear: number;
    reference: ExperienceReference;
    type: ExperienceType;
    durationInMonths: number;

    constructor(type: ExperienceType, durationInMonths: number, endYear: number, place: string, summary: string, location: string, title: string, fromTo: string, description: string,
        skills?: Array<string>,
        reference?: ExperienceReference) {
        this.type = type;
        this.durationInMonths = durationInMonths;
        this.endYear = endYear;
        this.place = place;
        this.summary = summary;
        this.location = location;
        this.title = title;
        this.fromTo = fromTo;
        this.description = description;
        if (!skills) {
            this.skills = new Array<string>();
        } else {
            this.skills = skills;
        }
    }
}

export class Skill {
    title: string;
    percent: number;
    level: string;
    years: string;
    description: string;
    months: number = 0;
    mostRecentYear: number = 0;

    constructor(title: string, percent: number, level?: string, years?: string, description?: string) {
        this.title = title;
        this.percent = percent;
        this.level = level;
        this.years = years;
        this.description = description;
    }
}

export class Testimonial {
    name: string;
    position: number;
    company: string;
    description: string;

    constructor(name: string, position: number, company: string, description: string) {
        this.name = name;
        this.position = position;
        this.company = company;
        this.description = description;
    }
}

export class PortfolioItem {
    title: string;
    technologies: number;
    link: string;
    thumbnail: string;

    constructor(title: string, technologies: number, link: string, thumbnail: string) {
        this.title = title;
        this.technologies = technologies;
        this.link = link;
        this.thumbnail = thumbnail;
    }
}