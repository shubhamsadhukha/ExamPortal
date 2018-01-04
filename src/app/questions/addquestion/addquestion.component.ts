import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { QuestionService } from '../../services/question.service';
import {
    RouterModule,
    Routes,
    Router
  } from '@angular/router';

@Component({
    selector: 'app-addquestion',
    templateUrl: './addquestion.component.html',
    styleUrls: ['./addquestion.component.css']
  })
  export class AddQuestionsComponent implements OnInit {

    questiontype: string[] = [
      'Text',
      'Image'
    ];

    categories: string[] = [
      'Maths',
      'Physics',
      'Chemistry',
      'Biology'
    ];

    correctanswer: string[] = [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4'
    ];

    addQuestionForm: FormGroup;
 
    ngOnInit(){
      this.addQuestionForm = new FormGroup({
        type: new FormControl(),                  
        category: new FormControl(),
        question_content: new FormControl(),
        answers: new FormGroup({
          opt_1: new FormControl(),
          opt_2: new FormControl(),
          opt_3: new FormControl(),
          opt_4: new FormControl(),
        }),
        correct_answer: new FormControl(),
      });
          
      }
    
    constructor(private quesService: QuestionService, private router: Router){
      
    }

      public resetForm():void {
        this.addQuestionForm.reset();
      }
    
      public cancelForm():void {
        this.router.navigate(['/']);
      }
    
      submitForm(values:Object):void {
        if (this.addQuestionForm.valid) {
          // your code goes here
          this.quesService.addQuestion(this.addQuestionForm.value).subscribe(
          res => {
            
            console.log('New Question Added Successfully');
            // this.leaveArray = res;
            // this.snackbar.open('New User Added Successfully','OK',{ duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' });
            
          },
          
          error => {
            console.log('There was some error!');
            // this.snackbar.open('Sorry! There was some error','OK',{ duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' })
          }
        );
    
          // console.log(values);
        }
      }
  }