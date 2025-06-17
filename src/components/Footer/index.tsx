"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-greyfooter relative z-10 bg-white pt-16 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-10 max-w-[360px] lg:mb-16">
                <div className="flex items-center gap-3">
                  <p className="text-body-color dark:text-body-color-dark text-2xl leading-relaxed font-medium whitespace-nowrap">
                    Suit up, soldiers
                  </p>
                  <div className="h-[3px] w-[85px] bg-gray-400 dark:bg-gray-600"></div>
                </div>
                <p className="text-body-color dark:text-body-color-dark mb-8 text-2xl leading-relaxed font-medium">
                  Every day's a battlefield
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.instagram.com/sid7.23?igsh=M2RkMDh3OHB4dTJr"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color dark:text-body-color-dark mr-6 duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sid7.23?igsh=M2RkMDh3OHB4dTJr"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color dark:text-body-color-dark mr-6 duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sid7.23?igsh=M2RkMDh3OHB4dTJr"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color dark:text-body-color-dark mr-6 duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/sid7.23?igsh=M2RkMDh3OHB4dTJr"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color dark:text-body-color-dark duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/photobooth"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      Photoboth
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      Memorize
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      TOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://hamkasite.vercel.app/"
                      target="_blank"
                      className="text-body-color dark:text-body-color-dark mb-4 inline-block text-base duration-300 hover:text-yellow-600 dark:hover:text-yellow-600"
                    >
                      Developer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="justify-center">
            <Image
              src={"/images/footer/footer.png"}
              alt="footer"
              width={2000}
              height={2000}
              className="hidden dark:block"
            />

            <Image
              src={"/images/footer/footer2.png"}
              alt="footer"
              width={2000}
              height={2000}
              className="block dark:hidden"
            />
          </div>
        </div>
        <div className="absolute top-14 right-0 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
