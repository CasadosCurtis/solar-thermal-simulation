import React from "react";
import StatsCards from "./StatsCards";
import LineGraphWrapper from "./LineGraphWrapper";

export default function Dashboard({ simulationData }) {
	return (
		<div className="flex-1 p-10 ml-80 h-full max-w-7xl ">
			<LineGraphWrapper simulationData={simulationData} />
			<StatsCards stats={simulationData} />
		</div>
	);
}
