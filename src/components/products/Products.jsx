import './../products/products.scss';

const Products = () => {
	return (
		<div className="products">
			<div className="container">
				<div className="products__row">
					<div className="products__text">
						<div className="header">New Our <span>Products</span></div>
						<div className="descr">Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</div>
					</div>
					<div className="products__slider">
						<div className="products__slider-row">
							<div className="products__cards"></div>
							<div className="products__btn"></div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Products;