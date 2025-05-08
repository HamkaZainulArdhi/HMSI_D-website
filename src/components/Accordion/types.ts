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
  dayIndex: number; // Properti dayIndex ditambahkan
  isToday?: boolean;
}
// interface AccordionProps {
  
//   isOpen: boolean;
//   onToggle: () => void;
// }