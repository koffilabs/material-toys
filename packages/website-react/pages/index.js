import dynamic from "next/dynamic";
import {
  useTheme,
  NavigationItem,
  NavigationHeadline,
} from "@material-toys/react";
import { useRouter } from "next/router";
import classes from "./index.module.scss";

import {
  InboxIcon,
  OutlinedTheatersIcon,
  FavoriteBorderIcon,
  DeleteOutlineIcon,
  OutlinedCircleIcon,
  ChangeHistoryIcon,
  CheckBoxOutlineBlankIcon,
} from "@material-toys/icons-react";
import Link from "next/link";
import {
  material_tokens,
  material_tokens_polyfill,
} from "@material-toys/common/dist/common.esm";
import { useState } from "react";

const Application = dynamic(
  () =>
    import("../examples/Application").then((mod) => {
      return mod.Application;
    }),
  {
    ssr: false,
  }
);
const tokens = { ...material_tokens_polyfill, ...material_tokens };
export default function Index() {
  const router = useRouter();

  const { ThemeContext, VariantContext } = useTheme();
  const [reactiveTokens, setReactiveTokens] = useState(tokens);
  const navigationItems = [
    {
      icon: <InboxIcon size={24} />,
      link: "/",
      label: "Inbox",
    },
    {
      icon: <OutlinedTheatersIcon size={24} />,
      link: "/",
      label: "Movies",
    },
    {
      icon: <FavoriteBorderIcon size={24} />,
      link: "/",
      label: "Favorites",
    },
    {
      icon: <DeleteOutlineIcon size={24} />,
      link: "/",
      label: "Trash",
    },
  ];
  const secondaryNavigationItems = [
    {
      icon: <OutlinedCircleIcon size={24} />,
      link: "/",
      label: "Label",
    },
    {
      icon: <ChangeHistoryIcon size={24} />,
      link: "/",
      label: "Label",
    },
    {
      icon: <CheckBoxOutlineBlankIcon size={24} />,
      link: "/",
      label: "Label",
    },
  ];
  return (
    <ThemeContext.Provider value={reactiveTokens}>
      <VariantContext.Provider value={""}>
        <div className={classes}>
          <Application
            activeItem={0}
            hasCollapseButton={true}
            railLabels={"selected"}
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
            mobileNavigation="bar"
          />
        </div>
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
}
