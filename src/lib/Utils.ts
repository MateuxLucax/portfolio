export function scrollToElement(element: HTMLElement) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}