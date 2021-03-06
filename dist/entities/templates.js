"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const Car_1 = __importDefault(require("./Car"));
const arrCars = [
    new Car_1.default(1, 'Audi', 'A3', 300000, 2013, 'https://tinyurl.com/yxqfy4g7'),
    new Car_1.default(2, 'Mazda', '6', 1000, 2018, 'https://tinyurl.com/yxmplpsc'),
    new Car_1.default(3, 'Toyota', 'Corolla', 2000, 2015, 'https://tinyurl.com/y3ahq94w'),
    new Car_1.default(4, 'Lada', 'Niva', 52000, 2015, 'https://tinyurl.com/yy4bf9k9'),
    new Car_1.default(5, 'Kia', 'Stonic', 12000, 2019, 'https://tinyurl.com/y4vklxm3'),
];
function seedCar() {
    const json = JSON.stringify(arrCars);
    fs_1.default.writeFile('./src/data/cars.data', json, err => {
        if (err) {
            console.log(err);
        }
    });
    fs_1.default.writeFile('./src/data/cars.counter.data', '5', err => {
        if (err) {
            console.log(err);
        }
    });
}
exports.seedCar = seedCar;
//# sourceMappingURL=templates.js.map