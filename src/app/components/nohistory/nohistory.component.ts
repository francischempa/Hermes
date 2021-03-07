import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nohistory',
  templateUrl: './nohistory.component.html',
  styleUrls: ['./nohistory.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NohistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
