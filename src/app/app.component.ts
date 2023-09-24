import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto fly the moon';

  enabled= true;

  getBackgroundColor(): object{
    return{
      backgroundColor: this.enabled === true ? "yellow" : "grey"
    }
  }
}

export class Alumno {
  constructor(
    public dni: number,
    public nombre: string,
    public edad: number,
    public fechaIns: Date
  ) {}
}


