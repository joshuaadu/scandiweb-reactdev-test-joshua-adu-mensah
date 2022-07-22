import { Component } from "react";
import styles from "../../styles/Gallery.module.scss";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = { imageInViewIndex: 0 };
	}

	changeImageHandler(index) {
		this.setState({ imageInViewIndex: index });
		console.log("Image changed");
	}
	render() {
		return (
			<section className={styles.gallery}>
				<div className={styles["gallery-list"]}>
					{this.props.gallery.map((image, index) => (
						<img
							src={image}
							alt={`${this.props.name} ${index}`}
							onClick={this.changeImageHandler.bind(this, index)}
						/>
					))}
				</div>
				<div className={styles["banner-image"]}>
					<img
						src={this.props.gallery[this.state.imageInViewIndex]}
						alt={`${this.props.name} ${this.state.imageInViewIndex}`}
					/>
				</div>
			</section>
		);
	}
}

export default Gallery;
