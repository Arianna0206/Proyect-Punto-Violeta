export interface Point {
  x: number;
  y: number;
  left: string;
  top: string;
  bottom: string;
  isPulsating: boolean;
  textTop: string;
  textBottom: string;
  infoState: number; // nueva propiedad para indicar el estado del punto
}
