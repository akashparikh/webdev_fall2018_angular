import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {routing} from "./app.routing";
import {CourseServiceClient} from "./services/course.service.client";
import { ModuleListComponent } from './module-list/module-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    ModuleListComponent,
    CourseViewerComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CourseServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
