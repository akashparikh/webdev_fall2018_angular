import { Component, OnInit } from '@angular/core';
import {ActivateRoutes} from "@angular/router/src/operators/activate_routes";
import {ActivatedRoute} from "@angular/router";
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../Models/course.model.client";

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.scss']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service:CourseServiceClient,
              private route:ActivatedRoute)
  {
    this.route.params.subscribe(params=>this.loadCourse(params['courseId']));
  }


  course : Course = new Course ();
  loadCourse(courseId)
  {
    console.log(courseId);
    this.service.findCourseById(courseId)
      .then(course=>this.course=course);

  }

  selectedModule={};
  selectModule(module)
  {
    this.selectedModule=module;
  }

  ngOnInit()
  {

  }

}
