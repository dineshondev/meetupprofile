import {Entity} from '@ngx-metaui/rules';

/**
 * This is generated class
 */
export class Member implements Entity {


  constructor(public uniqueName?: string, public name?: string,
              public bio?: string, public created?: Date, public favoriteIDE?: string,
              public age?: number, public interest?: string[]) {
  }

  identity(): string {
    return this.uniqueName;
  }


  getTypes(): any {
    return {
      uniqueName: String,
      name: String,
      bio: String,
      created: Date,
      favoriteIDE: String,
      age: Number,
      interest: Array(String)
    };
  }


  /**
   * Used by MetaUI to identify the name of the class once everything is minified
   */
  className(): string {
    return 'Member';
  }


  toString(): string {
    return this.name;
  }
}
