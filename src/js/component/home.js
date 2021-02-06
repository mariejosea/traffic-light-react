import React, { useState } from "react";

//create your first component
export function Home() {
	// Using Hook, light=variable, setLight para cambiar el estado predeterminado de la variable.
	const [light, setLight] = useState({
		danger: "disable",
		warning: "disable",
		success: "disable" //no definida
	});

	return (
		<div className="text-center mt-5">
			<div id="TrafficLight" className="container">
				<div
					className={`btn btn-danger btn-circle ${light.danger}`}
					onClick={() =>
						setLight({
							danger: "active",
							warning: "disable",
							success: "disable"
						})
					}
				/>
				<div
					className={`btn btn-warning btn-circle ${light.warning}`}
					onClick={() =>
						setLight({
							danger: "disable",
							warning: "active",
							success: "disable"
						})
					}
				/>
				<div
					className={`btn btn-success btn-circle ${light.success}`}
					onClick={() =>
						setLight({
							danger: "disable",
							warning: "disable",
							success: "active"
						})
					}
				/>
			</div>
			<div id="TrafficBase" />
		</div>
	);
}
