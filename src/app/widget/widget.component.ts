import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private service: CourseServiceClient)
  {
    this.route.params.subscribe(params=>this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  widgetId;
  widgets = [];

  setParams(params)
  {
    this.courseId=params['courseId'];
    this.moduleId=params['moduleId'];
    this.lessonId=params['lessonId'];
    this.topicId=params['topicId'];
    this.widgetId=params['widgetId'];
    this.loadWidgets(this.topicId);
  }

  selectedWidget={};
  selectWidget(widget)
  {
    this.selectedWidget=widget;
  }

  loadWidgets(topicId)
  {
    this.topicId=topicId;
    console.log(topicId);
    this.service.findAllWidgetsForTopic(topicId)
      .then(widgets=>this.widgets=widgets);

  }


  ngOnInit() {
  }

}
