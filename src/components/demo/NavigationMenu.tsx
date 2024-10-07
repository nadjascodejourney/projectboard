import * as React from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Webdevelopment",
    href: "/projects",
    description: "Past Projects and Tech Stack.",
  },
  {
    title: "Webdesign",
    href: "/projects",
    description: "Designs I´ve created for websites.",
  },
  {
    title: "Current Projects",
    href: "/projects",
    description: "Projects, I'm currently working on.",
  },
  {
    title: "Other Projects",
    href: "/projects",
    description: "Other things I´ve done in the past.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/about" // Use `to` prop instead of `href`
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Nadja Probst
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Webdeveloper and UX/UI Designer with a strong background
                      in communication, education and arts.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/cv" title="CV">
                Learn more about me and my working experience.
              </ListItem>

              <ListItem href="/contact" title="Contact">
                How to get in touch with me.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 sm:w-[200px] md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/" className={navigationMenuTriggerStyle()}>
              Imprint
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={props.href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
