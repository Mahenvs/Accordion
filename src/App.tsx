import Home from "./Home";

export interface dataType {
  title: string;
  description: string;
  author: string;
}
const accordion_list: dataType[] = [
  {
    title: "Accordion 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti eius recusandae fugiat pariatur repudiandae velit, aperiam assumenda, odit eveniet quis, numquam esse est fuga ipsa a quo illo magni?`,
    author: "mahe",
  },
  {
    title: "Accordion 2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti eius recusandae fugiat pariatur repudiandae velit, aperiam assumenda, odit eveniet quis, numquam esse est fuga ipsa a quo illo magni?`,
    author: "mahe",
  },
  {
    title: "Accordion 3",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti eius recusandae fugiat pariatur repudiandae velit, aperiam assumenda, odit eveniet quis, numquam esse est fuga ipsa a quo illo magni?`,
    author: "vamsde",
  },
];

function App() {
  return <Home data={accordion_list} />;
}

export default App;
