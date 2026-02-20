import './promo.scss';
import main from './../../images/promo.png';
import heart from './../../images/proffer/heart.png';
import rocket from './../../images/proffer/rocket.png';
import money from './../../images/proffer/money.png';
import badge from './../../images/stars/star_1.png';

function Promo() {
	return (<>
		<div className="promo">
			<div className="container">
				<div className="promo__block-top">
					<div className="promo__prev">
						<h2 className="header">New Cafe <br/>by <span>StarBucks</span></h2>
						<p className="descr">Have time to buy the most harmonious drinks in the <br/> new Starbucks coffee and don't forget about the discount!</p>
						<div className="promo__btns">
							<button className="btn btn-active select">Select a coffee </button>
							<button className="btn more">More</button>
						</div>
						<div className="promo__indicators">
							<div className="promo__indicators-block">
								<p className="number">9k</p>
								<span className='descr'>Premium Users</span>
							</div>
							<div className="promo__indicators-block">
								<p className="number">2k</p>
								<span className='descr'>Happy Customer</span>
							</div>
							<div className="promo__indicators-block">
								<p className="number">28</p>
								<span className='descr'>Awards Winning</span>
							</div>
						</div>
					</div>
					<div className="promo__img">
						<div className="promo__img-badge">45%</div>
						<img src={main} alt="promo" />
					</div>
				</div>
				<div className="promo__block-bottom">
					<div className="promo__block-bottom_badge">we have</div>
					<div className="promo__proffer">
						<div className="promo__proffer-img">
							<img src={heart} alt="heart" id='heard'/>
						</div>
						<h3 className="promo__proffer-header subheader">Tasty</h3>
						<p className="promo__proffer-text">We have the most delicious coffee</p>
					</div>
					<div className="promo__proffer">
						<div className="promo__proffer-img">
							<img src={rocket} alt="rocket" id='rocket'/>
						</div>
						<h3 className="promo__proffer-header subheader">Fast</h3>
						<p className="promo__proffer-text">Our cafe will serve you quickly</p>
					</div>
					<div className="promo__proffer">
						<div className="promo__proffer-img">
							<img src={money} alt="money" id='money'/>
						</div>
						<h3 className="promo__proffer-header subheader">Available</h3>
						<p className="promo__proffer-text">Cafe will serveat the most pleasant prices</p>
					</div>
				</div>
			</div>
		</div>
	</>);
}

export default Promo;