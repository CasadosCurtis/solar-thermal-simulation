import React from "react";
// import { TEN_MINUTES, THRITY_MINUTES, HOUR, TWO_HOURS } from "../../utils/constants";

function TimeStepSelector({ timeStep, setTimeStep }) {
	return (
		<div className="text-start flex flex-col">
			<label htmlFor="timeStep" className="font-bold">
				Select Time Step:
			</label>
			<select
				id="timeStep"
				className="w-full bg-slate-100 rounded-md border-0 px-3 py-1.5 text-gray-900"
				value={timeStep}
				onChange={(e) => setTimeStep(Number(e.target.value))}
			>
				{/* Note: Magic numbers used here becuase issues importing constants */}
				<option value={10}>10 minutes</option>
				<option value={30}>30 minutes</option>
				<option value={60}>1 hour</option>
				<option value={120}>2 hours</option>
			</select>
		</div>
	);
}

export default TimeStepSelector;
