import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';

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
        const shouldRender = this.state.showPopup
            ? <a-image
                id={"first-popup"}
                src={"#popup-image"}
                position={"0, 0, -2"}
                width="30"
                height="13"
                scale={"0.1 0.1 0.1"}
                onClick={this.dismissPopup}
            ></a-image>
            : null;

		return (
			shouldRender
		);
	}
}

export default Popup;