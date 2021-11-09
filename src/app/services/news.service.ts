import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }
  link:any;
  getNews(data){
    if(data == "India" || data == '' || data == undefined){
      this.link = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6eb21bfc96f24e0b97fa9849aa8a4ab5";
    }
    else{
      this.link = "https://newsapi.org/v2/top-headlines?country=in&category="+data.toLowerCase()+"&apiKey=6eb21bfc96f24e0b97fa9849aa8a4ab5";
    }
    return this.http.get(this.link);
  }

}
