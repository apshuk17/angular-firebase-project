import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Course } from './course';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  courses$: Observable<Course[]>;

  constructor(private afd: AngularFireDatabase) { }

  findAllCourses() {
    return this.courses$ = this.afd.list('courses').map(Course.fromJsonList);
  }

}
