"use client";

import React, { useState } from "react";

const galleryData = {
  "Co-Curricular Activities": [
    {
      title: "Co-Curricular Activities",
      description: (
        <div className="space-y-6">

          {/* GRADE GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* GRADE 1-5 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl shadow-sm border border-blue-100">
              <h3 className="text-lg font-bold text-primary mb-3">
                Grade 1 – 5
              </h3>

              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <li>✓ Karate</li>
                <li>✓ Yoga</li>
                <li>✓ Dance</li>
                <li>✓ Indian Music</li>
                <li>✓ Western Music</li>
                <li>✓ Art & Craft</li>
                <li>✓ Computer</li>
                <li>✓ Robotics (AI)</li>
                <li>✓ Cubs & Bulbuls </li>
                <li>✓ Bunnies</li>
              </ul>
            </div>

            {/* GRADE 6-8 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl shadow-sm border border-blue-100">
              <h3 className="text-lg font-bold text-primary mb-3">
                Grade 6 – 8
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Karate</li>
                <li>✓ Yoga</li>
                <li>✓ Indian Music</li>
                <li>✓ Art & Craft</li>
                <li>✓ Robotics (AI)</li>
                <li>✓ Scouts& Guides</li>
                <li>✓ Vels Chit Chat</li>

              </ul>
            </div>

          </div>


        </div>
      ),
    },
  ],

  "Club Activities": [
    {
      title: "Club Activities",
      description: (
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD */}
          <div className="bg-white p-5 rounded-xl shadow border">
            <h4 className="font-bold text-primary mb-2">Grade 1 – 5</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• EVS Club</li>
              <li>• Literary Club</li>
              <li>• Math Club</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow border">
            <h4 className="font-bold text-primary mb-2">Grade 6 – 8</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Cyber Club</li>
              <li>• Literary Club</li>
              <li>• Energy Club</li>
              <li>• EVS Club</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl shadow border">
            <h4 className="font-bold text-primary mb-2">Grade 9</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Cyber Club</li>
              <li>• Environment Club</li>
              <li>• Interact Club</li>
            </ul>
          </div>

        </div>
      ),
    },
  ],

  "VTZ Activities": [
    {
      title: "VTZ Activities",
      description: (
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Silambam","WAKO Kick Boxing","Skating","Keyboard","Archery",
            "Art & Craft","Zumba / Western Dance","Chess",
            "Thaichi / Kempo Karate","Abacus"
          ].map((item,i)=>(
            <div key={i} className="bg-white border rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition">
              {item}
            </div>
          ))}
        </div>
      ),
    },
  ],

  "Special Features": [
    {
      title: "Special Features",
      description: (
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Robotics Lab","English Lab","Math Lab","Composite Lab",
            "Chemistry Lab","Physics Lab","Biology Lab","Computer Lab"
          ].map((item,i)=>(
            <div key={i} className="bg-gradient-to-br from-blue-50 to-white border rounded-lg p-4 text-center shadow-sm">
              <p className="font-semibold text-primary">{item}</p>
            </div>
          ))}
        </div>
      ),
    },
  ],
};

export default function ActivitiesTabs() {
  const [activeTab, setActiveTab] = useState("Co-Curricular Activities");

  const tabs = Object.keys(galleryData);

  return (
    <div className="bg-white py-12">

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md text-sm font-bold border-2 transition 
              ${
                activeTab === tab
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-blue-50"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4">
        {galleryData[activeTab].map((section, i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              {section.title}
            </h2>
            {section.description}
          </div>
        ))}
      </div>

    </div>
  );
}