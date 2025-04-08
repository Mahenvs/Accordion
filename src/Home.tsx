import { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import { v4 as uuidv4 } from "uuid";

// Define the types
export interface AccordionType {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
}

export interface dataType {
  title: string;
  content: string; // Matches the "content" field in App.tsx
}

const Home = (props: { data: dataType[] }) => {
  const [accordionList, setAccordionData] = useState<AccordionType[]>(
    props.data.map((item) => ({
      ...item,
      id: uuidv4(),
      isOpen: false,
    }))
  );

  useEffect(() => {
    setAccordionData((prevList: AccordionType[]) =>
      prevList.map((item) => ({ ...item, id: uuidv4(), isOpen: false }))
    );
  }, []);

  const handler = (title: string) => {
    console.log(title);

    setAccordionData((prevList: AccordionType[]) =>
      prevList.map((item: AccordionType) =>
        item.title === title ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div>
      {accordionList.map((item: AccordionType) => (
        <Accordion
          {...item}
          key={item.id}
          handler={handler} // Pass handler
        />
      ))}
    </div>
  );
};

export default Home;
