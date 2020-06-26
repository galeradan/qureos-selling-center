import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-4 nav-custom ">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <NavLink to="/products" activeClassName="">
            <span className="font-semibold text-xl tracking-tight">
              Seller Center
            </span>
          </NavLink>
        </div>
        <div className="w-full block flex-grow lg:text-right lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow">
            <NavLink
              activeClassName="active"
              to="/products"
              exact
              className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-dark mr-4"
            >
              Products
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/products/manage"
              className="block mt-4 lg:inline-block lg:mt-0 text-dark-200 hover:text-dark mr-4"
            >
              {' '}
              Manage
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavBar;
