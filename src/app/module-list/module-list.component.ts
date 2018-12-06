import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})

export class ModuleListComponent implements OnInit {

  modules =[];
  moduleId;
  course={courseId:''};

  constructor(private route: ActivatedRoute,
              private service: CourseServiceClient)
  {
    this.route.params.subscribe(params=>this.setParams(params));
  }

  courseId;
  selectedModule={};

  selectModule(module)
  {
    this.selectedModule=module;
  }

  setParams(params)
  {
    this.courseId=params['courseId'];
    this.moduleId=params['moduleId'];
    this.loadModules(this.courseId);
  }

  loadModules(courseId)
  {
    this.courseId=courseId;
    this.service.findAllModulesForCourse(courseId)
      .then(modules=>this.modules=modules);
  }

  ngOnInit() {
  }

}
