import { LineChart, Line, XAxis, YAxis, Label, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function LineGraphChart({ data }) {
	return (
		<ResponsiveContainer
			width="100%"
			height="50%"
			minHeight={384}
			className="flex w-full h-96 border border-gray-200 bg-white rounded-lg  justify-center items-center"
		>
			<LineChart
				data={data}
				margin={{
					top: 20,
					right: 20,
					left: 20,
					bottom: 20,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="time" minTickGap={10}>
					<Label value="Time [min]" offset={0} position="bottom" />
				</XAxis>
				<YAxis tickCount={10}>
					<Label value="Temperature [°C]" minTickGap={1} offset={10} position="insideLeft" angle={-90} />
				</YAxis>
				<Tooltip />
				<Legend verticalAlign="top" />
				<Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 5 }} isAnimationActive={false} />
				<Line type="monotone" dataKey="target" stroke="red" strokeDasharray="3 3" dot={false} isAnimationActive={false} />
			</LineChart>
		</ResponsiveContainer>
	);
}
