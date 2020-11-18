import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  template: `
    <p>
      <ng-content select="app-question-item"></ng-content>
    </p>
  `,
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
