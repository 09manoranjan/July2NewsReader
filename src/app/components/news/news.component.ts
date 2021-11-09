import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // @Input() parentData;
  constructor(private newsService:NewsService,private activatedRoute:ActivatedRoute) { }
  fetchedNews:any;
  ngOnInit() {
    this.getNewsFromService()
  }
  getNewsFromService(){
    let category = this.activatedRoute.snapshot.params.category;
    console.log("category---------->",category);
    
    this.newsService.getNews(category).subscribe((result)=>{
      this.fetchedNews = result['articles'].filter(function (el) {
        return el.urlToImage != null;
      });
      console.log("result from News-------------->",this.fetchedNews);
    })
  }

}
