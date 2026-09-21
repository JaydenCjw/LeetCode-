/**
 * 设计停车系统
 * 难度：★☆☆☆☆
 * ParkingSystem(big, medium, small)：addCar 按车型占用一个车位，没有空位则失败。车型 1 大、2 中、3 小。
 *
 * 示例：ParkingSystem(1,1,0)。addCar(1)=true, addCar(2)=true, addCar(3)=false, addCar(1)=false
 *
 * 思路：三个计数器，进车时减一。
 * 时间 O(1)，空间 O(1)
 */

export class ParkingSystem {
  private readonly slots: number[];

  constructor(big: number, medium: number, small: number) {
    this.slots = [0, big, medium, small];
  }

  addCar(carType: number): boolean {
    if (this.slots[carType] <= 0) {
      return false;
    }
    this.slots[carType] -= 1;
    return true;
  }
}

const parking = new ParkingSystem(1, 1, 0);
console.log([parking.addCar(1), parking.addCar(2), parking.addCar(3), parking.addCar(1)]);
