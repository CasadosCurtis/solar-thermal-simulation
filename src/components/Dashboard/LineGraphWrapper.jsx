import React from "react";
import LineGraphChart from "./LineGraphChart";

export default function LineGraphWrapper({ simulationData }) {
	return (
		<div className="flex flex-col justify-center">
			<div className="flex flex-col h-full w-full text-start border border-gray-200 bg-white rounded-lg shadow-lg ">
				<h1 className="text-2xl text-start px-6 py-3 font-bold">Temperature Graph</h1>
				{/* check for simulation data and eitherdisplay data or no data message */}
				{simulationData && simulationData.length > 0 ? (
					<div className="px-5 pb-5">
						<LineGraphChart data={simulationData} />
					</div>
				) : (
					<div className=" flex flex-col justify-center items-center p-20">
						<p className="text-xl font-bold">No Data to Display</p>
						<p>Please run simulation to see graph</p>
					</div>
				)}
			</div>
		</div>
	);
}
