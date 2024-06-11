import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";

const Item = (props) => {
  return (
    <Accordion.Item className="AccordionItem" value={`item-${props.id}`}>
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger className="AccordionTrigger">
          {props.question}
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
        {props.answer}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default Item;
