import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { QuestionItemComponent } from './question-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [QuestionComponent, QuestionItemComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [QuestionComponent, QuestionItemComponent]
})
export class QuestionModule { }
