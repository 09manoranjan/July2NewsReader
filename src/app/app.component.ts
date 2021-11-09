import { Component,ViewChild,OnInit } from '@angular/core';
import {NewsService } from './services/news.service';
import {NewsComponent} from './components/news/news.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'July2NewsReader';
  constructor(private newsService:NewsService,private router:Router){}
  //@ViewChild(NewsComponent,{static: false}) child:NewsComponent;
  ngOnInit(){
  }
  getNews(value){
    console.log("News------------>",value);
    let parentData = value;
    //this.router.navigate(['/news/'+value])
    setTimeout(() => {
      location.reload();
    }, 100);
    //this.child.getNewsFromService(value);
}
}
