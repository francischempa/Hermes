import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  today = new Date().toDateString()
  message = "We invite you to the Retirement service of our pastor, Rev. Elizabeth Eduful."
  constructor() { }

  ngOnInit(): void {
  }

}
