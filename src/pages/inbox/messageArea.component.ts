import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityServices } from '../../providers/utility.service';
import { DatePipe } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'view-messageArea-page',
  templateUrl: 'messageArea.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})
export class ViewMessageAreaComponent implements OnInit {

  today: Date;
  sendTextMessage: FormGroup;
  msglist = [];
  textmessage = '';
  constructor(private fb: FormBuilder, private router: Router, private appGetdataService: UtilityServices) {
    this.messageDetails();
  }

  ngOnInit() {
    this.appGetdataService.getMsgJSON().subscribe(data => {
      this.msglist = data;
      // tslint:disable-next-line:forin
      for (let i = 0; i < this.msglist.length; i++) {
        // tslint:disable-next-line:prefer-const
        let timespan = this.msglist[i].date_created.split(' ');
        // tslint:disable-next-line:prefer-const
        let time = timespan[4].split(':');
        const x = time[0] + ':' + time[1];
        this.msglist[i].sent_time = x;
      }
    });

  }

  // form group
  messageDetails() {
    this.sendTextMessage = this.fb.group({
      message: ['', Validators.required],
    });
  }

  sendmessage(formData) {
    this.today = new Date();
    // tslint:disable-next-line:prefer-const
    let x = this.today.getHours() + ':' + this.today.getMinutes();
    const data = { from: '+15104564545', body: formData.message, sent_time: x };
    this.msglist.push(data);
    this.textmessage = null;
  }
}
