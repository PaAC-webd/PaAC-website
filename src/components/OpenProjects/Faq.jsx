import * as Accordion from "@radix-ui/react-accordion";
import Item from "./Item";
import { items } from "./items.js";
const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {items.map((item) => (
      <Item key={item.id} id={item.id} question={item.question} answer={item.answer} />
    ))}
  </Accordion.Root>
);

export default AccordionDemo;
