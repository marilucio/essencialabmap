
declare module "@/components/ui/*" {
  import { FC, ReactNode } from "react";
  const content: any;
  export default content;
  export const Button: any;
  export const buttonVariants: any;
  export const DropdownMenu: any;
  export const DropdownMenuTrigger: any;
  export const DropdownMenuContent: any;
  export const DropdownMenuItem: any;
}

declare module "../../components/ui/*" {
  const content: any;
  export default content;
  export const Button: any;
  export const buttonVariants: any;
  export const DropdownMenu: any;
  export const DropdownMenuTrigger: any;
  export const DropdownMenuContent: any;
  export const DropdownMenuItem: any;
}
