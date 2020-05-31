import {Injectable} from '@angular/core';
import {Suboption} from './suboption.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _options: string[] = ['Байк', 'Рама', 'Подвеска', 'Тормоза',
    'Колеса и резина', 'Привод', 'Управление', 'Сидение', 'Педали',
    'Аксессуары'];

  private _bikeOptions: Suboption[] = [
    {name: 'Двухподвес', value: 'fullSuspension'},
    {name: 'Хардтейл', value: 'hardtail'}
  ];
  private _frameOptions: Suboption[] = [
    {name: 'Двухподвес', value: 'fullSuspensionFrame'},
    {name: 'Хардтейл', value: 'hardtailFrame'}
  ];
  private _suspensionOptions: Suboption[] = [
    {name: 'Вилка', value: 'fork'},
    {name: 'Амортизатор', value: 'shock'},
    {name: 'Пружина', value: 'spring'},
    {name: 'Детали для подвески', value: 'suspensionParts'}
  ];
  private _brakesOptions: Suboption[] = [
    {name: 'Дисковый тормоз', value: 'discBrake'},
    {name: 'Ободной тормоз', value: 'rimBrake'},
    {name: 'Ротор', value: 'rotor'},
    {name: 'Колодки', value: 'pads'},
    {name: 'Детали для тормозов', value: 'brakesParts'}
  ];
  private _wheelsAndTyresOptions: Suboption[] = [
    {name: 'Колесо в сборе', value: 'wheelset'},
    {name: 'Втулка', value: 'hub'},
    {name: 'Обод', value: 'rim'},
    {name: 'Покрышки', value: 'tyres'},
    {name: 'Детали для колес', value: 'wheelsParts'}
  ];
  private _drivetrainOptions: Suboption[] = [
    {name: 'Шатуны', value: 'crankset'},
    {name: 'Каретка', value: 'bottomBracket'},
    {name: 'Переключатель', value: 'derailleur'},
    {name: 'Манетка', value: 'shifter'},
    {name: 'Цепь', value: 'chain'},
    {name: 'Другие детали', value: 'otherDrivetrainParts'}
  ];
  private _steeringOptions: Suboption[] = [
    {name: 'Вынос', value: 'stem'},
    {name: 'Руль', value: 'handlebar'},
    {name: 'Грипсы', value: 'grips'},
    {name: 'Детали для управления', value: 'otherSteeringParts'}
  ];
  private _seatOptions: Suboption[] = [
    {name: 'Седло', value: 'seat'},
    {name: 'Дроппер', value: 'dropperPost'},
    {name: 'Подседельная труба', value: 'seatTube'},
    {name: 'Другие детали', value: 'otherSeatParts'}
  ];
  private _pedalsOptions: Suboption[] = [
    {name: 'Платформы', value: 'platformPedals'},
    {name: 'Контактные педали', value: 'contactPedals'}
  ];
  private _accessoriesOptions: Suboption[] = [
    {name: 'Защита рамы', value: 'frameProtection'},
    {name: 'Защитные крылья', value: 'protectionWings'},
    {name: 'Бутылки', value: 'bottles'},
    {name: 'Другие аксессуары', value: 'otherAccessories'}
  ];

  constructor() {
  }

  get options() {
    return [...this._options];
  }

  get bikeOptions() {
    return [...this._bikeOptions];
  }

  get frameOptions() {
    return [...this._frameOptions];
  }

  get suspensionOptions() {
    return [...this._suspensionOptions];
  }

  get brakesOptions() {
    return [...this._brakesOptions];
  }

  get wheelsAndTyresOptions() {
    return [...this._wheelsAndTyresOptions];
  }

  get drivetrainOptions() {
    return [...this._drivetrainOptions];
  }

  get steeringOptions() {
    return [...this._steeringOptions];
  }

  get seatOptions() {
    return [...this._seatOptions];
  }

  get pedalsOptions() {
    return [...this._pedalsOptions];
  }

  get accessoriesOptions() {
    return [...this._accessoriesOptions];
  }
}
