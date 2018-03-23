import { Component, OnInit } from '@angular/core';
import { UtilityServices } from '../../providers/utility.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-page',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {


  userid: any;
  constructor(private appGetdataService: UtilityServices) { }

  ngOnInit() {
    this.appGetdataService.getLoginId().subscribe(data => {
      this.userid = data.id;
      console.log(this.userid);
    });
  }
}
