export class Social {
    link: string;
    icon: string;

    constructor(link: string, icon: string) {
        this.link = link;
        this.icon = icon;
    }
}

export class Experience {
    place: string;
    location: string;
    title: string;
    fromTo: string;
    description: string;

    constructor(place: string, location: string, title: string, fromTo: string, description: string) {
        this.place = place;
        this.location = location;
        this.title = title;
        this.fromTo = fromTo;
        this.description = description;
    }
}

export class Skill {
    title: string;
    percent: number;
    level: string;
    years: string;
    description: string;

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