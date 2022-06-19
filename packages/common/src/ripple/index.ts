interface RippleArguments {
  event: MouseEvent;
  color?: string;
  element: HTMLElement;
}
const options: KeyframeAnimationOptions = {
  duration: 400,
  easing: "ease-in-out",
};

// TODO: find a better name, use is a bit confusing
export const useRipple = () => {
  let rippleElement,
    outLock = false,
    rippleAnimation;
  const rippleOut = () => {
    if (!rippleElement || outLock) {
      return;
    }
    outLock = true;
    const rippleComputedTiming = rippleAnimation
      ? rippleAnimation.effect.getComputedTiming()
      : {};
    const delay =
      typeof rippleComputedTiming.progress === "number"
        ? (1 - rippleComputedTiming.progress) * rippleComputedTiming.duration
        : 0;
    rippleAnimation.addEventListener(
      "finish",
      () => {
        // console.log("animation end fired");
        // TODO: the delay does not work on chromium based browsers now, the opacity is set to 0.12 immediately it seems
        //  setTimeout workaround, remove when fixed
        setTimeout(() => {
          const anim = rippleElement.animate(
            [{ opacity: 0.12 }, { opacity: 0 }],
            options
          );
          anim.addEventListener(
            "finish",
            () => {
              rippleElement.remove();
              rippleElement = null;
              outLock = false;
            },
            { once: true }
          );
        }, 0);
      },
      { once: true }
    );
  };
  const ripple = ({ event, element }: RippleArguments) => {
    if (rippleElement) {
      return;
    }
    if (!rippleElement) {
      rippleElement = document.createElement("div");
    }
    const elementRect = element.getBoundingClientRect();
    const targetRect = (<HTMLElement>event.target).getBoundingClientRect();
    const x = event.offsetX + (targetRect.x - elementRect.x);
    const y = event.offsetY + (targetRect.y - elementRect.y);
    const { target }: { target: EventTarget } = event;
    const oWidth: number = (<HTMLElement>element).offsetWidth;
    const oHeight: number = (<HTMLElement>element).offsetHeight;

    const a = oWidth + 2 * Math.abs(oWidth / 2 - x);
    const b = oHeight + 2 * Math.abs(oHeight / 2 - y);
    const side = (a ** 2 + b ** 2) ** 0.5;
    rippleElement.className = "ripple";
    // rippleElement.style.backgroundColor = "";
    // color && (rippleElement.style.backgroundImage = `radial-gradient(circle at 50% 50%, ${color}, ${color} 40%, rgba(0, 0, 0, .3) 50%, ${color} 60%, ${color} 80%`);
    rippleElement.style.zIndex = "100";
    rippleElement.style.filter = "blur(10px)";
    rippleElement.style.position = "absolute";
    rippleElement.style.top = `${y}px`;
    rippleElement.style.left = `${x}px`;
    rippleElement.style.transformOrigin = `center center`;
    rippleElement.style.opacity = `.12`;
    rippleElement.style.transform = "scale(0)";
    rippleElement.style.width = `${side}px`;
    rippleElement.style.height = `${side}px`;
    rippleElement.style.borderRadius = `50%`;
    // color && (rippleElement.style.background = `${color}`);
    // rippleElement.style.background = `red`;
    if (!rippleElement.parentElement) {
      element.appendChild(rippleElement);
    }
    rippleAnimation = rippleElement.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0)",
        },
        {
          transform: "translate(-50%, -50%) scale(1)",
        },
      ],
      { ...options, fill: "forwards" }
    );
    // rippleAnimation.addEventListener(
    //   "finish",
    //   () => {
    //     // rippleElement.remove()
    //     // rippleElement.style.transform = "translate(-50%, -50%) scale(0)";
    //   },
    //   { once: true }
    // );
    // element.style.background = color;
  };
  return { ripple, rippleOut };
};
