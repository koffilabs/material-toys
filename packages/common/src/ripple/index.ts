interface RippleArguments{
  event: MouseEvent;
  color?: string;
  element: HTMLElement;
}
const options: KeyframeAnimationOptions = {
  duration : 500,
  easing : "ease-in-out",
};

// TODO: find a better name, use is a bit confusing
export const useRipple = () => {
  let rippleElement, lock = false;
  const rippleOut = () => {
    if(!rippleElement){
      return;
    }
    const anim = rippleElement.animate([
      {opacity: .12},
      {opacity: 0},
    ], options);
    anim.addEventListener("finish", () => {
      // rippleElement.style.transform = "scale(0)";
      rippleElement.style.width = "";
      rippleElement.style.height = "";
      rippleElement.remove();
      lock = false;

    }, {once: true})
  }
  const ripple = ({event, color, element}: RippleArguments) => {
    if(lock){
      return;
    }
    lock = true;
    // if(element.querySelector(".ripple")){
    //   return;
    // }
    if(!rippleElement || lock){
      rippleElement = document.createElement("div");
    }
    const x = event.offsetX;
    const y = event.offsetY;
    const { target }: { target: EventTarget } = event;
    const oWidth: number = (<HTMLElement>target).offsetWidth;
    const oHeight: number = (<HTMLElement>target).offsetHeight;

    const a = oWidth + 2 * Math.abs((oWidth / 2 - x));
    const b = oHeight + 2 * Math.abs((oHeight / 2 - y));
    const side = (a**2 + b**2)**.5;
    rippleElement.className = "ripple";
    // rippleElement.style.backgroundColor = "";
    // color && (rippleElement.style.backgroundImage = `radial-gradient(circle at 50% 50%, ${color}, ${color} 40%, rgba(0, 0, 0, .3) 50%, ${color} 60%, ${color} 80%`);
    rippleElement.style.zIndex = "100";
    // rippleElement.style.filter = "blur(35px)";
    rippleElement.style.position = "absolute";
    rippleElement.style.top = `${y}px`;
    rippleElement.style.left = `${x}px`;
    rippleElement.style.transformOrigin = `center center`;
    rippleElement.style.opacity = `.12`;
    rippleElement.style.transform = "scale(0)";
    rippleElement.style.width = `${side}px`;
    rippleElement.style.height = `${side}px`;
    rippleElement.style.borderRadius = `50%`;
    color && (rippleElement.style.background = `${color}`);
    if(!rippleElement.parentElement){
      element.appendChild(rippleElement);
    }
    const rippleAnimation = rippleElement.animate([
        {
          transform: "translate(-50%, -50%) scale(0)",
          opacity: ".12"
        },
        {
          transform: "translate(-50%, -50%) scale(1)",
          opacity: ".12"
        }
      ],
  {...options, fill: "forwards"});
    rippleAnimation.addEventListener(
      "finish", () => {
        // rippleElement.remove()
          rippleElement.style.transform = "translate(-50%, -50%) scale(0)";
      }, { once: true })
    // element.style.background = color;
  };
return {ripple, rippleOut}
}
