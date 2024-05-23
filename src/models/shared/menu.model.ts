import { ReactNode } from "react";

export type MenuItem = {
  key: string;
  label: string;
  path?: string;
  icon?: ReactNode;
  onClick?: () => void
};