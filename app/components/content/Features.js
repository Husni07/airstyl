import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSwimmingPool,
  faBriefcase,
  faParking,
  faTree,
  faSnowflake,
  faPlug,
  faFaucet,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="p-4 mx-auto">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faWifi} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Free Wi-Fi</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Workspace</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faParking} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Free Parking</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faTree} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Backyard</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faPlug} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Refrigerator</h2>
          </div>
        </div>
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faFaucet} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Washer</h2>
          </div>
        </div>
        <div className="items-center hidden sm:flex">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faSnowflake} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Air Conditioner</h2>
          </div>
        </div>
        <div className="items-center hidden sm:flex">
          <div className="inline-flex items-center justify-center w-12 h-12 text-black bg-purple-300 rounded-full">
            <FontAwesomeIcon icon={faSwimmingPool} className="w-6 h-6" />
          </div>
          <div className="pl-3">
            <h2 className="text-lg text-gray-600">Swimming Pool</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
