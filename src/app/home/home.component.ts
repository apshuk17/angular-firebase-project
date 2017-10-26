import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/model/lessons.service';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allLessons: Lesson[];
  filteredLessons: Lesson[];

  constructor(private lessonsService: LessonsService) { }

  search(term: string) {
    this.filteredLessons = this.allLessons.filter(lesson => {
      return lesson.description.includes(term);
    });
  }

  ngOnInit() {
    this.lessonsService.findAllLessons().subscribe(
      (lessons: Lesson[]) => {
        this.allLessons = this.filteredLessons = lessons;
      }
    );
  }

}
