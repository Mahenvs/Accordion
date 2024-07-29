import { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import AccordionType from "./types/types";
import { v4 as uuidv4 } from "uuid";
import { dataType } from "./App";

const Home = (props: { data: dataType[] }) => {
  const [accordionList, setAccordionData] = useState<AccordionType[]>(props.data);

  useEffect(() => {
    setAccordionData((prevList: AccordionType[]) =>
      prevList.map((item) => {
        return { id: uuidv4(), ...item, isOpen: false };
      })
    );
  }, []);

  const handler = (title: string) => {
    setAccordionData((prevList: AccordionType[]) =>
      prevList.map((item: AccordionType) =>
        item.title === title
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
  };

  return (
    <div>
      {accordionList.map((item: AccordionType) => (
        <Accordion
          {...item}
          description={item.description}
          key={item.id}
          title={item.title}
          isOpen={item.isOpen}
          handler={handler}
        />
      ))}
    </div>
  );
};

export default Home;
