import './delicious.scss';
import Caffee from './../../images/delecious/caffee2.png';
import Cooking from './../../images/delecious/cooking.png';
// import video from './../../videos/cooking.mp4';
import video2 from './../../videos/cooking1.mp4';
import wave from './../../images/wave1.png';
import play from './../../images/delecious/play.svg';


function Delicious() {
	return (
		<div className='cooking'>
			<div className="container">
				<div className="cooking__row">
					<div className="cooking__img">
						<img src={Caffee} alt="Caffee" />
						<div className="badge"></div>
						<div className="cooking__lines">
							{/* <img src={wave} alt="wave" id='line1'/> */}
								<svg id="firstLine" width="966" height="321" viewBox="0 0 966 321" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1146.61 320.143L965.27 294.937C916.636 288.177 879.356 248.324 875.853 199.348L874.758 184.038C870.999 131.481 828.528 90.0405 775.895 87.5723L747.157 86.2246C722.808 85.0828 699.634 75.4248 681.681 58.937L648.108 28.1035C615.172 -2.14502 566.586 -7.95217 527.448 13.6819L358.398 107.127C321.254 127.66 275.36 123.561 242.442 96.773L204.133 65.598C170.827 38.4947 124.289 34.6471 86.9841 55.9126L0.346696 105.301" stroke="#D9D9D9" />
								</svg>
								<svg id="secondLine" width="966" height="321" viewBox="0 0 966 321" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1146.61 320.143L965.27 294.937C916.636 288.177 879.356 248.324 875.853 199.348L874.758 184.038C870.999 131.481 828.528 90.0405 775.895 87.5723L747.157 86.2246C722.808 85.0828 699.634 75.4248 681.681 58.937L648.108 28.1035C615.172 -2.14502 566.586 -7.95217 527.448 13.6819L358.398 107.127C321.254 127.66 275.36 123.561 242.442 96.773L204.133 65.598C170.827 38.4947 124.289 34.6471 86.9841 55.9126L0.346696 105.301" stroke="#D9D9D9" />
								</svg>
								<svg id="thirdthLine" width="966" height="321" viewBox="0 0 966 321" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1146.61 320.143L965.27 294.937C916.636 288.177 879.356 248.324 875.853 199.348L874.758 184.038C870.999 131.481 828.528 90.0405 775.895 87.5723L747.157 86.2246C722.808 85.0828 699.634 75.4248 681.681 58.937L648.108 28.1035C615.172 -2.14502 566.586 -7.95217 527.448 13.6819L358.398 107.127C321.254 127.66 275.36 123.561 242.442 96.773L204.133 65.598C170.827 38.4947 124.289 34.6471 86.9841 55.9126L0.346696 105.301" stroke="#D9D9D9" />
								</svg>
							<div>
							</div>
							{/* <img src={wave} alt="wave" id='line2'/> */}
							{/* <img src={wave} alt="wave" id='line3'/> */}
						</div>
					</div>
					<div className="cooking__text">
						<div className="header">We make <span>delicious</span></div>
						<div className="descr">Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market</div>
						<div className="cooking__video">
							<video src={video2}></video>
							<button className='btn btn-active'>
								{/* <img src={play} alt="play video" /> */}
								<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  								<path d="M17.3594 10.6055C17.6839 10.7995 17.6839 11.2688 17.3594 11.4629L2.25683 20.4941C1.92359 20.6934 1.50008 20.4537 1.5 20.0654L1.5 2.00293C1.50008 1.61468 1.92359 1.37495 2.25684 1.57422L17.3594 10.6055Z" stroke="white" strokeWidth="3" strokeMiterlimit="1.55572" />
								</svg>
  								Cooking Process
  							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Delicious;