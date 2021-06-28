import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=munich&appid=252251328f6829ec98f890de1f08cd7f&lang=en');
  }
  getHistoricWeather(){
    return this.http.get('http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1586468027&appid=1e536f45c13de7c930899cf4a6b96bd6');

  }
  
  
  
}
