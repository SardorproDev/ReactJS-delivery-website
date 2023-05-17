import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header-inner df ai-center jc-between">
						<div className="header-logo__box df ai-center jc-between">
							<div className="header-logo mr60">
								<Link to="/">
									<img src="images/logo.svg" alt="" />
								</Link>
							</div>

							<div className="header-search pr">
								<img className="search-icon pa" src="images/seacrch-icon.svg" alt="" />
									<input type="text" placeholder="Найти ресторан или блюдо" />
										<button className="btn">Поиск</button>
									</div>

									<div className="header-location ml40">
										<div className="btn df ai-center">
											<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M5.21251 12.0625H4.15751C4.07462 12.0625 3.99514 12.0954 3.93653 12.154C3.87793 12.2126 3.84501 12.2921 3.84501 12.375C3.84501 12.4579 3.87793 12.5374 3.93653 12.596C3.99514 12.6546 4.07462 12.6875 4.15751 12.6875H7.8425C7.92538 12.6875 8.00487 12.6546 8.06348 12.596C8.12208 12.5374 8.155 12.4579 8.155 12.375C8.155 12.2921 8.12208 12.2126 8.06348 12.154C8.00487 12.0954 7.92538 12.0625 7.8425 12.0625H6.78751C8.03751 10.855 10.815 7.905 10.815 5.74C10.815 2.955 8.65501 0.6875 6.00001 0.6875C3.34501 0.6875 1.18501 2.955 1.18501 5.75C1.18501 7.905 3.97001 10.855 5.21251 12.0625ZM6.00001 1.3125C8.31001 1.3125 10.19 3.3125 10.19 5.74C10.19 7.8775 6.87251 11.13 6.00001 11.95C5.12751 11.13 1.81001 7.8775 1.81001 5.75C1.81001 3.3 3.69001 1.3125 6.00001 1.3125Z"
													fill="white" />
												<path
													d="M8.155 5.45999C8.155 5.03377 8.02861 4.61713 7.79182 4.26274C7.55502 3.90835 7.21846 3.63214 6.82469 3.46903C6.43091 3.30593 5.99761 3.26325 5.57958 3.3464C5.16155 3.42955 4.77757 3.6348 4.47619 3.93618C4.1748 4.23756 3.96956 4.62154 3.88641 5.03957C3.80326 5.4576 3.84593 5.8909 4.00904 6.28468C4.17215 6.67845 4.44836 7.01502 4.80275 7.25181C5.15714 7.48861 5.57378 7.61499 6 7.61499C6.57134 7.61433 7.11909 7.38708 7.52309 6.98308C7.92708 6.57908 8.15434 6.03133 8.155 5.45999ZM4.47 5.45999C4.47198 5.15782 4.56339 4.863 4.7327 4.61271C4.90202 4.36242 5.14165 4.16788 5.42139 4.05361C5.70113 3.93934 6.00844 3.91046 6.30457 3.97062C6.6007 4.03078 6.87239 4.17728 7.08536 4.39165C7.29834 4.60602 7.44306 4.87865 7.50129 5.17516C7.55952 5.47168 7.52865 5.7788 7.41256 6.05779C7.29647 6.33677 7.10036 6.57514 6.84898 6.74282C6.59759 6.9105 6.30218 6.99999 6 6.99999C5.79833 6.99967 5.5987 6.95954 5.41257 6.88191C5.22644 6.80428 5.05746 6.69067 4.91532 6.5476C4.77318 6.40453 4.66068 6.23482 4.58426 6.04818C4.50784 5.86155 4.46901 5.66166 4.47 5.45999Z"
													fill="white" />
												<path
													d="M10.66 9.75C10.5934 9.70722 10.5131 9.6913 10.4352 9.70544C10.3574 9.71959 10.2878 9.76275 10.2405 9.82621C10.1932 9.88968 10.1718 9.96871 10.1805 10.0474C10.1892 10.126 10.2275 10.1984 10.2875 10.25C10.74 10.585 11.2875 11.14 11.2875 11.8725C11.2875 13.3975 8.87 14.6875 6.0075 14.6875C3.145 14.6875 0.720004 13.3975 0.720004 11.8725C0.720004 11.14 1.26 10.585 1.72 10.25C1.78004 10.1984 1.81829 10.126 1.82701 10.0474C1.83574 9.96871 1.8143 9.88968 1.76702 9.82621C1.71974 9.76275 1.65014 9.71959 1.57228 9.70544C1.49442 9.6913 1.41408 9.70722 1.3475 9.75C0.532504 10.3525 0.0975037 11.0875 0.0975037 11.875C0.0975037 13.805 2.69 15.315 6.0025 15.315C9.315 15.315 11.9075 13.815 11.9075 11.875C11.905 11.085 11.475 10.35 10.66 9.75Z"
													fill="white" />
											</svg>
											<span className="ml10 fw400 fs14">Укажите адрес <span
												className="media-hide__text-location">доставки</span></span>
										</div>
									</div>
							</div>

							<div className="df ai-center">
								<div className="header-language mr40 pr">
									<div className="default-lagnuage tac">
										<img className="global-icon" src="images/global-icon.svg" alt="" />
											<p className="fs14 fw400 media-hide__text">Русский</p>
									</div>
									<div className="header-language__box dn pa">
										<ul>
											<li className="fs14 fw400 df ai-center jc-between">
												Русский
												<img src="images/check.svg" alt="" />
											</li>
											<li className="fs14 fw400 df ai-center jc-between">English</li>
											<li className="fs14 fw400 df ai-center jc-between">Français</li>
											<li className="fs14 fw400 df ai-center jc-between">қазақ</li>
										</ul>
									</div>
								</div>

								<div className="header-contact">
									<a className="btn" href="#">Войти</a>
								</div>
							</div>
						</div>
					</div>

					<div className="menu">
						<div className="container">
							<div className="menu-icons df ai-center jc-between">
								<a className="menu-icons__icon tac" href="#">
									<img src="images/home-icon.svg" alt="" />
										<span className="fw600 fs10 db c-white mt10">Главная</span>
								</a>
								<a className="menu-icons__icon tac" href="#">
									<img src="images/restauran-icon.svg" alt="" />
										<span className="fw600 fs10 db c-white mt10">Рестораны</span>
								</a>
								<a className="menu-icons__icon tac" href="#">
									<img src="images/cart-icon.svg" alt="" />
										<span className="fw600 fs10 db c-white mt10">Корзина</span>
								</a>
								<a className="menu-icons__icon tac" href="#">
									<img src="images/user-icon.svg" alt="" />
										<span className="fw600 fs10 db c-white mt10">Профиль</span>
								</a>
							</div>
						</div>
					</div>
			</header>
		</>
	)
}

export default Header