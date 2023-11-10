import React from "react";

export default function StatsCards({ stats: data }) {
	// function to format seconds into days, hours, minutes, and seconds
	function formatSeconds(seconds) {
		let days = Math.floor(seconds / 86400);
		let hours = Math.floor((seconds % 86400) / 3600);
		let minutes = Math.floor((seconds % 3600) / 60);
		let sec = seconds % 60;
		return days + " days " + hours + " hr " + minutes + " min " + sec + " sec";
	}

	// if no stats data is passed in, display a no data message
	if (!data || data.length === 0 || Object.keys(data).length === 0) {
		return (
			<div className="flex flex-col h-64 text-start w-full mt-12 border border-gray-200 bg-white rounded-lg shadow-lg ">
				<h1 className="text-2xl text-start px-6 py-3 font-bold">System Stats</h1>
				<div className=" flex flex-col justify-center items-center">
					<p className="text-xl font-bold">No Data to Display</p>
					<p>Please run simulation to see stats</p>
				</div>
			</div>
		);
	}

	// if data is passed in, display the stats data
	return (
		<div className="flex flex-col text-start w-full mt-12 pb-6 border border-gray-200 bg-white rounded-lg shadow-lg ">
			<h1 className="text-2xl text-start px-6 py-3 font-bold">System Stats</h1>
			<div className="flex flex-row justify-center flex-wrap">
				{data.stats.map((stat) => {
					return (
						<div key={stat.name} className="flex flex-col border border-gray-200 bg-white rounded-lg w-64 h-36 p-4 m-2 space-y-2">
							<h1 className="text-xl font-medium">{stat.name}</h1>
							<p className=" text-2xl font-bold">{stat.name.includes("Time") ? formatSeconds(stat.value) : stat.value + " " + stat.units}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
