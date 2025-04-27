import { ReactNode } from "react";

export default interface AccordionType {
  id?: string;
  title: string;
  key?: string;
  description?: string;
  children?: ReactNode;
  isOpen?: boolean;
  handler: (title: string) => void;
  [key: string]: any; // Allow additional properties
}

export interface USER {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
