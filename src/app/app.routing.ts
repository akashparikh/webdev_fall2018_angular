import {RouterModule, Routes} from "@angular/router";
import {CourseGridComponent} from "./course-grid/course-grid.component";
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {ModuleListComponent} from "./module-list/module-list.component";
import {CourseViewerComponent} from "./course-viewer/course-viewer.component";

const appRoutes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: WhiteBoardComponent},
  {path:'course', component: CourseGridComponent},
  {path: 'course/:courseId', component:CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component:CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component:CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component:CourseViewerComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
