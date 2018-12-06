import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.scss']
})

export class TopicPillsComponent implements OnInit
{
  constructor(private route:ActivatedRoute,
              private service: CourseServiceClient)
  {
    this.route.params.subscribe(params=>this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];

  setParams(params)
  {
    this.courseId=params['courseId'];
    this.moduleId=params['moduleId'];
    this.lessonId=params['lessonId'];
    this.topicId=params['topicId'];
    this.loadTopics(this.moduleId);
  }

  selectedTopic={};
  selectTopic(topic)
  {
    this.selectedTopic=topic;
  }

  loadTopics(lessonId)
  {
    this.lessonId=lessonId;
    console.log(lessonId);
    this.service.findAllTopicsForLesson(lessonId)
      .then(topics=>this.topics=topics);

  }

  ngOnInit()
  {
  }

}
