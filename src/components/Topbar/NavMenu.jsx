import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./Topbar.css";

const NavMenu = () => {
  return (
    <div className="topbar-navs">
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/people">
              About
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Activities
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <li className="ListItem">
                  <NavigationMenu.Link
                    className="NavigationMenuLink"
                    href="/library"
                  >
                    Library
                  </NavigationMenu.Link>
                </li>
                <li className="ListItem">
                  <NavigationMenu.Link
                    className="NavigationMenuLink"
                    href="/events"
                  >
                    Events
                  </NavigationMenu.Link>
                </li>
                <li className="ListItem">
                  <NavigationMenu.Link
                    className="NavigationMenuLink"
                    href="/open-projects"
                  >
                    Open Projects
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item></NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/gallery">
              Gallery
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="NavigationMenuLink"
              href="/contact-us"
            >
              Contact
            </NavigationMenu.Link>
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
