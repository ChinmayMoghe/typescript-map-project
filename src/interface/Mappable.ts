// Interface for classes that need to be shown on map
export interface Mappable {
  location: {
    lat: number;
    long: number;
  };
  popupContent(): string;
}
