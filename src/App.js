// packages
import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import 'aframe-extras';

// assets
import cyberSexInstrumental from './assets/audio/DojaCat_CyberSex_Instrumental.mp3';
import prettyAudio from './assets/audio/prettybutnotconsideredvaluable.mp3';
import skyImage from './assets/images/sky/equirectangularpinkblue.jpg';
import popupImage from './assets/images/popups/popup-edit-mosaic-ver.jpg';
import keyboardModel from './assets/models/keyboard.obj';
import chatImage from './assets/images/popups/chat.png';

// children
import Popup from './popup.js';

class App extends React.Component {

	render () {
		const assets = [
			<audio id="song" src={cyberSexInstrumental} preload={"auto"}></audio>,
			<audio id="pretty-audio" src={prettyAudio} preload={"auto"}></audio>,
			<img id="sky-image" src={skyImage} alt="pink grid"/>,
			<img id="popup-image" src={popupImage} alt={"Hey girl! Let's hang out!"}/>,
			<img id="chat-image" src={chatImage} alt={"What are you doing today?"}/>,
			<a-asset-item id="keyboard" src={keyboardModel}></a-asset-item>,
		]

		// setting
		const camera = <a-camera position="0 0 0" rotation="0 0 0">
			<a-cursor></a-cursor>                       
		</a-camera>
		const lighting = <Entity
			id={"light1"}
			light={{type: 'point'}}
		/>;
		const music = <a-sound
			src="#song"
			autoplay="true"
			loop="true"
			volume="0.4"
		></a-sound>
		const sky = <a-sky
			src="#sky-image"
			rotation="0 -90 0"
		></a-sky>;

		// objects
		const keyboard = <Entity
			obj-model={{
				obj: "#keyboard"
			}}
			position={{
				x: 0,
				y: 0,
				z: -10
			}}
			animation={{
				property: "rotation",
				dur: 10000,
				to: "360 360 360",
				loop: true,
				easing: "linear"
			}}
		/>;
		const chatBubble = <a-image
			id={"chat-bubble"}
			src={"#chat-image"}
			side={"double"}
			position={"10, 5, -10"}
			width="43"
			height="10"
			scale={"0.5 0.5 0.5"}
			sound={"src: #pretty-audio; volume: 20; autoplay: false; on: click; poolSize: 2"}
		></a-image>
		
		return (
			<div className="universal-wrapper">
				<Scene loading-screen={"dotsColor: hotpink; backgroundColor: white"}>
					{assets}

					{camera}
					{lighting}
					{music}
					{sky}

					<Popup/>
					{keyboard}
					{chatBubble}
				</Scene>
			</div>
		);
	}
}

export default App;