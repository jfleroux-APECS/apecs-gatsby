// const regex = /style=".*?"/g;

export default function replaceWPCss(WPContent) {
  return WPContent.replaceAll("wp-block-columns", "columns")
    .replaceAll("wp-block-column", "column")
    .replaceAll("<h3", '<h3 class="title is-3 my-4"')
    .replaceAll("<p></p>", "<br/>")
    .replaceAll("<p", "<p class=\"my-2\"")
    .replaceAll("<h2", '<h2 class="title is-2"');
}
