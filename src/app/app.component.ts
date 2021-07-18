import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  name = 'JOHN DOE';


  ngOnInit(): void {
    setTimeout(() => {
      const chatBot = document.querySelector('#sntch_button');
      chatBot.addEventListener('click', () => {
        // TODO: Register user help
        console.log('Register user help in DB')
      });
    }, 2000);
  }
}
