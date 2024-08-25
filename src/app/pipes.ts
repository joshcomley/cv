import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Skill } from './shared';

@Pipe({
    name: 'importantSkills',
    pure: false,
    standalone: true
})
@Injectable()
export class ImportantSkillsPipe implements PipeTransform {
    transform(items: Skill[], args: boolean = null): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => args ? item.description : !item.description);
    }
}

@Pipe({
    name: "orderByExperience",
    standalone: true
})
export class OrderByExperiencePipe {
    transform(array: Array<Skill>, args: string = null): Array<Skill> {
        array.sort((a: Skill, b: Skill) => {
            if (a.months < b.months) {
                return 1;
            } else if (a.months > b.months) {
                return -1;
            }
            if (a.mostRecentYear < b.mostRecentYear) {
                return 1;
            } else if (a.mostRecentYear > b.mostRecentYear) {
                return -1;
            }
            return 0;
        });
        return array;
    }
}