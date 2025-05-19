'use client';
import { useState, useEffect } from 'react';
import CustomAccordion from './Accordion';
import '@/styles/index.css'; // Pastikan ini memuat font Playfair Display

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
  const [openAccordion, setOpenAccordion] = useState<string>('');
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    const todayIndex = new Date().getDay();
    setTodayIndex(todayIndex); 
    
    
    const todaySchedule = scheduleData.find(item => item.dayIndex === todayIndex);
    
    if (todaySchedule) {
      setOpenAccordion(todaySchedule.id); 
    }
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? '' : id);
  };

  const scheduleData: ScheduleItem[] = [
    {
      id: 'fighting-monday',
      day: 'Monday',
      title: 'Fighting',
      titleColor: 'text-red-400',
      courses: [
        { name: 'Web Application Development /PemWeb', time: '13.00 - 15.00' },
      ],
      dayIndex: 1,
    },
    {
      id: 'creepy-tuesday',
      day: 'Tuesday',
      title: 'Creepy',
      titleColor: 'text-purple-400',
      courses: [
        { name: 'Human Resource Management / MSDM', time: '10.00 - 12.30' },
      ],
      dayIndex: 2, 
    },
    {
      id: 'warzone-wednesday',
      day: 'Wednesday',
      title: 'Warzone',
      titleColor: 'text-red-400',
      courses: [
        { name: 'Discrete Math / MatDis', time: '07.00 - 09.30' },
        { name: 'System Testing and Implementation / PIS', time: '13.00 - 14.30' },
        { name: 'Business Process Engineering / RPB', time: '15.30 - 18.30' },
      ],
      dayIndex: 3, 
    },
    {
      id: 'trench-thursday',
      day: 'Thursday',
      title: 'Trench',
      titleColor: 'text-yellow-400',
      courses: [
        { name: 'Industrial Statistics / StatDus', time: '15.30 - 18.30' },
      ],
      dayIndex: 4, 
    },
    {
      id: 'freedom-friday',
      day: 'Friday',
      title: 'Freedom',
      titleColor: 'text-green-400',
      courses: [
        { name: 'System Project Management / MPS', time: '07.30 - 10.00' },
      ],
      dayIndex: 5, 
    }
  ];

  return (
    <div className="bg-whitecus border-1 border-white dark:bg-black text-center text-black dark:text-white lg:min-h-screen w-full flex flex-col py-12  px-4" style={{ fontFamily: 'Playfair Display' }}>
       <h1 className="text-5xl font-bold mb-4">Schedule madness</h1>
      <div className="text-center mb-10 w-full" style={{ fontFamily: 'Poppins' }}>
        <p className="text-gray-700 dark:text-gray-400 text-lg" >Class? Nah. This is just our official nap schedule. Sleep tight, brainiacs.</p>
        <p className="text-yellow-400 italic text-md mt-2">
          <strong>Warning:</strong> High chance of dozing off during these hours. Proceed with pillow!
        </p>
      </div>

      <div className="border border-zinc-700 rounded-xl overflow-hidden">
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
