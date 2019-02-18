import React from 'react';

const PageHeader = () => (
  <header>
    <nav className="container">
      <div className="navbar">
        <a href="#" className="brand">
          Foo
        </a>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">API Reference</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <button type="submit">Login</button>
      </div>
    </nav>
  </header>
);

export default PageHeader;
