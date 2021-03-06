import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoursesService } from '../shared/model/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {

    const courseUrl = this.route.snapshot.params['id'];
    this.coursesService.findAllLessonsForCourse(courseUrl);
  }

}
