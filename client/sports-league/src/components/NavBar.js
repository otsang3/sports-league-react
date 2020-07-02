import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {

  return(
    <div className="navBar">
      <ul className="navBarList">
        <Link className="navBarLink" to="/">
          <li className="navBarInitialListItem">HomePage</li>
        </Link>
        <Link className="navBarLink" to="/table">
          <li className="navBarListItem">Table</li>
        </Link>
        <Link className="navBarLink" to="/fixtures">
          <li className="navBarListItem">Fixtures</li>
        </Link>
        <Link className="navBarLink" to="/results">
          <li className="navBarListItem">Results</li>
        </Link>
        <Link className="navBarLink" to="/teams">
          <li className="navBarListItem">Teams</li>
        </Link>
        <Link className="navBarLink" to="/players">
          <li className="navBarListItem">Players</li>
        </Link>
      </ul>
    </div>

  )
}

export default NavBar;
