import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';

// assets
import cyberSexInstrumental from './assets/DojaCat_CyberSex_Instrumental.mp3';
import popupImage from './assets/popup-edit-mosaic-ver.jpg';

class Popup extends React.Component {
	constructor (props) {
        super(props);
        
        this.state = {
            showPopup: true,
        }
	}

	dismissPopup = () => {
		this.setState({showPopup: false});
	}

	render () {
		// const assets = [
		// 	<audio id="song" src={cyberSexInstrumental} preload={"auto"}></audio>,
		// 	<img id="popup-image" src={popupImage} alt={"Hey girl! Let's hang out!"}/>
        // ]

        const shouldRender = this.state.showPopup
            ? <a-image
                id={"popup"}
                src={"#popup-image"}
                position={"0, 0, -2"}
                width="30"
                height="13"
                scale={"0.1 0.1 0.1"}
                sound={"src: #song; on: click"}
                onClick={this.dismissPopup}
            ></a-image>
            : null;

		return (
			shouldRender
		);
	}
}

export default Popup;