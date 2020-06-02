import {Injectable} from '@angular/core';
import {ProductNode} from '../models/product-node.model';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  private _TREE_DATA: ProductNode[] = [
    {
      name: 'Байк',
      children: [
        {name: 'Двухподвес', value: 'fullSuspension'},
        {name: 'Хардтейл', value: 'hardtail'}
      ]
    },
    {
      name: 'Рама',
      children: [
        {name: 'Двухподвес', value: 'fullSuspensionFrame'},
        {name: 'Хардтейл', value: 'hardtailFrame'}
      ]
    },
    {
      name: 'Подвеска',
      children: [
        {name: 'Вилка', value: 'fork'},
        {name: 'Амортизатор', value: 'shock'},
        {name: 'Пружина', value: 'spring'},
        {name: 'Детали', value: 'suspensionParts'}
      ]
    },
    {
      name: 'Тормоза',
      children: [
        {name: 'Дисковый', value: 'discBrake'},
        {name: 'Ободной', value: 'rimBrake'},
        {name: 'Ротор', value: 'rotor'},
        {name: 'Колодки', value: 'pads'},
        {name: 'Детали', value: 'brakesParts'}
      ]
    },
    {
      name: 'Колеса и резина',
      children: [
        {name: 'В сборе', value: 'wheelset'},
        {name: 'Втулка', value: 'hub'},
        {name: 'Обод', value: 'rim'},
        {name: 'Покрышки', value: 'tyres'},
        {name: 'Детали', value: 'wheelsParts'}
      ]
    },
    {
      name: 'Привод',
      children: [
        {name: 'Шатуны', value: 'crankset'},
        {name: 'Каретка', value: 'bottomBracket'},
        {name: 'Переключатель', value: 'derailleur'},
        {name: 'Манетка', value: 'shifter'},
        {name: 'Цепь', value: 'chain'},
        {name: 'Детали', value: 'otherDrivetrainParts'}
      ]
    },
    {
      name: 'Управление',
      children: [
        {name: 'Вынос', value: 'stem'},
        {name: 'Руль', value: 'handlebar'},
        {name: 'Грипсы', value: 'grips'},
        {name: 'Детали', value: 'otherSteeringParts'}
      ]
    },
    {
      name: 'Сидение',
      children: [
        {name: 'Седло', value: 'seat'},
        {name: 'Дроппер', value: 'dropperPost'},
        {name: 'Труба', value: 'seatTube'},
        {name: 'Детали', value: 'otherSeatParts'}
      ]
    },
    {
      name: 'Педали',
      children: [
        {name: 'Платформы', value: 'platformPedals'},
        {name: 'Контакты', value: 'contactPedals'}
      ]
    },
    {
      name: 'Аксессуары',
      children: [
        {name: 'Защита рамы', value: 'frameProtection'},
        {name: 'Крылья', value: 'protectionWings'},
        {name: 'Бутылки', value: 'bottles'},
        {name: 'Другие', value: 'otherAccessories'},
      ]
    },
  ];

  constructor() {
  }

  get productNodes() {
    return [...this._TREE_DATA];
  }

}
