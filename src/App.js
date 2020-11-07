// packages
import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import 'aframe-extras';
import 'aframe-text-geometry-component';

// assets
import cyberSexInstrumental from './assets/audio/DojaCat_CyberSex_Instrumental.mp3';
import adAudio from './assets/audio/pixelchix.mp3';
import prettyAudio from './assets/audio/prettybutnotconsideredvaluable.mp3';
import skyImage from './assets/images/sky/keyboardbg.png';
import popupImage from './assets/images/popups/popup-edit-mosaic-ver.jpg';
import keyboardModel from './assets/models/keyboard.obj';
import searchModel from './assets/models/MagnifyingGlass.obj';
import lipstickModel from './assets/models/lipstick.obj';
import chatImage1 from './assets/images/popups/chat1.png';
import chatImage2 from './assets/images/popups/chat2.png';
import scrollingText from './assets/scrollingText.js';

// children
import Popup from './popup.js';

// const
const prettyAudioString = "src: #pretty-audio; volume: 20; autoplay: false; on: click; poolSize: 1";

class App extends React.Component {

	render () {
		const assets = [
			<audio id="song" src={cyberSexInstrumental} preload={"auto"}></audio>,
			<audio id="ad-audio" src={adAudio} preload={"auto"}></audio>,
			<audio id="pretty-audio" src={prettyAudio} preload={"auto"}></audio>,
			<img id="sky-image" src={skyImage} alt={"pink grid"}/>,
			<img id="popup-image" src={popupImage} alt={"Hey girl! Let's hang out!"}/>,
			<img id="chat-image-1" src={chatImage1} alt={"What are you doing today?"}/>,
			<img id="chat-image-2" src={chatImage2} alt={"MADISON: hey, let's go shopping!"}/>,
			<a-asset-item id="keyboard" src={keyboardModel}></a-asset-item>,
			<a-asset-item id="search" src={searchModel}></a-asset-item>,
			<a-asset-item id="lipstick" src={lipstickModel}></a-asset-item>,
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
			volume="0.5"
		></a-sound>
		const adVoice = <a-sound
			src="#ad-audio"
			autoplay="true"
			loop="true"
			volume="0.15"
		></a-sound>
		const sky = <a-sky
			src="#sky-image"
			rotation="0 -90 0"
		></a-sky>;
		// const ocean = <a-ocean
		// 	color="fuchsia"
		// 	width="100"
		// 	depth="100"
		// 	density="15"
		// 	speed="1"
		// 	position="0 -20 -10"
		// 	light="color: '#FF69B4'; intensity: 1.8"
		// ></a-ocean>;

		// objects
		const keyboard = <Entity
			obj-model={{
				obj: "#keyboard"
			}}
			position={{
				x: 1,
				y: -1,
				z: -10
			}}
			animation={{
				property: "rotation",
				dur: 10000,
				to: "360 360 360",
				loop: true,
				easing: "linear"
			}}
			sound={
				prettyAudioString
			}
		/>;
		const search = <Entity
			obj-model={{
				obj: "#search"
			}}
			scale={{
				x: 0.4,
				y: 0.4,
				z: 0.4,
			}}
			position={{
				x: -10,
				y: 0,
				z: -15,
			}}
			animation={{
				property: "rotation",
				dir: "alternate",
				dur: 10000,
				to: "10 360 40",
				loop: true,
				easing: "linear"
			}}
			sound={
				prettyAudioString
			}
		/>;
		const lipstick = <Entity
			obj-model={{
				obj: "#lipstick"
			}}
			scale={{
				x: 0.4,
				y: 0.4,
				z: 0.4,
			}}
			position={{
				x: 2,
				y: 2,
				z: -4,
			}}
			animation={{
				property: "rotation",
				dir: "alternate",
				dur: 8000,
				to: "180 360 90",
				loop: true,
				easing: "linear"
			}}
			sound={
				prettyAudioString
			}
		/>;
		const chatBubble1 = <a-image
			id={"chat-bubble-1"}
			src={"#chat-image-1"}
			side={"double"}
			position={"15, 5, -10"}
			width="43"
			height="10"
			scale={"0.2 0.2 0.2"}
		></a-image>
		const chatBubble2 = <a-image
			id={"chat-bubble-2"}
			src={"#chat-image-2"}
			side={"double"}
			position={"-5, -3, -5"}
			rotation={"0 270 0"}
			width="43"
			height="10"
			scale={"0.2 0.2 0.2"}
		></a-image>
		const longText = <Entity
			text-geometry={
				`value: ${scrollingText}`
			}
			postion={{
				x: 10,
				y: -20,
				z: -25,
			}}
			material={{
				color: 'hotpink',
			}}
			animation={{
				property: "position",
				dir: "alternate",
				dur: 100000,
				from: "10 -20 -25",
				to: "10 60 -25",
				loop: true,
				easing: "linear",
				delay: 2000,
			}}
		/>
		const disclaimerText = <Entity
			text-geometry={`
				value: Ask your parents' permission before going online
			`}
			postion={{
				x: -10,
				y: 0,
				z: -15,
			}}
			rotation={{
				x: 0,
				y: 60,
				z: 0,
			}}
			material={{
				color: 'black',
			}}
			animation={{  // for some reason position for text-geometry components only applies with this hack
				property: "position",
				from: "-10 0 -15",
				to: "-10 0 -15",
				loop: true,
			}}
		/>

		return (
			<div className="universal-wrapper">
				<Scene loading-screen={"dotsColor: white; backgroundColor: hotpink"}>
					{assets}

					{camera}
					{lighting}
					{music}
					{adVoice}
					{sky}
					{/* {ocean} */}

					<Popup/>
					{keyboard}
					{search}
					{lipstick}
					{chatBubble1}
					{chatBubble2}
					{longText}
					{disclaimerText}
				</Scene>
			</div>
		);
	}
}

export default App;