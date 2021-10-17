import { Ref, watch } from "vue";
interface useClipPathDataArgs {
  root: Ref;
  style: object;
}
export default function useClipPathData({ root, style }: useClipPathDataArgs) {
  watch([root, style], ([currentRoot, currentStyle], [oldRoot, oldStyle]) => {
    currentStyle["clip-path"] &&
      currentRoot &&
      (currentRoot.dataset.yueClipPath = currentStyle["clip-path"]);
  });
  return {};
}
