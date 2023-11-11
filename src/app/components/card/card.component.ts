import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule],
})

export class CardComponent {

  @Input() imagenContacto : string = ""
  @Input() nombreContacto : string = ""
  @Input() mensajeContacto : string = ""
  @Input() fechaMensaje : string = ""
  @Input() numMensajes : number = 0
  @Input() estatusMensaje : boolean | null | string = null
}


