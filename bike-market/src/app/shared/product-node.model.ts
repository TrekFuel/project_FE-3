export interface ProductNode {
  name: string;
  value?: string;
  selected?: boolean;
  indeterminate?: boolean;
  children?: ProductNode[];
}
