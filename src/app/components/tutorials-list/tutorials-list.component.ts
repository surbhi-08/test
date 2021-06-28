import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials:any;
  

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.tutorialService.getAll()
    .subscribe(
      data => {
       
        console.log(data);
        this.tutorials = data;
      
      },
      error => {
        console.log(error);
      });


  }

  showHistoricWeather(){
    this.tutorialService.getHistoricWeather()
        .subscribe(
          data => {
           
            console.log(data);
          },
          error => {
            console.log(error);
          });
    
  
  }
  

  
 
}
