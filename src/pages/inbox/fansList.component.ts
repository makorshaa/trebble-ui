import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityServices } from '../../providers/utility.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'view-fanslist-page',
  templateUrl: 'fansList.component.html',
  styleUrls: ['../campaigns/allcampaign.component.css']
})
export class ViewFansListComponent implements OnInit {

  fanlist: any;
  constructor(private fb: FormBuilder, private router: Router, private appGetdataService: UtilityServices) {

  }
  ngOnInit() {
    this.appGetdataService.getFansJSON().subscribe(data => {
      this.fanlist = data;
      // tslint:disable-next-line:forin
      for (let i = 0; i < this.fanlist.length; i++) {
        // tslint:disable-next-line:prefer-const
        let timespan = this.fanlist[i].text_received.split(' ');
        // tslint:disable-next-line:prefer-const
        let texttime = timespan[4].split(':');
        const x = texttime[0] + ':' + texttime[1];
        this.fanlist[i].time = x;
      }
    });

  }

}
