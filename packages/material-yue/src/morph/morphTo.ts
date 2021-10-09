interface MorphArguments {
  startNode: HTMLElement;
  endNode: HTMLElement;
}

export const morphTo = ({ startNode, endNode }: MorphArguments) => {
  console.log(`startNode ${startNode.offsetTop}`);
  const probeNode = document.createElement("div");
  probeNode.style.position = "absolute";
  probeNode.style.top = `${startNode.offsetTop}px`;
  probeNode.style.left = `${startNode.offsetLeft}px`;
  probeNode.style.height = `${startNode.offsetHeight}px`;
  probeNode.style.width = `${startNode.offsetWidth}px`;
  probeNode.style.border = `1px dashed red`;
  document.body.appendChild(probeNode);
};
