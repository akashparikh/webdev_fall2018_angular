import {Injectable} from "@angular/core";

const courseAPI = 'http://localhost:8080'

@Injectable()
export class CourseServiceClient{

  findAllCourses()
  {
     return  fetch(courseAPI+'/api/course')
       .then (response=>response.json());
  }

  findCourseById(courseId)
  {
    return fetch(courseAPI+'/api/course/'+courseId)
      .then (response=>response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch(courseAPI + '/api/course/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModule(moduleId) {
    return fetch(courseAPI + '/api/course/1/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findAllTopicsForLesson(lessonId) {
    return fetch(courseAPI + '/api/course/1/module/1/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findAllWidgetsForTopic(topicId) {
    return fetch(courseAPI + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }

}
