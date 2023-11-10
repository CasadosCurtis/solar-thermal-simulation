import React, { useState } from "react";
import { simulateSolarTemp } from "../../utils/simulate";
import { MINUTE, initialWaterTemperature, solarIrradiance, initialTargetTemperature } from "../../utils/constants";
import TimeStepSelector from "./TimeStepSelector";
import TemperatureInput from "./TemperatureInput";
import SolarIrradianceInput from "./SolarIrradianceInput";

export default function SideBar({ onStart }) {
	// initialize state to default values
	const initalTimeStep = 60; // minutes
	const [targetTemperatureInput, setTemperatureTargetInput] = useState(initialTargetTemperature); // C
	const [startingTemperatureInput, setStartingTemperatureInput] = useState(initialWaterTemperature); // C
	const [solarIrradianceInput, setSolarIrradianceInput] = useState(solarIrradiance); // W/m^2
	const [timeStep, setTimeStep] = useState(initalTimeStep); // minutes

	const validateInputs = () => {
		if (startingTemperatureInput > targetTemperatureInput) {
			alert("Starting temperature must be less than target temperature");
			return;
		}
	};

	async function simulateHeatTransfer() {
		validateInputs();
		let simulatedData = await simulateSolarTemp(timeStep * MINUTE, targetTemperatureInput, startingTemperatureInput, solarIrradianceInput);
		onStart(simulatedData);
	}

	return (
		<div className="flex flex-col w-80 min-h-screen items-center bg-white p-4 fixed">
			<h1 className="text-2xl font-bold">Solar Thermal Simulator</h1>
			<button onClick={simulateHeatTransfer} className="w-48 p-3 mt-4 rounded-md text-white font-bold text-xl active:scale-95  bg-green-500">
				Simulate
			</button>
			<div className="flex flex-col mt-7 gap-4 text-lg">
				<TimeStepSelector timeStep={timeStep} setTimeStep={setTimeStep} />
				<TemperatureInput label="Starting Temperature" value={startingTemperatureInput} onChange={setStartingTemperatureInput} />
				<TemperatureInput label="Target Temperature" value={targetTemperatureInput} onChange={setTemperatureTargetInput} />
				<SolarIrradianceInput value={solarIrradianceInput} onChange={setSolarIrradianceInput} />
			</div>
		</div>
	);
}
