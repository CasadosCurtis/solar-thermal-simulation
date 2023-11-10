import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";

export default function Simulator() {
	const [temperatures, setTemperatures] = useState({});

	return (
		<div className="flex-1 h-screen">
			<SideBar onStart={setTemperatures} />
			<Dashboard simulationData={temperatures}></Dashboard>
		</div>
	);
}
