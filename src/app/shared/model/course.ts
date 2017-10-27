export class Course {

    static fromJsonList(array): Course[] {
        return array.map(Course.fromJson);
    }

    static fromJson({$key, description, url, iconUrl, courseListIcon, longDescription}): Course {
        return new Course( $key, description, url, iconUrl, courseListIcon, longDescription );
    }

    constructor(
        public $key: string,
        public description: string,
        public url: string,
        public iconUrl: string,
        public courseListIcon: string,
        public longDescription: string
    ) {}

    get checked() {
        return this.$key;
    }
}
