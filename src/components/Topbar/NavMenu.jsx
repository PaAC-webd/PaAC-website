import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./Topbar.css";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="topbar-navs">
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavLink className="NavigationMenuLink" to="/">
              Home
            </NavLink>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavLink className="NavigationMenuLink" to="/people">
              About
            </NavLink>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Activities
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <li className="ListItem">
                  <NavLink
                    className="NavigationMenuLink"
                    to="/library"
                  >
                    Library
                  </NavLink>
                </li>
                <li className="ListItem">
                  <NavLink
                    className="NavigationMenuLink"
                    to="/events"
                  >
                    Events
                  </NavLink>
                </li>
                <li className="ListItem">
                  <NavLink
                    className="NavigationMenuLink"
                    to="/open-projects"
                  >
                    Open Projects
                  </NavLink>
                </li>
                <li className="ListItem">
                  <a
                    className="NavigationMenuLink"
                    href="https://medium.com/@paac_iitr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item></NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavLink className="NavigationMenuLink" to="/gallery">
              Gallery
            </NavLink>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavLink
              className="NavigationMenuLink"
              to="/contact-us"
            >
              Contact
            </NavLink>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

export default NavMenu;
