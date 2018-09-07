import React from 'react';
import { Link } from 'react-router-dom';

const ActorLinks = (props) => {
    return (
        <nav>
            <ul className="vertical medium-horizontal menu items">
                <li>
                    <Link to={`${props.match.url}/HF`}>Harrison Ford</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/MH`}>Mark Hamill</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/CF`}>Carrie Fisher</Link>
                </li>
				<li>
                    <Link to={`${props.match.url}/HC`}>Hayden Christensen</Link>
                </li>
				<li>
                    <Link to={`${props.match.url}/EM`}>Ewan McGregor</Link>
                </li>
				<li>
                    <Link to={`${props.match.url}/NP`}>Natalie Portman</Link>
                </li>
			</ul>
        </nav>
		
    );
}
 
export default ActorLinks;