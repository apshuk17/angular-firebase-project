import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: Observable<firebase.User>;
  courses$: FirebaseListObservable<any[]>;
  lesson$: FirebaseObjectObservable<{}>;
  firstCourse: any;

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {}

  listPush() {
    this.courses$.push({description: 'TEST NEW COURSE'})
    .then(() => console.log('List push done'), err => console.log(err));
  }

  listRemove() {
    this.courses$.remove(this.firstCourse)
    .then(() => console.log('List remove done'), err => console.log(err));
  }

  listUpdate() {
    this.courses$.update(this.firstCourse, {testField: 'Advanced Angular Tutorial'});
  }

  objectUpdate() {
  }

  objectSet() {}

  ngOnInit() {
    this.courses$ = this.af.list('courses');

    this.courses$.subscribe((courses) => {
      console.log(courses);
    })

    this.courses$.map(courses => courses[0]).subscribe((res) => {
      this.firstCourse = res;
    });
  }
}
