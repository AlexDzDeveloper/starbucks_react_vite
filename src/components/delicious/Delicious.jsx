import './delicious.scss';
import Caffee from './../../images/delecious/caffee2.png';
import Cooking from './../../images/delecious/cooking.png';
// import video from './../../videos/cooking.mp4';
import video2 from './../../videos/cooking1.mp4';
import wave from './../../images/wave1.png';


function Delicious() {
	return (
		<div className='cooking'>
			<div className="container">
				<div className="cooking__row">
					<div className="cooking__img">
						<img src={Caffee} alt="Caffee" />
						<div className="badge"></div>
						<div className="cooking__lines">
							<img src={wave} alt="wave" id='line1'/>
							<img src={wave} alt="wave" id='line2'/>
							<img src={wave} alt="wave" id='line3'/>
						</div>
					</div>
					<div className="cooking__text">
						<div className="header">We make <span>delicious</span></div>
						<div className="descr">Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</div>
						<div className="cooking__video">
							<video src={video2}></video>
							<button className='btn btn-active'>Cooking Process</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Delicious;