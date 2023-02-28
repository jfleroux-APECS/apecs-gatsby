export default function replaceWPCss(WPContent) {
  return WPContent.replaceAll("wp-block-columns", "columns")
    .replaceAll("wp-block-column", "column")
    .replaceAll("<p></p>", "<br/>")
    .replaceAll("<h3", '<h3 class="title is-3 my-4"')
    .replaceAll("<h2", '<h2 class="title is-2"')
    .replaceAll("has-text-align-center", "has-text-centered content my-2")
    .replaceAll("has-text-align-left", "has-text-left content my-2")
    .replaceAll("has-text-align-right", "has-text-right content my-2")
    .replaceAll(
      "wp-block-button__link has-background wp-element-button",
      "button is-rounded is-medium is-responsive"
    )
    .replaceAll("wp-block-button", "block my-4");
}
