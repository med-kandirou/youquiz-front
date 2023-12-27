import { Participate } from './Participate.model';
export interface Message {
  id: number;
  content: string;
  participate: Participate;
}