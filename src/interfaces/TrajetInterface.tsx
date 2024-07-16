export interface TrajetInterface {
  de: De;
  distance: string;
  temps: string;
  id: string;
}

export interface De {
  target: string;
  href: string;
  label: string;
}
