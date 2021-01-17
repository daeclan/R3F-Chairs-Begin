import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>MONEY ZAP</div>
        <nav>
          <ul>
            <li>
              <a href='/'>discover</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>solutions</a>
            </li>
            <li>
              <a href='/'>contact</a>
            </li>
            <li className='btn'>
              <a href='/'>sign up now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
