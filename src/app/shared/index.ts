import { ComponentType } from '@angular/cdk/portal';

export class KeySummary {
    constructor(
        public title: string,
        public duration: string
    ) {

    }
}
export class Social {
    constructor(
        public link: string,
        public icon: string,
        public text: string) {
    }
}

export class ExperienceReference {
    constructor(
        public name: string,
        public phone?: string,
        public address?: string) {
    }
}

export enum ExperienceType {
    Education = 1,
    Contract = 2,
    Permanent = 3,
    SelfEmployed = 4
}

export class Experience {
    constructor(
        public type: ExperienceType,
        public durationInMonths: number,
        public endYear: number,
        public place: string,
        public summary: string,
        public location: string,
        public title: string,
        public fromTo: string,
        public description: string | ComponentType<any>,
        public skills?: Array<string>,
        public reference?: ExperienceReference,
        public id?: string) {
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
    public months: number = 0;
    public mostRecentYear: number = 0;

    constructor(
        public title: string,
        public percent: number = 0,
        public level?: string,
        public years?: string,
        public description?: string) {
    }
}

export class Testimonial {
    constructor(public name: string,
        public position: number,
        public company: string,
        public description: string) {
    }
}

export class PortfolioItem {
    constructor(
        public title: string,
        public technologies: number,
        public link: string,
        public thumbnail: string) {
    }
}