import "./Header.css";

function Header() {
	return (
		<div id="head">
			<img
				style={{
					height: "85%",
					marginTop: "0.5%",
				}}
				src={
					"https://media.ngroup.be/IMAGE/IMAGE-S1-00007/7809-dessin-disney.jpg"
				}
				alt="head"
			/>
		</div>
	);
}

export default Header;
