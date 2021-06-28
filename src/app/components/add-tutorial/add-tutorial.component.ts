import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }

  saveTutorial() {
  
      this.tutorialService.getAll()
        .subscribe(
          data => {
           
            console.log(data);
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
