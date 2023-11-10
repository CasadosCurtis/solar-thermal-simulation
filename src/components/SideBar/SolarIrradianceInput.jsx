import React from "react";

export default function SolarIrradianceInput({ value, onChange }) {
	return (
		<div className="text-start">
			<label htmlFor="solarIrradiance" className=" font-bold">
				Average Solar Irradiation [W/m^2]
			</label>
			<input
				type="text"
				id="solarIrradiance"
				value={value}
				placeholder="10"
				className=" w-full bg-slate-100 rounded-md  border-0 px-3 py-1.5 text-gray-900 "
				onChange={(e) => onChange(Number(e.target.value))}
			/>
		</div>
	);
}
