import faker from 'faker';
import { Mappable } from './interface/Mappable';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }

  popupContent(): string {
    return `${this.name}`;
  }
}
