import dynamic from "next/dynamic";
import {
  useTheme,
  NavigationItem,
  NavigationHeadline,
} from "@material-yue/react";
// import {} from "@material-yue/react";
import {
  InboxIcon,
  SendIcon,
  FavoriteBorderIcon,
  DeleteOutlineIcon,
  OutlinedCircleIcon,
  ChangeHistoryIcon,
  CheckBoxOutlineBlankIcon,
} from "@material-yue/icons-react";
import Link from "next/link";
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-yue/common/dist/common.esm";
import { useState } from "react";

const Application = dynamic(
  () =>
    import("@material-yue/react").then((mod) => {
      return mod.Application;
    }),
  {
    ssr: false,
  }
);
const tokens = { ...material_tokens_polyfill, ...material_tokens };

export default function Layout() {
  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);
  const navigationItems = [
    {
      icon: <InboxIcon size={24} />,
      link: "/layout",
      label: "Inbox",
    },
    {
      icon: <SendIcon size={24} />,
      link: "/layout",
      label: "Outbox",
    },
    {
      icon: <FavoriteBorderIcon size={24} />,
      link: "/layout",
      label: "Favorites",
    },
    {
      icon: <DeleteOutlineIcon size={24} />,
      link: "/layout",
      label: "Trash",
    },
  ];
  const secondaryNavigationItems = [
    {
      icon: <OutlinedCircleIcon size={24} />,
      link: "/layout",
      label: "Label",
    },
    {
      icon: <ChangeHistoryIcon size={24} />,
      link: "/layout",
      label: "Label",
    },
    {
      icon: <CheckBoxOutlineBlankIcon size={24} />,
      link: "/layout",
      label: "Label",
    },
  ];
  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={""}>
        <div>
          <Application
            appBarArea={<>appbar</>}
            navigationArea={
              <>
                <NavigationHeadline>Mail</NavigationHeadline>
                {navigationItems.map(({ label, icon, link }, i) => {
                  return (
                    <NavigationItem
                      active={i === 0}
                      divider={i === 3}
                      key={i}
                      icon={icon}
                      label={
                        <Link href={link}>
                          <a>{label}</a>
                        </Link>
                      }
                      badge={i === 0 ? "100+" : ""}
                    />
                  );
                })}
                <NavigationHeadline>Labels</NavigationHeadline>
                {secondaryNavigationItems.map(({ label, icon, link }, i) => {
                  return (
                    <NavigationItem
                      key={i}
                      icon={icon}
                      label={
                        <Link href={link}>
                          <a>{label}</a>
                        </Link>
                      }
                    />
                  );
                })}
              </>
            }
            bodyArea={<>body</>}
            mobileNavigation="bar"
          />
        </div>
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
}
