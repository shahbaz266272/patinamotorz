export interface Car {
  id: string;
  title: string;
  price: string;
  image: any;
}
export interface CarItemProps {
  item: Car;
  isGridView: boolean;
}
