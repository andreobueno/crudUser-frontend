import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
	<aside className="menu-area">
		<nav className="menu">
			{/*refactor to have a class instead of adding all of
			them manually---- Create component Nav item and import in here */}
			<Link to="/">
				<i className="fa fa-home"></i> Home
			</Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Users
            </Link>
		</nav>
	</aside>