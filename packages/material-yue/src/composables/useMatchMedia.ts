import { onMounted, onUnmounted, Ref, ref } from "vue";

export const MOBILE = "mobile";
export const TABLET = "tablet";
export const LAPTOP = "laptop";
export const DESKTOP = "desktop";
export const useMatchMedia: () => { mediaMatch: Ref<string> } = () => {
  const mediaMatch = ref(MOBILE);
  const mobileQuery = window.matchMedia("(max-width: 599px)");
  const tabletQuery = window.matchMedia(
    "(min-width: 600px) and (max-width: 1239px)"
  );
  const laptopQuery = window.matchMedia(
    "(min-width: 1240px) and (max-width: 1439px)"
  );
  const desktopQuery = window.matchMedia("(min-width: 1440px)");
  const setMatch = () => {
    switch (true) {
      case mobileQuery.matches:
        console.log("mobile");
        mediaMatch.value = MOBILE;
        break;
      case tabletQuery.matches:
        console.log("tablet");
        mediaMatch.value = TABLET;
        break;
      case laptopQuery.matches:
        console.log("laptop");
        mediaMatch.value = LAPTOP;
        break;
      case desktopQuery.matches:
        console.log("desktop");
        mediaMatch.value = DESKTOP;
        break;
      default:
        break;
    }
  };
  setMatch();
  onMounted(() => {
    mobileQuery.addEventListener("change", setMatch);
    tabletQuery.addEventListener("change", setMatch);
    laptopQuery.addEventListener("change", setMatch);
    desktopQuery.addEventListener("change", setMatch);
  });
  onUnmounted(() => {
    mobileQuery.removeEventListener("change", setMatch);
    tabletQuery.removeEventListener("change", setMatch);
    laptopQuery.removeEventListener("change", setMatch);
    desktopQuery.removeEventListener("change", setMatch);
  });
  return { mediaMatch };
};
