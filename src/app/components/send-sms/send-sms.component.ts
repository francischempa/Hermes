import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendSmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
