import { Injectable } from '@angular/core';
import { Lesson } from './lesson';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LessonsService {

  constructor(private afd: AngularFireDatabase) { }

  findAllLessons(): Observable<Lesson[]> {
    return this.afd.list('lessons').map(Lesson.fromJsonList);
  }

}
