import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CanvasText } from '../canvas-text/canvas-text';

@Component({
  selector: 'app-mouse-button',
  imports: [CanvasText],
  templateUrl: './mouse-button.html',
  styleUrl: './mouse-button.css'
})
export class MouseButton {
  @Input() label: string = "Кнопка";
  @Output() mouseClick = new EventEmitter<MouseEvent>();

  onMouseDown(event: MouseEvent){
    if (event.button === 0){
      this.mouseClick.emit(event);
    }
  }
}
