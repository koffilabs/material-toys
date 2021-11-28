interface RippleArguments{
  event: MouseEvent;
  color?: string;
  element: HTMLElement;
}
const options: KeyframeAnimationOptions = {
  duration : 400,
  easing : "ease-in-out",
};

// TODO: find a better name, use is a bit confusing
export const useRipple = () => {
  let rippleElement;
  const rippleOut = () => {
    if(!rippleElement){
      return;
    }
    const anim = rippleElement.animate([
      {opacity: 1},
      {opacity: 0},
    ], options);
    anim.addEventListener("finish", () => {
      rippleElement.style.transform = "scale(0)";
      rippleElement.style.width = "";
      rippleElement.style.height = "";
      rippleElement.style.opacity = 1;
      console.log("should disappear...")
    })
  }
  const ripple = ({event, color, element}: RippleArguments) => {
    // if(element.querySelector(".ripple")){
    //   return;
    // }
    if(!rippleElement){
      rippleElement = document.createElement("div");
    }
    console.log("should do a ripple", event.offsetX);
    const x = event.offsetX;
    const y = event.offsetY;
    const { target }: { target: EventTarget } = event;
    const oWidth: number = (<HTMLElement>target).offsetWidth;
    const oHeight: number = (<HTMLElement>target).offsetHeight;

    // TODO: sin and cos here
    const side = Math.max(oWidth + 2 * Math.abs((oWidth / 2 - x)), oHeight + 2 * Math.abs((oHeight / 2 - y)));
    console.log(oWidth)
    console.log(side)
    rippleElement.className = "ripple";
    rippleElement.style.position = "absolute";
    rippleElement.style.top = `${y}px`;
    rippleElement.style.left = `${x}px`;
    rippleElement.style.transformOrigin = `center center`;
    // rippleElement.style.transform = "scale(0)";
    rippleElement.style.width = `${side}px`;
    rippleElement.style.height = `${side}px`;
    rippleElement.style.borderRadius = `50%`;
    // color && (rippleElement.style.background = `${color}`);
    // rippleElement.style.background = `black`;
    if(!rippleElement.parentElement){
      element.appendChild(rippleElement);
    }
    const rippleAnimation = rippleElement.animate([
        {
          transform: "translate(-50%, -50%) scale(0)"
        },
        {
          transform: "translate(-50%, -50%) scale(1)"
        }
      ],
  {...options, fill: "forwards"});
    rippleAnimation.addEventListener(
      "finish", () => {
        // rippleElement.remove()
      })
    // element.style.background = color;
  };
return {ripple, rippleOut}
}
