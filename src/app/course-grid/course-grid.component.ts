import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from "../Models/course.model.client";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.scss']
})
export class CourseGridComponent implements OnInit {

  constructor(private service:CourseServiceClient) { }

  courses : Course[]= [];
  selectedCourse = {};
  selectedModule={};
  selectedLesson={};
  selectedTopic={};

  selectCourse(course)
  {
    this.selectedCourse=course;
  }

  selectModule(module)
  {
    this.selectedModule=module;
  }

  selectLesson(lesson)
  {
    this.selectedLesson=lesson;
  }

  selectTopic(topic)
  {
    this.selectedTopic=topic;
  }

  ngOnInit()
  {
      this.service.findAllCourses()
        .then (courses => this.courses = courses);
  }

}
