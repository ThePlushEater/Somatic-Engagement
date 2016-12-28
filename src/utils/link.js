export function convertLinksOpenInNewWindow(element) {
  let links = element.getElementsByTagName("a");
  for (var i = 0, l = links.length; i < l; i++) {
    links[i].target = "_blank";
  }
}
