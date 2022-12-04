export interface PetService {
  id: string;
  serviceName: string;
  description: string;
  defaultHours: number;
  price: number;
  photo: string;
  categories: string[];
  petTypes: string[];
}
