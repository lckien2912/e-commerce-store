export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  case: Case;
  plate: Plate;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Case {
  id: string;
  name: string;
  material: string;
}

export interface Plate {
  id: string;
  name: string;
  material: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
