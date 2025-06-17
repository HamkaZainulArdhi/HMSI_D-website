"use client";
import { useState, useEffect } from "react";
import CustomAccordion from "./Accordion";
import "@/styles/index.css"; // Pastikan ini memuat font Playfair Display

export interface Course {
  name: string;
  time: string;
}

export interface ScheduleItem {
  id: string;
  day: string;
  title: string;
  titleColor: string;
  courses: Course[];
  dayIndex: number;
  isToday?: boolean; // Properti isToday ditambahkan
}

const FAQAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState<string>("");
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    const todayIndex = new Date().getDay();
    setTodayIndex(todayIndex);

    const todaySchedule = scheduleData.find(
      (item) => item.dayIndex === todayIndex,
    );

    if (todaySchedule) {
      setOpenAccordion(todaySchedule.id);
    }
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? "" : id);
  };

  const scheduleData: ScheduleItem[] = [
    {
      id: "fighting-monday",
      day: "Monday",
      title: "Fighting",
      titleColor: "text-red-400",
      courses: [
        { name: "Web Application Development /PemWeb", time: "13.00 - 15.00" },
      ],
      dayIndex: 1,
    },
    {
      id: "creepy-tuesday",
      day: "Tuesday",
      title: "Creepy",
      titleColor: "text-purple-400",
      courses: [
        { name: "Human Resource Management / MSDM", time: "10.00 - 12.30" },
      ],
      dayIndex: 2,
    },
    {
      id: "warzone-wednesday",
      day: "Wednesday",
      title: "Warzone",
      titleColor: "text-red-400",
      courses: [
        { name: "Discrete Math / MatDis", time: "07.00 - 09.30" },
        {
          name: "System Testing and Implementation / PIS",
          time: "13.00 - 14.30",
        },
        { name: "Business Process Engineering / RPB", time: "15.30 - 18.30" },
      ],
      dayIndex: 3,
    },
    {
      id: "trench-thursday",
      day: "Thursday",
      title: "Trench",
      titleColor: "text-yellow-400",
      courses: [
        { name: "Industrial Statistics / StatDus", time: "15.30 - 18.30" },
      ],
      dayIndex: 4,
    },
    {
      id: "freedom-friday",
      day: "Friday",
      title: "Freedom",
      titleColor: "text-green-400",
      courses: [
        { name: "System Project Management / MPS", time: "07.30 - 10.00" },
      ],
      dayIndex: 5,
    },
  ];

  return (
    <div
      className="bg-whitecus flex w-full flex-col px-4 py-12 text-center text-black lg:min-h-screen dark:bg-black dark:text-white"
      style={{ fontFamily: "Playfair Display" }}
    >
      <h1 className="mb-4 text-5xl font-bold">Schedule madness</h1>
      <div
        className="mb-10 w-full text-center"
        style={{ fontFamily: "Poppins" }}
      >
        <p className="text-lg text-gray-700 dark:text-gray-400">
          Class? Nah. This is just our official nap schedule. Sleep tight,
          brainiacs.
        </p>
        <p className="text-md mt-2 text-yellow-400 italic">
          <strong>Warning:</strong> High chance of dozing off during these
          hours. Proceed with pillow!
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-zinc-700">
        {scheduleData.map((item) => (
          <CustomAccordion
            key={item.id}
            item={{ ...item, isToday: item.dayIndex === todayIndex }}
            isOpen={openAccordion === item.id}
            onToggle={() => toggleAccordion(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
