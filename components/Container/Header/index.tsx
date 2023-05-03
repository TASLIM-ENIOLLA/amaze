import { useState } from "react"
import { routes, RouteProps } from './__props/routes'

export default function Header () {
	const [openSideBar, toggleSideBar] = useState(false)

	return (
		<section className = 'bg-white py-3 border-bottom'>
			<div className="container">
				<div className="row align-items-center justify-content-between">
					<div className="col-auto">
						<a href="/">
							<img src = '/images/amaze.png' width="50" />
						</a>
					</div>
					<div className="d-md-none col-auto">
						<button
							style={menuBtn}
							onClick={() => toggleSideBar((n) => !n)}
							className="bi-border-width text-chocolate bg-transparent border-0"
						></button>
					</div>
					<div className="d-none d-md-block col-auto">{
						routes.map(({name, href}: RouteProps, index) => (
							<a href={href} className="bold mx-4 d-inline-block text-chocolate text-capitalize" key={index}>{name}</a>
						))
					}</div>
				</div>
			</div>
			{(
				(openSideBar)
				? (
					<div className="container-fluid position-fixed" style={sideBar}>
						<div className="row">
							<div className="col vh-100" onClick={() => toggleSideBar((n) => !n)}></div>
							<div className="animated slideInRight col-12 py-3 vh-100 shadow bg-white" style={sideBarNav}>
								<div className="row flex-column px-2">
									<div className="col-auto py-4">
										<a href="">
											<img src="/images/amaze.png" width="60" />
										</a>
									</div>
									<div className="col">{
										routes.map(({name, href}: RouteProps, index) => (
											<a href={href} className="py-3 my-2 bold d-block text-chocolate text-capitalize" key={index}>{name}</a>
										))
									}</div>
								</div>
							</div>
						</div>
					</div>
				)
				: undefined
			)}
		</section>
	)
}

const menuBtn: {fontSize: string} = {
	fontSize: '18px'
}

const sideBar = {
	top: 0,
	right: 0,
	zIndex: 15,
	background: 'rgba(0,0,0,.5)',
	backdropFilter: 'blur(3px)'
}

const sideBarNav = {
	maxWidth: '260px'
}