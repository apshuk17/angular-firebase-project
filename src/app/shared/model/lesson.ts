export class Lesson {

    static fromJsonList(array): Lesson[] {
        // return array.map(lesson => Lesson.fromJson(lesson));
        return array.map(Lesson.fromJson);
    }

    static fromJson({$key, description, duration, url, tags, pro, longDescription, courseId}): Lesson {
        return new Lesson( $key, description, duration, url, tags, pro, longDescription, courseId );
    }

    get isBeginner() {
        return this.tags && this.tags.includes('BEGINNER');
    }

    constructor(
        public $key: string,
        public description: string,
        public duration: string,
        public url: string,
        public tags: string,
        public pro: string,
        public longDescription: string,
        public courseId: string
    ) {}

}
