import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={({ isActive }) => isActive ? 'nav-active' : ''} children="Lazypage1" />
            </li>
            <li>
              <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''} children="Lazypage2" />
            </li>
            <li>
              <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''} children="Lazypage3" />
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />} />
          <Route path="/lazy2" element={<LazyPage2 />} />
          <Route path="/lazy3" element={<LazyPage3 />} />
          <Route path="/*" element={<LazyPage1 />} />
        </Routes>
      </div>
    </Router>
  );
}