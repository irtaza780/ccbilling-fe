import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-10">
        <div className="bg-primary text-white px-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-32 py-20 justify-items-center">
          <p className="font-bold text-lg">CRYSTAL CLEAR BILLING</p>
          <div className="flex flex-col gap-3 mt-3">
            <p className="font-semibold">Useful Links</p>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Services</Link>
          </div>

          <div className="flex flex-col gap-3 mt-3">
            <p className="font-semibold">Contact</p>
            <a href="https://maps.app.goo.gl/VmpLQ84eNetT4JDx5" target="_blank">
              {" "}
              <p>5652 Liberty Manor Circle Woodbridge, VA 22193</p>
            </a>
            <a href="mailto:support@crystalclearbilling.com">
              {" "}
              <p>support@crystalclearbilling.com</p>
            </a>
            <a href="tel:+12343456">
              <p>+1 234 3456</p>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between bg-gray-500 px-20 py-5">
          <p className="text-white">Connect with us on social networks: </p>

          <div className="flex flex-row gap-10">
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#fffff"
            >
              <path
                d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#fff"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                stroke="#fff"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.5 6.51L17.51 6.49889"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#fff"
            >
              <path
                d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
