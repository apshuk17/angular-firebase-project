import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Course } from './course';
import { Lesson } from './lesson';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  courses$: Observable<Course[]>;

  constructor(private afd: AngularFireDatabase) { }

  findAllCourses() {
    return this.courses$ = this.afd.list('courses').map(Course.fromJsonList);
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    const course$: Observable<Course> = this.afd.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    }).map(result => Course.fromJson(result[0]));

    return course$;
  }

  findAllLessonsForCourse(courseUrl: string) {
    const course$: Observable<Course> = this.findCourseByUrl(courseUrl);

    const lessonsPerCourse: Observable<Lesson[]> = course$.switchMap(course => {
                                                  return this.afd.list('lessonsPerCourse/' + course.$key);
                                                });
    const courseLessons = lessonsPerCourse
    .map(lspc => lspc.map(lpc => this.afd.object('lessons/' + lpc.$key)))
    .flatMap(fbojs => Observable.combineLatest(fbojs));

    return courseLessons;

  }
}
