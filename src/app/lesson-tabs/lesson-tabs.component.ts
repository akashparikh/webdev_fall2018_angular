import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.scss']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private service: CourseServiceClient)
  {
    this.route.params.subscribe(params=>this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  lessons = [];

  setParams(params)
  {
    this.courseId=params['courseId'];
    this.moduleId=params['moduleId'];
    this.lessonId=params['lessonId'];
    this.loadLessons(this.moduleId);
  }

  selectedLesson={};

  loadLessons(moduleId)
  {
    this.moduleId=moduleId;
    console.log(moduleId);
    this.service.findAllLessonsForModule(moduleId)
      .then(lessons=>this.lessons=lessons);

  }

  selectLesson(lesson)
  {
    this.selectedLesson=lesson;
  }

  ngOnInit() {
  }

}
