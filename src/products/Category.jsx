import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilterCategory } from '../config/api';
import Loader from '../layouts/Loader';
import CategoryItem from './CategoryItem';
import { Link } from 'react-router-dom';

function Category() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);
	const [show, setShow] = useState(false);
	const [showBox, setShowBox] = useState(false);

	

	useEffect(() => {
		getFilterCategory(name).then(data => {
			setMeals(data.meals);
		})
	}, []);

	return (
		<div className='container'>
			<div className="back-btn__box mb15 dib">
				<Link to="/" className="back-btn fw400 fs16 df ai-center">
					<svg className="mr10" width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 0L0 3L3 6L3.707 5.293L1.914 3.5H14V2.5H1.914L3.707 0.707L3 0Z" fill="#1E1E1E" />
					</svg>
					Домашняя страница
				</Link>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="sorting-bar">
						{/* <div className="sorting-bar__content df ai-center jc-between">
							
							<div className="df jc-between">
								<div className="pr">
									<div className="select-box df ai-center" onClick={() => setShow(!show)}>
										<h4 className="mr5 fs14 fw500 c-white">Доставка: <span className="select-tme media-hide__time">сейчас</span>
										</h4>
										<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 1L7 7L13 1" stroke="white" strokeWidth="0.5" strokeLinecap="round" />
										</svg>
									</div>
									{show ? (
										<div className="select-box__items pa">
											<div className="select-box__items-header btn df">
												<button className="select-box__btn active-btn">Сегодня</button>
												<button className="select-box__btn ml15">Завтра</button>
											</div>
											<div className="select-box__items-info mt15">
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">Сейчас</span>
													<img src="images/check.svg" alt="" />
												</div>
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">14:00</span>
												</div>
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">15:00</span>
												</div>
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">16:00</span>
												</div>
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">17:00</span>
												</div>
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">18:00</span>
												</div>
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">19:00</span>
												</div>
												<div className="select-box__list df ai-center jc-between">
													<span className="fs14 fw400">20:00</span>
												</div>
											</div>
										</div>
									) : null}
								</div>
								<div className="pr">
									<div className="setting-box df ai-center ml10" onClick={() => setShowBox(!showBox)}>
										<h4 className="mr5 fs14 fw500 c-white media-hide__text-setting">Сортировка</h4>
										<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M0.625603 2.7H8.6V3.02C8.6 3.27461 8.70115 3.51879 8.88118 3.69882C9.06122 3.87886 9.3054 3.98 9.56 3.98H10.84C11.0946 3.98 11.3388 3.87886 11.5188 3.69882C11.6989 3.51879 11.8 3.27461 11.8 3.02V2.7H13.2912C13.3761 2.7 13.4575 2.66628 13.5175 2.60627C13.5775 2.54626 13.6112 2.46487 13.6112 2.38C13.6112 2.29513 13.5775 2.21374 13.5175 2.15372C13.4575 2.09371 13.3761 2.06 13.2912 2.06H11.8V1.74C11.8 1.48539 11.6989 1.24121 11.5188 1.06118C11.3388 0.881141 11.0946 0.779999 10.84 0.779999H9.56C9.3054 0.779999 9.06122 0.881141 8.88118 1.06118C8.70115 1.24121 8.6 1.48539 8.6 1.74V2.06H0.625603C0.540734 2.06 0.459341 2.09371 0.399329 2.15372C0.339317 2.21374 0.305603 2.29513 0.305603 2.38C0.305603 2.46487 0.339317 2.54626 0.399329 2.60627C0.459341 2.66628 0.540734 2.7 0.625603 2.7ZM9.24 1.74C9.24 1.65513 9.27372 1.57374 9.33373 1.51372C9.39374 1.45371 9.47513 1.42 9.56 1.42H10.84C10.9249 1.42 11.0063 1.45371 11.0663 1.51372C11.1263 1.57374 11.16 1.65513 11.16 1.74V3.02C11.16 3.10487 11.1263 3.18626 11.0663 3.24627C11.0063 3.30628 10.9249 3.34 10.84 3.34H9.56C9.47513 3.34 9.39374 3.30628 9.33373 3.24627C9.27372 3.18626 9.24 3.10487 9.24 3.02V1.74ZM13.336 12.3H10.52V11.98C10.52 11.7254 10.4189 11.4812 10.2388 11.3012C10.0588 11.1211 9.81461 11.02 9.56 11.02H8.28C8.02539 11.02 7.78122 11.1211 7.60118 11.3012C7.42115 11.4812 7.32 11.7254 7.32 11.98V12.3H0.632003C0.547134 12.3 0.465741 12.3337 0.405729 12.3937C0.345717 12.4537 0.312003 12.5351 0.312003 12.62C0.312003 12.7049 0.345717 12.7863 0.405729 12.8463C0.465741 12.9063 0.547134 12.94 0.632003 12.94H7.32V13.26C7.32 13.5146 7.42115 13.7588 7.60118 13.9388C7.78122 14.1189 8.02539 14.22 8.28 14.22H9.56C9.81461 14.22 10.0588 14.1189 10.2388 13.9388C10.4189 13.7588 10.52 13.5146 10.52 13.26V12.94H13.336C13.4209 12.94 13.5023 12.9063 13.5623 12.8463C13.6223 12.7863 13.656 12.7049 13.656 12.62C13.656 12.5351 13.6223 12.4537 13.5623 12.3937C13.5023 12.3337 13.4209 12.3 13.336 12.3ZM9.88 13.26C9.88 13.3449 9.84629 13.4263 9.78628 13.4863C9.72627 13.5463 9.64487 13.58 9.56 13.58H8.28C8.19513 13.58 8.11374 13.5463 8.05373 13.4863C7.99372 13.4263 7.96 13.3449 7.96 13.26V11.98C7.96 11.8951 7.99372 11.8137 8.05373 11.7537C8.11374 11.6937 8.19513 11.66 8.28 11.66H9.56C9.64487 11.66 9.72627 11.6937 9.78628 11.7537C9.84629 11.8137 9.88 11.8951 9.88 11.98V13.26ZM4.44 9.1H5.72C5.97461 9.1 6.21879 8.99886 6.39883 8.81882C6.57886 8.63879 6.68 8.39461 6.68 8.14V7.82H13.368C13.4529 7.82 13.5343 7.78628 13.5943 7.72627C13.6543 7.66626 13.688 7.58487 13.688 7.5C13.688 7.41513 13.6543 7.33374 13.5943 7.27372C13.5343 7.21371 13.4529 7.18 13.368 7.18H6.68V6.86C6.68 6.60539 6.57886 6.36121 6.39883 6.18118C6.21879 6.00114 5.97461 5.9 5.72 5.9H4.44C4.1854 5.9 3.94122 6.00114 3.76118 6.18118C3.58115 6.36121 3.48 6.60539 3.48 6.86V7.18H0.664003C0.579134 7.18 0.497741 7.21371 0.437729 7.27372C0.377717 7.33374 0.344003 7.41513 0.344003 7.5C0.344003 7.58487 0.377717 7.66626 0.437729 7.72627C0.497741 7.78628 0.579134 7.82 0.664003 7.82H3.48V8.14C3.48 8.39461 3.58115 8.63879 3.76118 8.81882C3.94122 8.99886 4.1854 9.1 4.44 9.1ZM4.12 6.86C4.12 6.77513 4.15372 6.69374 4.21373 6.63372C4.27374 6.57371 4.35513 6.54 4.44 6.54H5.72C5.80487 6.54 5.88627 6.57371 5.94628 6.63372C6.00629 6.69374 6.04 6.77513 6.04 6.86V8.14C6.04 8.22487 6.00629 8.30626 5.94628 8.36627C5.88627 8.42628 5.80487 8.46 5.72 8.46H4.44C4.35513 8.46 4.27374 8.42628 4.21373 8.36627C4.15372 8.30626 4.12 8.22487 4.12 8.14V6.86Z"
												fill="white" />
										</svg>
									</div>
									{showBox ? (
										<div className="setting-box__items pa tal">
											<h4 className="fs14 fw600">Сначала показать</h4>

											<div className="setting-box__item df ai-center mt15">
												<input type="radio" name="radio" id="one" />
												<label className="ml10 fs14 fw400" htmlFor="one">Доверюсь вам</label>
											</div>
											<div className="setting-box__item df ai-center">
												<input type="radio" name="radio" id="two" />
												<label className="ml10 fs14 fw400" htmlFor="two">С высоким рейтингом</label>
											</div>
											<div className="setting-box__item df ai-center">
												<input type="radio" name="radio" id="three" />
												<label className="ml10 fs14 fw400" htmlFor="three">Недорогие</label>
											</div>
											<div className="setting-box__item df ai-center">
												<input type="radio" name="radio" id="four" />
												<label className="ml10 fs14 fw400" htmlFor="four">Дорогие</label>
											</div>
											<div className="setting-box__item df ai-center">
												<input type="radio" name="radio" id="five" />
												<label className="ml10 fs14 fw400" htmlFor="five">Быстрые</label>
											</div>
										</div>
									) : null}
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="row">
				{!meals.length ? <Loader /> : meals.map(meal => (
					<CategoryItem key={meal.idMeal} {...meal} />
				))}
			</div>
		</div>
	)
}

export default Category