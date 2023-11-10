import { solarIrradiance, initialWaterTemperature, flowRate, initialTargetTemperature } from './constants';
import { calculateEnergyProduced, calculateSolarPower, calculateTemperatureIncrease, mixTankWater } from './helpers';


// function to save the relevant data for the current step - time, temperature, target
function saveCurrentStep(stepCount, timeStepInSeconds, mixedTemp, desiredTemp) {
    return {
        time: ((stepCount * timeStepInSeconds) / 60).toFixed(2) + " min", // minutes
        temperature: mixedTemp.toFixed(2),  // °C
        target: desiredTemp // °C
    };
}

/* function to calculate the temperature history of the water given step size,
 desired temperature, initial temperature, and average solar irradiance */
export async function simulateSolarTemp(timeStepInSeconds,
    targetTemperature = initialTargetTemperature,
    initialTemperature = initialWaterTemperature,
    averageSolarIrradiance = solarIrradiance,
) {

    // initialize variables
    let waterTempOutFromSolar = initialTemperature;
    let mixedTankWaterTemperature = waterTempOutFromSolar;
    let simulatedTempHistory = [];
    let totalEnergyConverted = 0;
    let stepCount = 0;

    while (mixedTankWaterTemperature < targetTemperature) {
        let power = calculateSolarPower(averageSolarIrradiance);
        let energyProduced = calculateEnergyProduced(power, timeStepInSeconds); // [Joules]

        waterTempOutFromSolar = calculateTemperatureIncrease(energyProduced, mixedTankWaterTemperature); // [°C]
        mixedTankWaterTemperature = mixTankWater(waterTempOutFromSolar, mixedTankWaterTemperature);
        simulatedTempHistory.push(saveCurrentStep(stepCount, timeStepInSeconds, mixedTankWaterTemperature, targetTemperature));
        totalEnergyConverted += energyProduced;
        stepCount++;

        // exit early if the desired temperature is reached to avoid overshooting the target
        if (mixedTankWaterTemperature >= targetTemperature) {
            break;
        }
    }

    // append stats to the temperature history before returning
    simulatedTempHistory["stats"] = [
        { name: "Total Energy Converted", value: (totalEnergyConverted).toFixed(2), units: "Joules" },
        { name: "Liters Processed", value: (stepCount * timeStepInSeconds * flowRate).toFixed(2), units: "Liters" },
        { name: "Elapsed Time", value: (stepCount * timeStepInSeconds).toFixed(2), units: "Seconds" },
        { name: "Temperature Increase", value: (waterTempOutFromSolar - initialTemperature).toFixed(2), units: "Celsius" },
    ]

    return simulatedTempHistory;
}