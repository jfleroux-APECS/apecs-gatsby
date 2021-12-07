// const regex = /style=".*?"/g;

export default function replaceWPCss(WPContent) {
  return WPContent.replaceAll("wp-block-columns", "columns").replaceAll(
    "wp-block-column",
    "column"
  );
}
