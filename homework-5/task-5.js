'use strict';

class Car {
  static getSpecs(car) {
    this.car = car;
    console.log(this.car);
  }

  constructor({ maxSpeed, speed, isOn, distance, price }) {
    this._maxSpeed = maxSpeed;
    this._speed = 0;
    this._isOn = false;
    this._distance = 0;
    this._price = price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get price() {
    return this._price;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    this._speed = 0;
  }

  accelerate(value) {
    this._speed = this._speed + value;
    if (this._speed <= this._maxSpeed) {
      return this._speed;
    }
  }

  decelerate(newValue) {
    this._speed = this._speed - newValue;
    if (this._speed >= 0) {
      return this._speed;
    }
  }

  drive(hours) {
    if ((this._isOn = true)) {
      return (this._distance = hours * this._speed);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
