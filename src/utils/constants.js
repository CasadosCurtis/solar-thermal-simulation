// Constants used in the simulation for heat transfer and solar panel efficiency
export const solarPanelEfficiency = 0.7; // %
export const solarIrradiance = 1000; // W/m²
export const panelArea = 1; // m²
export const waterHeatCapacity = 4186; // J/kg°C 
export const tankVolume = 500; // [kg] "liters" (500 kg of water assuming 1 liter = 1 kg)
export const initialWaterTemperature = 20; // °C 
export const initialTargetTemperature = 60;  // initial water target temp °C
export const flowRate = 0.0630902; // liters/second

// time constants
export const SECOND = 1; // seconds
export const MINUTE = 60; // seconds
export const TEN_MINUTES = 10 * MINUTE; // seconds
export const THRITY_MINUTES = 30 * MINUTE; // seconds
export const HOUR = 60 * MINUTE; // seconds
export const TWO_HOURS = 2 * HOUR; // seconds
export const DAY = 24 * HOUR; // seconds
export const WEEK = 7 * DAY; // seconds