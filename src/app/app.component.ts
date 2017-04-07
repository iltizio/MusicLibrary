import { Component } from '@angular/core';
const ipcRenderer = require('electron').ipcRenderer;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Music Library';

  //constructor() {
  //  ipcRenderer.on("reply", (event, arg) => {
  //    console.log("Reply was " + arg);
  //  });
  //}

  //public text_hello_world: string = "Hello Angular 2!";
  //public text_small: string = "Greatness awaits...";

  public quit(): void {
      console.log("Quit invoked");
      ipcRenderer.send("quit", "");
  }

}
