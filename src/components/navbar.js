import React from 'react';
import { NavLink } from 'react-router-dom';

const SiteNavbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      Text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      Text: 'CATEGORIES',
    },
  ];
  return (
    <>
      <nav className="navBar">
        <h1 className="navTitle">Bookstore CMS</h1>
        <ul>
          {links.map((nlink) => (
            // eslint-disable-next-line
            <li key={nlink.id} className={'li' + nlink.id.toString()}>
              <NavLink to={nlink.path}>{nlink.Text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SiteNavbar;
