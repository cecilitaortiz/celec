// Interfaz para representar una hora de datos hidrológicos
export default interface DataHour {
  hora: string; // Ejemplo: "00:00"
  caudal: number; // Ejemplo: 123.45
  precipitacion: number; // Ejemplo: 0.0
  [key: string]: string | number; // Permite propiedades adicionales si es necesario
}
