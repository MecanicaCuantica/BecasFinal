import { Component, OnInit } from '@angular/core';
import { Article } from '.';
import { NewsService } from './news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getcabeceras()
      .subscribe( articles => this.articles.push( ...articles ) );
  }
}
