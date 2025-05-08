import '@/styles/index.css';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScheduleItem } from './index';


interface AccordionProps {
  item: ScheduleItem;
  isOpen: boolean;
  onToggle: () => void;
}

const CustomAccordion: React.FC<AccordionProps> = ({ item, isOpen, onToggle }) => {
  return (
    <Accordion
      type="single"
      collapsible
      value={isOpen ? "item-1" : ""}
      onValueChange={() => onToggle()}
      className="w-full border-b border-zinc-700 transition-all duration-300"
      style={{ fontFamily: 'Playfair Display' }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-8 py-7 hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors duration-200">
          <div className="w-full flex justify-between sm:items-center text-left text-gray-700 dark:text-white">
            <h2 className="text-xl font-bold sm:text-4xl">
              <span>{item.title} </span>
              <span className={`${item.titleColor} capitalize`}>{item.day}</span>
              {item.isToday && (
                <span className="bg-red-500 text-white border-2 border-red-900 m-4 px-5 py-1 text-sm rounded-md opacity-80 hover:opacity-100 cursor-pointer">
                  Today
                </span>
              )}
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden" style={{ fontFamily: 'Poppins' }}>
          <div className="px-8 pb-4 space-y-2 ">
            {item.courses.map((course, idx) => (
              <div
                key={idx}
                className="flex justify-between text-[11px] sm:text-base text-gray-500 dark:text-gray-300 border-b border-zinc-700 pb-1"
              >
                <span className="">{course.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{course.time}</span>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
