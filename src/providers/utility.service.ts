import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilityServices {

    constructor(private http: HttpClient) {
        /*         this.getJSON().subscribe(data => {
                    console.log(data);
                }); */
    }

    // get messages
    // tslint:disable-next-line:no-unused-expression
    public getMsgJSON(): Observable<any> {
        return this.http.get('./assets/json/twilio-success.json');
    }

    // get list of fans
    // tslint:disable-next-line:no-unused-expression
    public getFansJSON(): Observable<any> {
        return this.http.get('./assets/json/fanslisting.json');
    }


    // get loginID
    // tslint:disable-next-line:no-unused-expression
    public getLoginId(): Observable<any> {
        return this.http.get('./assets/json/login.json');
    }

    // get signup details
    // tslint:disable-next-line:no-unused-expression
    public getSignUpDetails(): Observable<any> {
        return this.http.get('./assets/json/signup-details.json');
    }
}
