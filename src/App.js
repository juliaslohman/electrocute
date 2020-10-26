import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

// assets
import cyberSexInstrumental from './assets/DojaCat_CyberSex_Instrumental.mp3';
import popupImage from './assets/popup-edit-mosaic-ver.jpg';

class App extends React.Component {
	constructor () {
		
	}

	dismissPopup = () => {
		console.log("lol");
	}

	render () {
		const assets = [
			<audio id="song" src={cyberSexInstrumental} preload={"auto"}></audio>,
			<img id="popup-image" src={popupImage} alt={"Hey girl! Let's hang out!"}/>
		]

		// setting
		const camera = <a-camera position="0 0 0" rotation="0 0 0">
				<a-cursor></a-cursor>                       
			</a-camera>
		const music = <Entity
			id={"music"}
			sound={"#song"}/>;
		const lighting = <Entity id={"light1"} light={{type: 'point'}}/>;

		// objects
		const popup = <a-image
			id={"popup"}
			src={"#popup-image"}
			position={"0, 0, -2"}
			width="30"
			height="13"
			scale={"0.1 0.1 0.1"}
			sound={"src: #song; on: click"}
		></a-image>;
		const box = <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -10}}/>;

		return (
			<div className="universal-wrapper">
				<Scene>
					{assets}

					{camera}
					{music}
					{lighting}

					{popup}
					{box}
				</Scene>
			</div>
		);
	}
}

export default App;