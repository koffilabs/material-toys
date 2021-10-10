interface MorphArguments {
  startNode: HTMLElement;
  endNode: HTMLElement;
}

export const morphTo = ({ startNode, endNode }: MorphArguments) => {
  const max = Math.max;
  console.log(`startNode ${startNode.offsetTop}`);
  const probeNode = document.createElement("div");
  probeNode.style.position = "absolute";
  const topDelta = (endNode.offsetHeight - startNode.offsetHeight) / 2;
  const leftDelta = (endNode.offsetWidth - startNode.offsetWidth) / 2;
  probeNode.style.top = `${startNode.offsetTop - topDelta}px`;
  probeNode.style.left = `${startNode.offsetLeft - leftDelta}px`;
  probeNode.style.height = `${max(
    startNode.offsetHeight,
    endNode.offsetHeight
  )}px`;
  probeNode.style.width = `${max(
    startNode.offsetWidth,
    endNode.offsetWidth
  )}px`;
  probeNode.style.background = `rgba(255, 0, 0, .6)`;
  // damn, clip-path is converted to absolute values...
  probeNode.style.clipPath = window
    .getComputedStyle(startNode)
    .clipPath.replace(/M/, "m")
    .replace(/path\("/, `path("m ${leftDelta} ${topDelta} `);
  console.log(
    window
      .getComputedStyle(startNode)
      .clipPath.replace(/M/, "m")
      .replace(/path\("/, `path("m ${leftDelta} ${topDelta} `)
  );
  document.body.appendChild(probeNode);

  probeNode.animate(
    [
      { clipPath: probeNode.style.clipPath },
      {
        clipPath: window
          .getComputedStyle(endNode)
          .clipPath.replace(/path\("/, `path("m 0 0 `),
      },
    ],
    {
      duration: 200,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );
};
