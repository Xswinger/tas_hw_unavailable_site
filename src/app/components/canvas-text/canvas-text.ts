import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-canvas-text',
  imports: [],
  templateUrl: './canvas-text.html',
  styleUrl: './canvas-text.css'
})
export class CanvasText {
  @ViewChild('canvasElement') canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() text: string = 'text';
  @Input() fontSize: number = 16;
  @Input() textColor: string = '#000000';
  @Input() fontStyle: string = 'normal';

  canvasWidth: number = 0;
  canvasHeight: number = 0;
  fontFamily: string = 'Times New Roman';
  backgroundColor: string = 'transparent';

  private context!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d')!;
    setTimeout(() => this.updateCanvasSize());
    
  }

  private updateCanvasSize(): void {
    if (!this.context) return;

    const dpr = window.devicePixelRatio;
    this.context.font = `${this.fontStyle} ${this.fontSize}px ${this.fontFamily}`;
    this.canvasWidth = Math.ceil((this.context.measureText(this.text)).width * 0.9) * dpr;
    this.canvasHeight = (Math.ceil(this.fontSize)) * dpr;
    setTimeout(() => this.drawText());
  }

  private drawText(): void {
    if (!this.context) return;

    const canvas = this.canvasRef.nativeElement;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.context.fillStyle = this.backgroundColor;
    this.context.fillRect(0, 0, canvas.width, canvas.height);
    this.context.font = `${this.fontStyle} ${this.fontSize}px ${this.fontFamily}`;
    this.context.fillStyle = this.textColor;
    this.context.fillText(this.text, 2, canvas.height * 0.7 );
  }
}
