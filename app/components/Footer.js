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
    <footer id="footer" className="pt-36 container">
      <div className="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8">
            <h2 className="mb-4 text-3xl italic font-bold text-purple-500 playfair-display lg:text-4xl sm:text-4xl">
              Airstayl
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 lora">
                Homestay
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="griya-merapi"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                  >
                    Griya Merapi
                  </a>
                </li>
                <li>
                  <a
                    href="griya-papringan"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                  >
                    Griya Papringan
                  </a>
                </li>
                <li>
                  <a
                    href="griya-iromaejan"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                  >
                    Griya Iromejan
                  </a>
                </li>
                <li>
                  <a
                    href="griya-menjangan"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                  >
                    Griya Menjangan
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 lora">
                Villa
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="villa-casa-grande"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                  >
                    Exclusive Casa Grande
                  </a>
                </li>
                <li>
                  <a
                    href="pesona-sintuk"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                  >
                    Pesona Sintuk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 lora">
                Follow Us
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://x.com"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    𝕏 (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/husni.ct"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    className="text-gray-700 text-md open-sans hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 xl:mt-0 mb-10 md:mb-0">
            <h3 className="text-lg font-semibold lora">Hubungi Kami</h3>
            <form onSubmit={handleSubmit} className="flex flex-col mt-4">
              <input
                type="text"
                placeholder="Message me on WhatsApp"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="max-w-sm p-2 outline-gray-400 placeholder:text-gray-700 text-gray-800 px-4 mb-4 bg-transparent border border-gray-700 rounded-full"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 mr-4 text-white transition duration-300 ease-in-out rounded-full w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-purple-500 hover:bg-purple-200 hover:shadow-lg hover:opacity-80"
              >
                Contact
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t-2 border-gray-300 sm:mt-12">
          <p className="leading-5 text-gray-500 text-md">
            &copy; 2024 <span className="italic">airstayl.com</span> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
