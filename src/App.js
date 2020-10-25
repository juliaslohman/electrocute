import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

function App() {
	// setting
	let lighting = <Entity light={{type: 'point'}}/>;
	let rain = <Entity particle-system={{preset: 'snow'}}/>;

	// objects
	let box = <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>;

	return (
		<div className="universal-wrapper">
			<Scene>
				{lighting}
				{rain}
				{box}
			</Scene>
		</div>
	);
}

export default App;