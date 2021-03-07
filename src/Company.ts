import faker from 'faker';
import { Mappable } from './interface/Mappable';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number(faker.address.latitude()),
      long: Number(faker.address.longitude()),
    };
  }

  popupContent(): string {
    return `<div>
              <h1>${this.companyName}</h1>
              <q>${this.catchPhrase}</h3>
            </div>`;
  }
}
