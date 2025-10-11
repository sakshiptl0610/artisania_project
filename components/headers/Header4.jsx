"use client";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Header4() {
  return (
    <div className="relative">
      <header id="header_main" className="header type-absolute style-4">
        <div className="header-inner">
          <div className="header-inner-wrap flex items-center justify-between">
            
           
            <div className="header-left flex items-center">
              <button
                className="mobile-nav-toggler mobile-button d-lg-none flex mr-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu"
              />
              <div id="site-logo ml-[40px]">
                <Link href="/" rel="home">
                  <Image
                    id="logo-header"
                    alt="Logo"
                    src="/images/logo/logo.png"
                    width={200}
                    height={45}
                  />
                </Link>
              </div>
            </div>

            
            <div className="header-center flex justify-center flex-grow">
              <nav className="main-menu">
                <ul className="navigation flex gap-6">
                  <Nav />
                </ul>
              </nav>
            </div>

            
            <div className="header-right flex items-center gap-4">
              <div className="header-register">
                <Link
                  href="/register"
                  className="tf-button-default active header-text"
                >
                  Contact
                </Link>
              </div>
              <div className="header-join d-lg-none flex">
                <Link href="/login" className="fs-15">
                  Join
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MobileNav />
      </header>
    </div>
  );
}
