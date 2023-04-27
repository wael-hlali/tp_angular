import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP';
  teamName = 'liverpool fc';
  coachName = 'jürgen klopp';

  sectionApplied = true;

  para = "text-align: center;color: #C8102E;";

}