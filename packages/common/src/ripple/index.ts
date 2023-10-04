interface RippleArguments {
  event: MouseEvent;
  color?: string;
  element: HTMLElement;
}

const options: KeyframeAnimationOptions = {
  duration: 400,
  easing: "ease-in-out",
};
export const ripple = ({ event, element }: RippleArguments) => {
  let rippleElement = document.createElement("div");
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
  rippleElement.style.zIndex = "-1";
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
  if (!rippleElement.parentElement) {
    element.style.overflow = "hidden";
    // otherwise Safari / iOS won't honor the overflow: hidden rule
    element.style.transform = "translateZ(0)";
    element.appendChild(rippleElement);
  }
  const mainFinishHandler = () => {
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
          rippleElement.parentElement.style.clipPath = "";
          rippleElement.remove();
          // rippleElement = null;
          // outLock = false;
        },
        { once: true }
      );
    }, 0);
  };

  // handlerFired = false;
  const rippleAnimation = rippleElement.animate(
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
  rippleAnimation.addEventListener("finish", mainFinishHandler, {
    once: true,
  });
};
