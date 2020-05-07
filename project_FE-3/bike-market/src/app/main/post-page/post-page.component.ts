import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  options: string[] = ['Байк', 'Рама', 'Подвеска', 'Тормоза', 'Колеса и резина',
    'Привод', 'Управление', 'Сидение', 'Педали', 'Аксессуары'];
  suboptions: string[] = [];

  bikeOptions: string[] = ['Хардтейл', 'Двухподвес'];
  frameOptions: string[] = ['Хардтейл', 'Двухподвес'];
  suspensionOptions: string[] = ['Вилка', 'Амортизатор', 'Пружина',
    'Детали для подвески'];
  brakesOptions: string[] = ['Дисковый тормоз', 'Ободной тормоз', 'Ротор',
    'Колодки', 'Детали для тормозов'];
  wheelsAndTyresOptions: string[] = ['Колесо в сборе', 'Втулка', 'Обод',
    'Покрышки', 'Детали для колес'];
  drivetrainOptions: string[] = ['Шатуны', 'Каретка', 'Переключатель',
    'Манетка', 'Цепь', 'Другие детали'];
  steeringOptions: string[] = ['Вынос', 'Руль', 'Грипсы',
    'Детали для управления'];
  seatOptions: string[] = ['Седло', 'Дроппер', 'Подседельная труба',
    'Другие детали'];
  pedalsOptions: string[] = ['Платформы', 'Контактные педали'];
  accessoriesOptions: string[] = ['Защита рамы', 'Защитные крылья', 'Бутылки',
    'Другие аксессуары'];


  constructor() {
  }

  ngOnInit(): void {
  }


  onClicked(value) {
    switch (value) {
      case 'Байк':
        this.suboptions = this.bikeOptions;
        break;
      case 'Рама':
        this.suboptions = this.frameOptions;
        break;
      case 'Подвеска':
        this.suboptions = this.suspensionOptions;
        break;
      case 'Тормоза':
        this.suboptions = this.brakesOptions;
        break;
      case 'Колеса и резина':
        this.suboptions = this.wheelsAndTyresOptions;
        break;
      case 'Привод':
        this.suboptions = this.drivetrainOptions;
        break;
      case 'Управление':
        this.suboptions = this.steeringOptions;
        break;
      case 'Сидение':
        this.suboptions = this.seatOptions;
        break;
      case 'Педали':
        this.suboptions = this.pedalsOptions;
        break;
      case 'Аксессуары':
        this.suboptions = this.accessoriesOptions;
        break;
    }
  }

}
