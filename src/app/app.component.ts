import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { Angulartics2GoogleAnalytics } from "angulartics2/ga";

declare var gtag;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "frontend";
  name = "JOHN DOE";

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    navEndEvents$.subscribe((event: NavigationEnd) => {
      gtag("config", "G-VHT0595CKS", {
        page_path: event.urlAfterRedirects,
      });
    });

    setTimeout(() => {
      const chatBot = document.querySelector("#sntch_button");
      chatBot.addEventListener("click", () => {
        gtag("event", "help_functions", {
          eventCategory: 'help',
          eventLabel: "User click the bot"
        });
      });
    }, 2000);
  }
}
