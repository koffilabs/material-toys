interface MorphArguments {
  startNode: HTMLElement;
  endNode: HTMLElement;
}

export const morphTo = ({ startNode, endNode }: MorphArguments) => {
  const max = Math.max;
  const {
    x: startOffsetLeft,
    y: startOffsetTop,
    width: startOffsetWidth,
    height: startOffsetHeight,
  } = startNode.getBoundingClientRect();
  const {
    x: endOffsetLeft,
    y: endOffsetTop,
    width: endOffsetWidth,
    height: endOffsetHeight,
  } = endNode.getBoundingClientRect();
  const probeNode = document.createElement("div");
  probeNode.style.position = "absolute";
  const topDelta = (endOffsetHeight - startOffsetHeight) / 2;
  const leftDelta = (endOffsetWidth - startOffsetWidth) / 2;
  probeNode.style.top = `${startOffsetTop - topDelta}px`;
  probeNode.style.left = `${startOffsetLeft - leftDelta}px`;
  probeNode.style.height = `${max(startOffsetHeight, endOffsetHeight)}px`;
  probeNode.style.width = `${max(startOffsetWidth, endOffsetWidth)}px`;
  probeNode.style.background = `rgba(255, 0, 0, .6)`;
  console.log("custom attr", startNode.dataset.yueClipPath);
  // damn, clip-path is converted to absolute values...
  probeNode.style.clipPath = startNode.dataset.yueClipPath
    .replace(/M/, "m")
    // .replace(/path\("/, `path("m ${leftDelta} ${topDelta} `)
    .replace(/path\('/, `path('m ${leftDelta} ${topDelta} `); // TODO: better regexp
  console.log(
    startNode.dataset.yueClipPath
      .replace(/M/, "m")
      // .replace(/path\("/, `path("m ${leftDelta} ${topDelta} `)
      .replace(/path\('/, `path('m ${leftDelta} ${topDelta} `)
  );
  document.body.appendChild(probeNode);

  probeNode.animate(
    [
      { transform: "translate(0px, 0px)", clipPath: probeNode.style.clipPath },
      {
        transform: `translate(${
          endOffsetLeft - startOffsetLeft + leftDelta
        }px, ${endOffsetTop - startOffsetTop + topDelta}px)`,
        clipPath: endNode.dataset.yueClipPath
          // .replace(/path\("/, `path("m 0 0 `)
          .replace(/path\('/, `path('m 0 0 `),
      },
    ],
    {
      duration: 2000,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );
};
