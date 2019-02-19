import React from 'react';

const PageHeader = () => (
  <header className="container">
    <nav className="flex-row">
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
      <button type="button">Login</button>
    </nav>
  </header>
);

export default PageHeader;
