import React from "react";

function TemperatureInput({ label, value, onChange }) {
	return (
		<div className="text-start flex flex-col">
			<label htmlFor={label} className="font-bold">
				{label}
			</label>
			<input
				type="text"
				id={label}
				value={value}
				placeholder="Enter value"
				className="w-full bg-slate-100 rounded-md border-0 px-3 py-1.5 text-gray-900"
				onChange={(e) => onChange(Number(e.target.value))}
			/>
		</div>
	);
}

export default TemperatureInput;
