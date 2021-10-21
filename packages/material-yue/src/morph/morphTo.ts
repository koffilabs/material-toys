interface MorphArguments {
  startNode: HTMLElement;
  endNode: HTMLElement;
}

export const morphTo = ({
  startNode,
  endNode,
}: MorphArguments): Promise<number> => {
  return new Promise((resolve, reject) => {
    const duration = 400;
    const easing = "ease-in-out";
    const fill = "forwards";

    const max = Math.max;
    const startClone = <HTMLElement>startNode.cloneNode(true),
      endClone = <HTMLElement>endNode.cloneNode(true);
    const {
      x: xs,
      y: ys,
      width: startOffsetWidth,
      height: startOffsetHeight,
    } = startNode.getBoundingClientRect();
    const startOffsetLeft = xs + window.scrollX;
    const startOffsetTop = ys + window.scrollY;
    const {
      x: xe,
      y: ye,
      width: endOffsetWidth,
      height: endOffsetHeight,
    } = endNode.getBoundingClientRect();
    const endOffsetLeft = xe + window.scrollX;
    const endOffsetTop = ye + window.scrollY;

    const movingNode = document.createElement("div");
    const topDelta = (endOffsetHeight - startOffsetHeight) / 2;
    const leftDelta = (endOffsetWidth - startOffsetWidth) / 2;
    const startCloneStartStyle = {
      transform: `scale(1)`,
      opacity: 1,
    };
    const startCloneEndStyle = {
      transform: `scale(${endOffsetHeight / startOffsetHeight})`,
      opacity: 0,
    };
    const endCloneStartStyle = {
      transform: `scale(${startOffsetHeight / endOffsetHeight})`,
      opacity: 0,
    };
    const endCloneEndStyle = {
      transform: `scale(1)`,
      opacity: 1,
    };
    startClone.style.clipPath = "none";
    startClone.style.position = "absolute";
    startClone.style.top = `${topDelta}px`;
    startClone.style.left = `${leftDelta}px`;
    startNode.style.visibility = `hidden`;
    startClone.style.transformOrigin = `center center`;
    endClone.style.clipPath = "none";
    endClone.style.position = "absolute";
    endClone.style.top = `0`;
    endClone.style.left = `0`;
    endClone.style.visibility = `visible`;
    endClone.style.transformOrigin = `center center`;

    movingNode.style.position = "absolute";
    movingNode.style.top = `${startOffsetTop - topDelta}px`;
    movingNode.style.left = `${startOffsetLeft - leftDelta}px`;
    movingNode.style.height = `${max(startOffsetHeight, endOffsetHeight)}px`;
    movingNode.style.width = `${max(startOffsetWidth, endOffsetWidth)}px`;
    movingNode.style.willChange = "clip-path transform";
    // remove me start
    // movingNode.style.border = `2px dashed red`;
    // remove me end

    // chromium based browsers convert clip-path:path(...) to absolute values
    movingNode.style.clipPath = startNode.dataset.yueClipPath
      .replace(/M/, "m")
      .replace(/path\('/, `path('m ${leftDelta} ${topDelta} `);
    movingNode.appendChild(startClone);
    movingNode.appendChild(endClone);
    document.body.appendChild(movingNode);

    const mainAnimation = movingNode.animate(
      [
        {
          transform: "translate(0px, 0px)",
          clipPath: movingNode.style.clipPath,
          backgroundColor: window.getComputedStyle(startNode).backgroundColor,
        },
        {
          transform: `translate(${
            endOffsetLeft - startOffsetLeft + leftDelta
          }px, ${endOffsetTop - startOffsetTop + topDelta}px)`,
          clipPath: endNode.dataset.yueClipPath
            // .replace(/path\("/, `path("m 0 0 `)
            .replace(/path\('/, `path('m 0 0 `),
          backgroundColor: window.getComputedStyle(endNode).backgroundColor,
        },
      ],
      {
        duration: duration,
        easing,
        fill,
      }
    );
    mainAnimation.addEventListener(
      "finish",
      () => {
        movingNode.remove();
        resolve(42);
      },
      { once: true }
    );

    startClone.animate([startCloneStartStyle, startCloneEndStyle], {
      duration,
      easing,
      fill,
    });
    endClone.animate([endCloneStartStyle, endCloneEndStyle], {
      duration,
      easing,
      fill,
    });
  });
};
