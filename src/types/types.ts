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
