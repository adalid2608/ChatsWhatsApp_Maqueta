import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() imagenContacto : string = ""
  @Input() nombreContacto : string = ""
  @Input() mensajeContacto : string = ""
  @Input() fechaMensaje : string = ""
  @Input() numMensajes : number = 0
  @Input() estatusMensaje : boolean | null | string = null
}

