import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '@/assets/icons/app-icon.svg';

interface HeaderProps {
  hideMenu?: boolean;
  hideAction?: boolean;
}

const Header = ({ hideMenu, hideAction }: HeaderProps) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <AppIcon />
          <span className="ml-3 text-xl">react-admin-template</span>
        </a>
        {!hideMenu && (
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">App</a>
            <a className="mr-5 hover:text-gray-900">Company</a>
            <a className="mr-5 hover:text-gray-900">Contact us</a>
          </nav>
        )}
        {!hideAction && (
          <Link to={'/auth/sign-in'}>
            <button className="flex flex-row items-center gap-1">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width={16}
                height={16}
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
              로그인
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
