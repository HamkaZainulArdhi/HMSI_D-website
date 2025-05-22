"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <div
        className={`header-container fixed top-0 right-0 left-0 z-40 transition-all duration-500 ease-out ${
          sticky ? "pt-2" : "pt-0"
        }`}
      >
        <header
          className={`header mx-auto flex items-center shadow-lg transition-all duration-500 ease-out ${
            sticky
              ? "bg-whitecus bg-opacity-100 w-3/4 rounded-full py-2 shadow-lg backdrop-blur-sm md:w-2/3 lg:w-1/2 dark:bg-transparent"
              : "w-full bg-transparent py-3"
          }`}
        >
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between">
              <div
                className={`w-28 max-w-full px-4 transition-all duration-300 ${sticky ? "scale-90" : ""}`}
              >
                <Link href="/" className="block w-full">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={80}
                    height={16}
                    className="h-auto w-14"
                  />
                </Link>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-white focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                        navbarOpen ? "top-[7px] rotate-45" : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                        navbarOpen ? "opacity-0" : " "
                      }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                        navbarOpen ? "top-[-8px] -rotate-45" : " "
                      }`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar bg-whitebg absolute right-0 z-30 w-[250px] rounded-xl border-[.5px] border-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                      navbarOpen
                        ? "visibility top-full opacity-100"
                        : "invisible top-[120%] opacity-0"
                    }`}
                  >
                    <ul className="block lg:flex lg:space-x-8">
                      {menuData.map((menuItem, index) => (
                        <li key={index} className="group relative">
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-sm font-medium lg:mr-0 lg:inline-flex lg:px-0 ${
                                sticky ? "text-xs lg:py-1" : "lg:py-3"
                              } transition-all duration-300 ${
                                usePathName === menuItem.path
                                  ? "font-semibold text-yellow-600"
                                  : "text-slate-900 hover:font-semibold hover:text-slate-900 hover:[text-shadow:_0_0_40px_rgba(255,255,255,900)] dark:text-slate-300 dark:hover:text-slate-100"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            // <Link
                            // href={menuItem.path}
                            // className={`group relative flex py-2 text-sm font-medium lg:mr-0 lg:inline-flex lg:px-0 ${
                            //   sticky ? "text-xs lg:py-1" : "lg:py-3"
                            // } transition-all duration-300 ${
                            //   usePathName === menuItem.path
                            //     ? "-rotate-5 font-semibold text-yellow-600"
                            //     : "rounded px-1 text-slate-900 outline-none hover:font-semibold hover:text-slate-900 active:ring-0 active:outline-none lg:hover:-rotate-5 dark:text-slate-300 dark:hover:text-slate-100"
                            // }`}
                            // >
                            // {menuItem.title}

                            // {/* Underline: full width if active, animate on hover */}
                            // <span
                            //   className={`absolute bottom-2 left-0 z-10 h-2 skew-x-12 bg-yellow-600 transition-all duration-500 ease-out ${
                            //     usePathName === menuItem.path
                            //       ? "w-full -rotate-1"
                            //       : "w-0 group-hover:w-full"
                            //   }`}
                            // ></span>
                            // </Link>
                            <>
                              <p
                                onClick={() => handleSubmenu(index)}
                                className={`flex cursor-pointer items-center justify-between py-2 text-sm font-medium text-slate-900 group-hover:text-black lg:mr-0 lg:inline-flex lg:px-0 dark:text-slate-300 ${
                                  sticky ? "text-xs lg:py-1" : "lg:py-3"
                                } transition-all duration-300`}
                              >
                                {menuItem.title}
                                <span className="pl-3">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 25 24"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              </p>
                              <div
                                className={`submenu bg-whitecus relative top-full left-0 rounded-xl p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                  openIndex === index ? "block" : "hidden"
                                }`}
                              >
                                {menuItem.submenu &&
                                  menuItem.submenu.map((submenuItem, index) => (
                                    <Link
                                      href={submenuItem.path || "#"}
                                      key={index}
                                      className="block rounded py-2 text-xs text-black hover:text-yellow-600 lg:px-3"
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  ))}
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
