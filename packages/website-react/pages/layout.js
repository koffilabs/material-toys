import dynamic from "next/dynamic";
import {
  useTheme,
  NavigationItem,
  NavigationHeadline,
} from "@material-toys/react";
import { useRouter } from "next/router";

import {
  InboxIcon,
  SendIcon,
  FavoriteBorderIcon,
  DeleteOutlineIcon,
  OutlinedCircleIcon,
  ChangeHistoryIcon,
  CheckBoxOutlineBlankIcon,
  MenuIcon,
} from "@material-toys/icons-react";
import Link from "next/link";
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common/dist/common.esm";
import { useState } from "react";

const Application = dynamic(
  () =>
    import("@material-toys/react").then((mod) => {
      return mod.Application;
    }),
  {
    ssr: false,
  }
);
const tokens = { ...material_tokens_polyfill, ...material_tokens };
export default function Layout() {
  const router = useRouter();

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
      link: "/",
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
            activeItem={0}
            menuIcon={<MenuIcon />}
            hasCollapseButton={true}
            appBarArea={<>appbar</>}
            railLabels={"show"}
            mobileNavigaton={"drawer"}
            navigationArea={
              <>
                <NavigationHeadline>Mail</NavigationHeadline>
                {navigationItems.map(({ label, icon, link }, i) => {
                  return (
                    <NavigationItem
                      divider={i === 3}
                      key={i}
                      icon={icon}
                      onClick={() => {
                        router.push(link);
                      }}
                      badge={i === 0 ? "100+" : ""}
                    >
                      <a>{label}</a>
                    </NavigationItem>
                  );
                })}
                <div className="secondary">
                  <NavigationHeadline>Labels</NavigationHeadline>
                  {secondaryNavigationItems.map(({ label, icon, link }, i) => {
                    return (
                      <NavigationItem
                        onClick={() => {
                          router.push(link);
                        }}
                        key={i}
                        icon={icon}
                      >
                        <a>{label}</a>
                      </NavigationItem>
                    );
                  })}
                </div>
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
