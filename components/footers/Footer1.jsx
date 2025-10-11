"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { menuItems, socialLinks } from "@/data/footerLinks";

export default function Footer1({ parentClass = "footer" }) {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", formRef.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          handleShowMessage();
          formRef.current.reset();
        } else {
          setSuccess(false);
          handleShowMessage();
        }
      });
  };

  return (
    <footer
      id="footer"
      className={parentClass}
      style={{
        backgroundColor: "#e4d3ac",
      }}
    >
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="footer-body-wrap flex justify-between">
                  {/* ========== LOGO + CONTACT ========== */}
                  <div
                    className="footer-more-infor wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <div className="footer-logo mb-4">
                      <Link href={`/`}>
                        <Image
                          alt="Artisania"
                          src="/images/logo/logo.png"
                          width={200}
                          height={36}
                        />
                      </Link>
                    </div>

                    <p className="text-sm text-gray-700 mb-4" style={{ maxWidth: "280px" }}>
                      At <strong>Artisania</strong>, we bring you the beauty of
                      Indian craftsmanship — from Gond paintings to Sabai grass
                      art, celebrating stories painted by hand and heart.
                    </p>

                    <ul className="address">
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-call" />
                        </div>
                        <p>+91 98765 43210</p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-mail-1" />
                        </div>
                        <p>support@artisania.in</p>
                      </li>
                      <li className="flex gap-10 items-center">
                        <div className="icon">
                          <i className="flaticon-location" />
                        </div>
                        <p>
                          21 Handicraft Lane, Bhubaneswar, <br />
                          Odisha, India
                        </p>
                      </li>
                    </ul>

                    <ul className="tf-social-icon flex items-center gap-10 mt-4">
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <a href={link.href}>
                            <i className={link.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ========== FOOTER LINKS ========== */}
                  {menuItems.map((menu, index) => (
                    <div
                      key={index}
                      className="footer-menu-list wow fadeInUp"
                      data-wow-delay={menu.delay}
                    >
                      <h5 className="fw-5">{menu.title}</h5>
                      <ul>
                        {menu.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.href.startsWith("/") ? (
                              <Link href={link.href}>{link.name}</Link>
                            ) : (
                              <a href={link.href}>{link.name}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* ========== SUBSCRIBE SECTION ========== */}
                  <div
                    className="footer-subscribe wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <h5 className="fw-5">Stay Connected</h5>
                    <p>
                      Join our community of art lovers & discover handmade
                      wonders straight from India’s artisans.
                    </p>

                    <div
                      className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          You have successfully subscribed.
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Something went wrong</p>
                      )}
                    </div>

                    <form
                      className="form-subscribe style-line-bottom"
                      onSubmit={sendMail}
                      ref={formRef}
                    >
                      <fieldset className="email">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="style-default"
                          name="email"
                          tabIndex={2}
                          required
                        />
                      </fieldset>
                      <div className="button-submit">
                        <button className="tf-btn-arrow" type="submit">
                          Subscribe
                          <i className="icon-arrow-top-right" />
                        </button>
                      </div>
                    </form>

                    <h5 className="fw-5 get-app mt-6">Experience Artisania</h5>
                    <ul className="tf-app-download">
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-apple" />
                          </div>
                          <div className="app">
                            <div>Download on the</div>
                            <div>Apple Store</div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="icon">
                            <i className="icon-chplay" />
                          </div>
                          <div className="app">
                            <div>Get it on</div>
                            <div>Google Play</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== COPYRIGHT ========== */}
        <div className="footer-bottom wow fadeInUp" data-wow-delay="0s">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap flex justify-center items-center">
                  <p>
                    © {new Date().getFullYear()} <strong>Artisania</strong>.
                    Handcrafted with love in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
