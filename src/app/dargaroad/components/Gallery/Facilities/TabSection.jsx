"use client";

import { useState } from "react";

const TABS = [
  "Special Features",
  "Club Activities",
  "Cultural and Sports Academy",
  "Infrastructure",
  "Transport Facility",
];

const CONTENT = {
  "Special Features": (
    <div className="space-y-4">
      <p>
        Apart from academics, activities related to curriculum are also given
        importance. These activities are conducted keeping in mind the changing
        trends in education that is becoming global.
      </p>

      <p>
        <strong>Maths Lab :</strong> “Learning by doing” forms the basis for all
        activities in the lab. The Maths Lab enhances concept stabilization
        using laboratory activities.
      </p>

      <p>
        <strong>English Lab :</strong> With the use of innovative and creative
        materials, children acquire language skills at their own pace.
        Activity-based training motivates students to learn without stress and
        develop confidence.
      </p>
        <p>
        <strong>Smart Class :</strong> The technology enabled programme ensures effective and enriching learning experiences. The regularly updated inputs and a wide range of video clippings are accessed from the knowledge centre. Difficult and abstract concepts too become clear to the students when viewed on the plasma TV screens provided in the class rooms. The facility is also useful for other purposes like Guest lectures, Electronic voting and General Assembly programmes. In essence, each class room is an audio visual room.
      </p>
       <p>
        <strong>Disaster Management and Life skills :</strong>The curriculum based lessons help sensitize students to environment issues and to manage crises courageously.
      </p>
       <p>
        <strong>Heritage Club :</strong>The objective of this club is tracing the roots of our ancient culture and fostering and promoting it amongst the youngsters.
      </p>
       <p>
        <strong>Interact Club :</strong>Service projects are adopted to instill the script of service. This club is the students wing of the Rotary Club.
      </p>
        <p>
        <strong>Clean Class Award :</strong>A clean class promotes positivity in the learning atmosphere. To instill this sense of cleanliness, the Clean Class Award has been instituted for Classes IV to XII. The classes are judged on various parameters of cleanliness and the award is given once a term.
      </p>
    </div>
  ),

  "Club Activities": (
    <div className="space-y-4">
  <p>
     A series of Club Activities to promote and cultivate the talents of students are conducted on working Saturdays.
    </p>
      <p>
        <strong>Literary Club :</strong> The objectives are to enhance the following skills: <br/>
        Oratory, Writing, Debating, Reading
      </p>
       <p>
        <strong>Reading Club :</strong> The objective is to inculcate the habit of reading.
      </p>
       <p>
        <strong>Health and Hygiene :</strong> <br/> The objective are, <br/>
        1. To highlight the importance of first aid.<br/>
        2. To teach students simple first aid techniques.<br/>
      </p>
       <p>
        <strong>Arts and Crafts :</strong> The objective are, <br/>
        1. To nurture the artistic talents in students.<br/>
        2. To provide the students with an opportunity to exhibit their artistic talents.
      </p>
         <p>
        <strong>Social Service Club :</strong> The objective are, <br/>
        1. To highlight that “service to man is service to God.”<br/>
        2. To make them aware of the harsh realities of life by taking them on a visit to orphanages and old age homes.
      </p>
    </div>
  
    

  ),

  "Cultural and Sports Academy": (
    <div className="space-y-4">
         <p>
    The Cultural Academy Classes will be held on all four Saturdays for interested students at a nominal cost to promote aesthetic sense and tap the innate talents.
    </p>
    <p>The students are grouped according to their level of skill and ability. Individual attention and training is given to the students.</p>
    <p>The following classes offer opportunities to children to explore new areas and satisfy their needs and develop their interests.</p>
    1. Bharatha Natyam<br/>
    2. Vocal Music<br/>
    3. Western Music (Keyboard)<br/>
    4. Karate<br/>
    5. Yoga<br/>
    6. Chess<br/>
    7. Western Dance<br/>
    8. Skating<br/>
    </div>
   
  ),

  Infrastructure: (
    <div className="space-y-4">
    <ul className="list-disc pl-5">
        <li>
         The school has all the necessary facilities in keeping with the modern trend in education. Experienced and trained teachers help in maintaining academic excellence and high standards of the school.
        </li>
        <li>The Campus is surrounded by an inspiring panoramic view of nature with green fields and the Pallavaram hills. The atmosphere is serene with well laid out roads, gardens, avenue of trees and lawns.</li>
        <li>A well equipped library with books covering various fields like education, general knowledge, facts, encyclopedias, newspapers, magazines etc</li>
        <li>Well equipped laboratories for Physics, Chemistry, Biology, Maths, Computer Science and English.</li>
        <li>Swimming pool of three categories – Baby Pool, Competition Pool and Diving Pool.</li>
        <li>Two well maintained playgrounds for cricket and football.</li>
        <li>A conference hall with LCD facilities.</li>
        <li>A Play Pen for use by children  from PreKG to Std III.</li> 
    </ul>
    </div>
  ),

  "Transport Facility": (
    <div className="space-y-4">
        <strong>SCHOOL  / VAN FEE REGULATIONS </strong>
      <p>
        The school year is divided into 3 terms, viz.
      </p>
        <ul className="list-disc pl-5">
        <li>First Term    –    April to July</li>
        <li>Second Term   –    August to November</li>
        <li>Third Term    –  December to March</li>
      </ul>
      <p>Fee for the entire term will have to be paid even when the student  is admitted in the middle of the term.</p>
      <p>Fee once paid will not be refunded under any circumstance.</p>
      <p><strong>For those who use the School Van</strong></p>
       <p>
         1. The students are requested to  be ready at the respective stops at the scheduled time to avoid delay. Van will stop only for 2 minutes at each stop. <br/>
         2. Van stops once fixed will not be changed. <br/>
         3. No refund of Van Fee will be made under any circumstance. <br/>
         4. If a student wants to stop using the Van, the office should be informed a week earlier before the commencement of the term for attendance purpose. Otherwise the full fee for the term will have to be paid. <br/>
         5. No student can withdraw from using the van service in the middle of a term. Leaving oral information with the driver will not be accepted. A written permission from the Principal must be taken before the date of payment of van fee. <br/>
         6. Giving tips to the driver and conductor is prohibited. Students are restricted from having acquaintance with van drivers and cleaners. 
 
       </p>
       <p>The School Office may be contacted for details regarding Van Fee.</p>
        </div>
  ),
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("Special Features");

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Facilities
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-lg font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-secondary text-white/90 hover:bg-tertiary hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white text-gray-700 leading-relaxed">
          {CONTENT[activeTab]}
        </div>
      </div>
    </section>
  );
}
