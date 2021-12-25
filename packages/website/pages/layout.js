import dynamic from "next/dynamic";
import {
  NavigationArea,
  AppBarArea,
  BodyArea,
  useTheme,
} from "@material-yue/react";
// import {} from "@material-yue/react";
import { EditIcon, AddIcon } from "@material-yue/icons-react";
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
      icon: <EditIcon />,
      link: "/",
      label: "Home",
    },
    {
      icon: <AddIcon />,
      link: "/layout",
      label: "Layout",
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
                {navigationItems.map(({ label, icon, link }, i) => {
                  return (
                    <div key={i} style={{ display: "flex" }}>
                      {icon}
                      <Link href={link}>
                        <a>{label}</a>
                      </Link>
                    </div>
                  );
                })}
              </>
            }
            bodyArea={<BodyArea>body</BodyArea>}
            mobileNavigation="bar"
          />
        </div>
      </VariantContext.Provider>
    </ThemeContext.Provider>
  );
}
