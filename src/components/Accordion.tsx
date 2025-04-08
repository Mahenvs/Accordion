import AccordionType from "../types/types";
import "./style.css";
import { motion } from "framer-motion";

const Accordion: React.FC<AccordionType> = ({
  title,
  isOpen,
  description,
  handler,
  ...rest
}) => {
  console.log(isOpen, title);

  return (
    <motion.div className="accordion">
      <header
        tabIndex={0} // Make the label focusable
        className={`header ${isOpen} === true ? " header-open" : " header-close"`}
        onClick={() => handler(title)}
        style={{ cursor: "pointer" }} // Add pointer cursor for better UX
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handler(title);
          }
        }}
      >
        <span>
          {title}- {isOpen}
        </span>
        <span></span>
        {!isOpen ? <span>⬇️</span> : <span>⬆️</span>}
      </header>

      <motion.section
        className="accordion-body"
        initial={false}
        animate={
          isOpen
            ? { height: "auto", opacity: 1, padding: "1rem" }
            : { height: 0, opacity: 0, padding: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.span>{description}</motion.span>
        {Object.keys(rest).map((key) => (
          <motion.p key={key}>
            <strong>{key}:</strong> {rest[key]}
          </motion.p>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default Accordion;
