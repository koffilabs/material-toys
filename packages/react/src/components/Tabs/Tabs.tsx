import React, {
  Children,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useThemeContexts } from "../../hooks/useThemeContexts";
import { useComponentClass } from "../../hooks/useComponentClass";
import { usePrevious } from "../../hooks/usePrevious";
import { SwipeEventData, useSwipeable } from "react-swipeable";
import { Tab } from "./Tab";
import { TabSection } from "./TabSection";
const widthMultiplier = 1.25;
interface TabsInterface {
  children: ReactNode;
  type?: "primary" | "secondary";
  fixed?: boolean;
}
export const Tabs = ({
  children,
  type = "primary",
  fixed = false,
}: TabsInterface) => {
  const isLoading = useRef(true);
  const activeIndicatorRef = useRef<HTMLDivElement | null>(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const previousSelectedTab = usePrevious(selectedTab, 0);
  const indicatorAnimationRef = useRef<Animation | undefined | null>(null);
  const { ThemeContext } = useThemeContexts();
  const tokens = useContext<any>(ThemeContext);
  const refs = useRef<(HTMLElement | null)[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);
  const childrenArray = Children.toArray(children);
  const tabs = childrenArray.filter((child: any) => {
    return child.type === Tab;
  });

  const __swipeHandlers = useMemo(() => {
    return {
      onSwiped: (eventData: SwipeEventData) => {
        if (
          (eventData.deltaX < 0 && selectedTab === tabs.length - 1) ||
          (eventData.deltaX > 0 && selectedTab === 0)
        ) {
          return;
        }
        const w =
          slidingSectionRef?.current?.getBoundingClientRect().width ?? 0;

        // should animate
        slidingSectionRef &&
          slidingSectionRef.current &&
          (slidingSectionRef.current.style.transform = `translateX(${
            eventData.deltaX - w * selectedTab
          }px)`);
        let direction = 0;
        if (eventData.deltaX < 0 && Math.abs(eventData.deltaX) > w / 2) {
          direction = 1;
        }
        if (eventData.deltaX > 0 && eventData.deltaX > w / 2) {
          direction = -1;
        }
        if (direction !== 0) {
          setSelectedTab((previous) => {
            return Math.max(0, Math.min(tabs.length - 1, previous + direction));
          });
        } else {
          // animation only
          if (
            indicatorAnimationRef?.current &&
            "playbackRate" in indicatorAnimationRef.current
          ) {
            indicatorAnimationRef.current?.updatePlaybackRate(-1);
            indicatorAnimationRef?.current?.play();
          }

          if (slidingSectionRef?.current) {
            slidingSectionRef.current
              .animate(
                {
                  transform: `translateX(-${100 * selectedTab}%)`,
                },
                {
                  ...animationOptions,
                  duration: animationOptions.duration,
                  fill: "none",
                }
              )
              .addEventListener(
                "finish",
                () => {
                  if (slidingSectionRef?.current) {
                    slidingSectionRef.current.style.transform = `translateX(-${
                      100 * selectedTab
                    }%)`;
                  }
                },
                { once: true }
              );
          }
        }
      },
      onSwiping: (eventData: SwipeEventData) => {
        const nextTabIndex = selectedTab + (eventData.deltaX < 0 ? 1 : -1);
        if (nextTabIndex < 0 || nextTabIndex === tabs.length) {
          // out of bounds
          return;
        }
        const w =
          slidingSectionRef?.current?.getBoundingClientRect().width ?? 0;
        const animation = getIndicatorAnimation(
          selectedTab,
          selectedTab + (eventData.deltaX < 0 ? 1 : -1)
        );
        if (eventData.deltaX && animation) {
          animation.currentTime =
            (animationOptions.duration as number) *
            (Math.abs(eventData.deltaX) / w);
        }
        if (indicatorAnimationRef.current) {
          // removes the animation and avoid HUGE memory leaks
          indicatorAnimationRef.current?.cancel();
        }
        indicatorAnimationRef.current = animation;
        slidingSectionRef &&
          slidingSectionRef.current &&
          (slidingSectionRef.current.style.transform = `translateX(${
            eventData.deltaX - w * selectedTab
          }px)`);
      },
    };
  }, [selectedTab]);
  const getIndicatorAnimation = (fromTab: number, toTab: number) => {
    const previousSelectedRect = (
      type === "primary"
        ? refs?.current?.[fromTab]?.querySelector(".mt-tab-content")
        : refs?.current?.[fromTab]
    )?.getBoundingClientRect();
    const selectedRect = (
      type === "primary"
        ? refs?.current?.[toTab]?.querySelector(".mt-tab-content")
        : refs?.current?.[toTab]
    )?.getBoundingClientRect();
    const containerRect = ref?.current?.getBoundingClientRect();
    if (!selectedRect || !previousSelectedRect || !containerRect) {
      return;
    }
    const indicatorAnimation: Animation = activeIndicatorRef?.current?.animate(
      fromTab < toTab
        ? // left to right
          [
            {
              width: `${previousSelectedRect?.width}px`,
              transform: `translateX(calc(${
                previousSelectedRect.x - containerRect.x
              }px)`,
            },
            // expand
            {
              width: `${100 / (tabs.length * widthMultiplier)}%`,
              transform: `translateX(${
                previousSelectedRect.x - containerRect.x
              }px)`,
              offset: 0.33,
            },
            // move
            {
              width: `${100 / (tabs.length * widthMultiplier)}%`,
              transform: `translateX(calc(${
                selectedRect.x + selectedRect.width - containerRect.x
              }px - 100%))`,
            },
            // shrink
            {
              width: `${selectedRect.width}px`,
              transform: `translateX(calc(${
                selectedRect.x + selectedRect.width - containerRect.x
              }px - 100%))`,
            },
          ]
        : // right to left
          [
            {
              width: `${previousSelectedRect.width}px`,
              transform: `translateX(calc(${
                previousSelectedRect.x +
                previousSelectedRect.width -
                containerRect.x
              }px - 100%))`,
            },
            // expand
            {
              width: `${100 / (tabs.length * widthMultiplier)}%`,
              offset: 0.33,
              transform: `translateX(calc(${
                previousSelectedRect.x +
                previousSelectedRect.width -
                containerRect.x
              }px - 100%))`,
            },
            // move
            {
              width: `${100 / (tabs.length * widthMultiplier)}%`,
              transform: `translateX(${selectedRect.x - containerRect.x}px)`,
            },
            // shrink
            {
              width: `${selectedRect.width}px`,
              transform: `translateX(${selectedRect.x - containerRect.x}px)`,
            },
          ],
      {
        ...animationOptions,
        duration: isLoading.current ? 0 : animationOptions.duration,
      }
    ) as Animation;

    indicatorAnimation.pause();
    indicatorAnimation?.commitStyles();
    indicatorAnimation?.addEventListener("finish", () => {
      indicatorAnimationRef.current = null;
      isLoading.current = false;
    });

    return indicatorAnimation;
  };
  const swipeHandlers = useSwipeable({
    onSwiped: __swipeHandlers.onSwiped,
    onSwiping: __swipeHandlers.onSwiping,
    trackMouse: false,
    trackTouch: true,
  });
  const slidingSectionRef = useRef<HTMLElement>();
  const swipeHandlersRef = swipeHandlers.ref;
  swipeHandlers.ref = (el) => {
    if (el) {
      slidingSectionRef.current = el;
      swipeHandlersRef(el);
    }
  };
  const { className: tabsClass } = useComponentClass({
    path: "components.Tabs",
  });
  const animationOptions: KeyframeAnimationOptions = {
    duration: 300,
    easing: `cubic-bezier(${tokens.MdSysMotionEasingStandard})`,
    fill: "forwards",
  };
  const moveActiveIndicator = useCallback(
    (selectedTab, previousSelectedTab) => {
      if (indicatorAnimationRef.current) {
        indicatorAnimationRef?.current?.play();
      }
      if (slidingSectionRef?.current) {
        slidingSectionRef.current
          .animate(
            {
              transform: `translateX(-${100 * selectedTab}%)`,
            },
            {
              ...animationOptions,
              duration: isLoading.current ? 0 : animationOptions.duration,
              fill: "none",
            }
          )
          .addEventListener(
            "finish",
            () => {
              if (slidingSectionRef?.current) {
                slidingSectionRef.current.style.transform = `translateX(-${
                  100 * selectedTab
                }%)`;
              }
            },
            { once: true }
          );
      }
    },
    [selectedTab]
  );
  const sections = childrenArray.filter((child: any) => {
    return child.type === TabSection;
  });
  const onTabClick = (index: number) => {
    indicatorAnimationRef.current = null;
    setSelectedTab(index);
  };
  useEffect(() => {
    !indicatorAnimationRef.current &&
      (indicatorAnimationRef.current = getIndicatorAnimation(
        previousSelectedTab,
        selectedTab
      ));
    moveActiveIndicator(selectedTab, previousSelectedTab);
  }, [selectedTab]);
  return (
    <div
      ref={ref}
      className={`${tabsClass}${type === "primary" ? "" : " secondary"}`}
    >
      <div className="mt-tabs-header">
        {tabs.map((tab, i) => {
          return (
            <div
              className={`mt-tab${i === selectedTab ? " mt-active-tab" : ""}`}
              onClick={() => {
                onTabClick(i);
              }}
              ref={(element) => {
                refs.current[i] = element;
              }}
              key={i}
            >
              {tab}
            </div>
          );
        })}
        <div className={"mt-tabs-stripe"}>
          <div
            ref={activeIndicatorRef}
            className="mt-tab-active-indicator"
          ></div>
        </div>
      </div>
      {fixed ? (
        <div className={"mt-fixed-tabs-container"}>
          <div {...swipeHandlers} className={"mt-fixed-tabs-sliding-section"}>
            {sections.map((section, i) => {
              return (
                <div className={"mt-fixed-tab-content"} key={i}>
                  {section}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        sections.map((section, i) => {
          return i === selectedTab && <div key={i}>{section}</div>;
        })
      )}
    </div>
  );
};
