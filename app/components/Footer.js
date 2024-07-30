"use client";
import React, { useState } from "react";

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsapp = `https://wa.me/6285866242248?text=${message}`;
    window.open(whatsapp, "_blank");
  };

  return (
    <footer className="pt-36">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8">
            <h2 className="font-bold italic text-purple-400 text-3xl lg:text-4xl mb-4 sm:text-4xl">
              Airstayl
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Homestay</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-md text-gray-700 hover:text-purple-400"
                  >
                    Griya Merapi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md text-gray-700 hover:text-purple-400"
                  >
                    Griya Papringan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md text-gray-700 hover:text-purple-400"
                  >
                    Griya Iromejan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md text-gray-700 hover:text-purple-400"
                  >
                    Griya Menjangan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Villa</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-md text-gray-700 hover:text-purple-400"
                  >
                    Exclusive casa Grande
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md text-gray-700 hover:text-purple-400"
                  >
                    Pesona sintuk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://x.com"
                    className="text-md text-gray-700 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    𝕏 (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="text-md text-gray-700 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    className="text-md text-gray-700 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    className="text-md text-gray-700 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 xl:mt-0">
            <h3 className="text-lg font-semibold text-gray-900">
              Hubungi Kami
            </h3>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
              <input
                type="text"
                placeholder="Chat kami di WhatsApp"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="max-w-sm mb-4 p-2 bg-transparent px-4 border border-gray-900 rounded-full"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 pt-8 sm:mt-12">
          <p className="text-md leading-5 text-gray-500">
            &copy; 2024 Airstayl, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
