import { Component, OnInit } from '@angular/core';
import { TestQuestionservice } from '../services/testQuestionService';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [TestQuestionservice]
})
export class QuestionsComponent implements OnInit {

  questionControls : {};
  constructor(tqs: TestQuestionservice) {
    this.questionControls = tqs.getQuestions();
   }

  ngOnInit() {
  }

}
