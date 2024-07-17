import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

interface Card {
  title: string;
  imageSrc: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {

  currentIndex = 0;
  transformValue = 0;
  cards: Card[] = [
    { title: 'HTML', imageSrc: '../../../assets/public/images/icons/programs_white/html.png' },
    { title: 'CSS', imageSrc: '../../../assets/public/images/icons/programs_white/css.png' },
    { title: 'JavaScript', imageSrc: '../../../assets/public/images/icons/programs_white/js.png' },
    { title: 'Angular', imageSrc: '../../../assets/public/images/icons/programs_white/angular.png' },
    { title: 'Vue', imageSrc: '../../../assets/public/images/icons/programs_white/vue.png' },
    { title: 'React', imageSrc: '../../../assets/public/images/icons/programs_white/react.png' },
    { title: 'PHP', imageSrc: '../../../assets/public/images/icons/programs_white/php.png' },
    { title: 'VS Code', imageSrc: '../../../assets/public/images/icons/programs_white/vscode.png' },
    { title: 'PHP MyAdmin', imageSrc: '../../../assets/public/images/icons/programs_white/phpdb.png' },
  ];

  startX: number | null = null;
  moveX: number = 0;
  @ViewChild('carouselWrapper', { static: true }) carouselWrapper: ElementRef | undefined;

  public chevron: HTMLElement | null = null;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.updateTransformValue();
    this.addSwipeListeners();
  }

  moveNext() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateTransformValue();
    this.chevron = document.getElementById('chevron');
    if(this.chevron){
      this.chevron.style.display = 'none';
    }

  }

  movePrev() {
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateTransformValue();
  }

  updateTransformValue() {
    this.transformValue = -(this.currentIndex * this.cardWidthWithMargin());
  }

  cardWidthWithMargin() {
    // Incluye el margen en el ancho de la tarjeta
    return 260; // 250px (tarjeta) + 10px (margen)
  }

  addSwipeListeners() {
    if (this.carouselWrapper) {
      const element = this.carouselWrapper.nativeElement;
      this.renderer.listen(element, 'touchstart', (event: TouchEvent) => this.onTouchStart(event));
      this.renderer.listen(element, 'touchmove', (event: TouchEvent) => this.onTouchMove(event));
      this.renderer.listen(element, 'touchend', () => this.onTouchEnd());
    }
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.moveX = 0;
  }

  onTouchMove(event: TouchEvent) {
    if (this.startX !== null) {
      this.moveX = event.touches[0].clientX - this.startX;
      this.transformWrapper(this.transformValue + this.moveX);
    }
  }

  onTouchEnd() {
    if (Math.abs(this.moveX) > 50) { // Ajusta este valor según la sensibilidad del deslizamiento
      if (this.moveX > 0) {
        this.movePrev();
      } else {
        this.moveNext();
      }
    } else {
      // Si el deslizamiento no es suficiente para cambiar de tarjeta, vuelve a la posición original
      this.updateTransformValue();
    }
    this.startX = null;
    this.moveX = 0;
  }

  transformWrapper(value: number) {
    const minValue = -this.cardWidthWithMargin() * (this.cards.length - 1);
    const maxValue = 0;
    if (value < minValue) {
      value = minValue;
    } else if (value > maxValue) {
      value = maxValue;
    }
    this.transformValue = value;
  }

  ngAfterViewInit() {
    const rotatingElements = document.querySelectorAll('.element');
    
    rotatingElements.forEach(rotatingElement => {
      rotatingElement.addEventListener('mouseenter', () => {
        rotatingElement.classList.add('element-animate');
      });
    
      rotatingElement.addEventListener('animationend', () => {
        rotatingElement.classList.remove('animate');
      });
    });
  }
}
