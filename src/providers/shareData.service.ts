import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {
    getSet$: Observable<any>;
    private getterSetter = new Subject<any>();

    constructor() {
        this.getSet$ = this.getterSetter.asObservable();
    }

    getNset(data) {
        console.log(data); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.getterSetter.next(data);
    }
}
