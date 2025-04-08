import Home from "./Home";

// Define the data type for the accordion list
export interface dataType {
  title: string;
  content: string; // Renamed from "description" to "content" for consistency
  author: string;
}

// Sample accordion list
const accordion_list: dataType[] = [
  {
    title: "Accordion 1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti eius recusandae fugiat pariatur repudiandae velit, aperiam assumenda, odit eveniet quis, numquam esse est fuga ipsa a quo illo magni?`,
    author: "mahe",
  },
  {
    title: "Accordion 2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti eius recusandae fugiat pariatur repudiandae velit, aperiam assumenda, odit eveniet quis, numquam esse est fuga ipsa a quo illo magni?`,
    author: "mahe",
  },
  {
    title: "Accordion 3",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti eius recusandae fugiat pariatur repudiandae velit, aperiam assumenda, odit eveniet quis, numquam esse est fuga ipsa a quo illo magni?`,
    author: "vamsde",
  },
];

function App() {
  return <Home data={accordion_list} />;
}

export default App;
