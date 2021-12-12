import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from '../routes/routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>loading..</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((element, key) => {
                return (
                  <li key={key}>
                    <NavLink to={element.to} className={({ isActive }) => isActive ? 'nav-active' : ''} children={element.name} />
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            {routes.map((element, key) => {
              return (
                <Route path={element.path} element={<element.Component />} key={key} />
              )
            })}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}