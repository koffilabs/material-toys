import dynamic from "next/dynamic";
import {
  useTheme,
  NavigationItem,
  NavigationHeadline,
  NavigationDrawer,
} from "@material-yue/react";
// import {} from "@material-yue/react";
import { useRouter } from "next/router";

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
import React, { useState } from "react";
import { Layout } from "../../components/Layout";

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
export default function NavigationRail() {
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
  return (
    <Layout>
      <ThemeContext.Provider value={reactiveTokens}>
        <VariantContext.Provider value={""}>
          <div>
            <NavigationDrawer
              railLabels={"selected"}
              activeItem={0}
              mode="rail"
            >
              <NavigationHeadline>Mail</NavigationHeadline>
              {navigationItems.map(({ label, icon, link }, i) => {
                return (
                  <NavigationItem
                    divider={i === 3}
                    key={i}
                    icon={icon}
                    onClick={() => {
                      // router.push(link);
                    }}
                    badge={i === 0 ? "100+" : ""}
                  >
                    <a>{label}</a>
                  </NavigationItem>
                );
              })}
            </NavigationDrawer>
          </div>
        </VariantContext.Provider>
      </ThemeContext.Provider>
    </Layout>
  );
}
