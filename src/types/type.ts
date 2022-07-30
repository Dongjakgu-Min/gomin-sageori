export interface restaurantType {
  type: string;
  id: number;
};

export interface dropdownProps {
  data: restaurantType[];
}

export interface Restaurant {
  type?: string;
  id?: number;
  title?: string;
}
