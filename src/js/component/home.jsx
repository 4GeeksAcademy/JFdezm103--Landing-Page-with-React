import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Grid from "./Grid";



//create your first component

let dataCards=[
	{
	img:"https://2.bp.blogspot.com/-RzuRQgkwQmY/Uw-RoLL-1VI/AAAAAAABjG0/gZm_EBtjPKI/s1600/pintores-de-paisajes-famosos+(3).jpg",
	title: "Card title",
	text:"Lorem ipsum dolor sit amet consectetur adipiscing elit, orci dis sodales montes condimentum pulvinar pellentesque volutpat, mollis auctor sapien placerat aliquam nullam dignissim, platea lectus odio porttitor leo at.",
},
	{
	img:"https://2.bp.blogspot.com/-RzuRQgkwQmY/Uw-RoLL-1VI/AAAAAAABjG0/gZm_EBtjPKI/s1600/pintores-de-paisajes-famosos+(3).jpg",
	title: "Card title",
	text:"Volutpat platea phasellus tempus arcu faucibus cras gravida venenatis hendrerit aptent, sollicitudin aliquet blandit vivamus vehicula dictumst fusce porttitor at mauris, mattis suspendisse rhoncus sodales sed dictum vulputate tellus lobortis.",
},
	{
	img:"https://2.bp.blogspot.com/-RzuRQgkwQmY/Uw-RoLL-1VI/AAAAAAABjG0/gZm_EBtjPKI/s1600/pintores-de-paisajes-famosos+(3).jpg",
	title: "Card title",
	text:"Metus vivamus ligula est eleifend scelerisque mauris pulvinar sodales nec, phasellus convallis augue quisque risus venenatis inceptos pellentesque nam, cursus pharetra ante pretium cum a curae leo nascetur ultricies nostra hac.",
	},
	{
	img:"https://2.bp.blogspot.com/-RzuRQgkwQmY/Uw-RoLL-1VI/AAAAAAABjG0/gZm_EBtjPKI/s1600/pintores-de-paisajes-famosos+(3).jpg",
	title: "Card title",
	text:"Facilisi mus urna senectus consequat aliquam sed augue molestie auctor, hendrerit curae non ad gravida magnis felis. Massa nunc mus at ultricies molestie class, cum consequat placerat accumsan blandit, platea viverra auctor commodo dui.",
	}]


const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container-fluid">
			<Jumbotron />
			<Grid />
			{/* <div className="container px-4 text-center">
				<div className="row">
					{dataCards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" style={{height:"500px",width:"325px"}} key={index}>
							<Card dataCards={item} />
						</div>
					))}
				</div>
			</div> */}
			</div>
			<Footer />
		</div>
	);
};



export default Home;
