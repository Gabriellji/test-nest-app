import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Yauheniya',
      brand: 'best stuff',
      flavors: ['smart', 'best'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    console.log(existingCoffee, updateCoffeeDto);
    if (existingCoffee) {
      const { name, brand, flavors } = updateCoffeeDto;
      existingCoffee.name = name ? name : existingCoffee.name;
      existingCoffee.brand = brand ? brand : existingCoffee.brand;
      existingCoffee.flavors = flavors ? flavors : existingCoffee.flavors;
    }

    return existingCoffee;
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
