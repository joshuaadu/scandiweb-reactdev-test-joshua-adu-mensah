import { Component } from "react";

class Sizes extends Component {
	render() {
		return (
			<div>
				<p>Size:</p>
				{this.props.sizes.map((size) => (
					<span>{size}</span>
				))}
			</div>
		);
	}
}

export default Sizes;
