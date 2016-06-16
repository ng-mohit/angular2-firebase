import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'angular-fire-app',
  templateUrl: 'angular-fire.component.html',
  styleUrls: ['angular-fire.component.css']
})
export class AngularFireAppComponent {
  title = 'angular-fire works!';
  user= [];
 items: FirebaseListObservable<any[]>;
 
  //items: FirebaseObjectObservable<any[]>;
  constructor(af: AngularFire) {
    //this.items = af.database.object('/expenses');
    this.items = af.database.list('/expenses');
    //this.items.subscribe(snapshot => console.log(snapshot));
    //this.itemObservable = af.database.object('/item');
  }
  
  save(user){
    console.log(user);
    this.items.push(user);    
  } 
}
