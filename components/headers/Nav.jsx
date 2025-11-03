"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menu) => {
    let isActive = false;
    if (menu.href !== "#") {
      if (pathname.split("/")[1] == menu.href?.split("/")[1]) {
        isActive = true;
      }
    }
    if (menu.subItems) {
      menu.subItems.forEach((el) => {
        if (el.href != "#") {
          if (pathname.split("/")[1] == el.href?.split("/")[1]) {
            isActive = true;
          }
        }
        if (el.subItems) {
          el.subItems.map((elm) => {
            if (elm.href != "#") {
              if (pathname.split("/")[1] == elm.href?.split("/")[1]) {
                isActive = true;
              }
            }
          });
        }
      });
    }
    return isActive;
  };
  return (
    <>
      {menuItems.map((item, index) => (
        <li key={index} className={item.isActive ? "" : ""}>
          <a href={item.href} className={isMenuActive(item) ? "" : ""}>
            {item.title}
          </a>
          {item.subItems && (
            <ul className={item.hasMega ? "mega-menu" : ""}>
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className={subItem.subItems ? "" : ""}>
                  {subItem.title && !subItem.href && (
                    <span
                      className={`title ${isMenuActive(subItem) ? "" : ""}`}
                    >
                      {subItem.title}
                    </span>
                  )}
                  {subItem.href ? (
                    <Link
                      href={subItem.href}
                      className={`${isMenuActive(subItem) ? "" : ""}`}
                    >
                      {subItem.title}
                    </Link>
                  ) : (
                    subItem.subItems && (
                      <ul>
                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link
                              href={subSubItem.href}
                              className={`${
                                isMenuActive(subSubItem) ? "" : ""
                              }`}
                            >
                              {subSubItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
