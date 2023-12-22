import "./DropMenu.css";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom";

const DropMenu = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <NavLink to="/" className="dropDownMenuLink">
                <p className="menuItems">Home</p>
            </NavLink>
            <NavLink to="/people" className="dropDownMenuLink">
                <p className="menuItems">About</p>
            </NavLink>
            <NavLink to="/library" className="dropDownMenuLink">
                <p className="menuItems">Library</p>
            </NavLink>
            <NavLink to="/events" className="dropDownMenuLink">
                <p className="menuItems">Events</p>
            </NavLink>
            <NavLink to="/open-projects" className="dropDownMenuLink">
                <p className="menuItems">Open Projects</p>
            </NavLink>
            <NavLink to="/gallery" className="dropDownMenuLink">
                <p className="menuItems">Gallery</p>
            </NavLink>
            <NavLink to="/contact-us" className="dropDownMenuLink">
                <p className="menuItems">Contact</p>
            </NavLink>
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
export default DropMenu;
