import { Component } from '@angular/core';
import faqs from '../assets/faqs.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directlinkexercise';
  public faqsList:{id:string, question:string, answer:string}[] = faqs;
}
