import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  demo = {
    title : 'This value is from component class using [value] property. Click on the below Icon for (click) behaviour'
  };

  onLogoClicked(){
    alert('Hello World');
  }

  onKeyUp(newTitle : string){
    this.demo.title = newTitle;
  }
}
