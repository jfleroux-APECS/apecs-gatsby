export default function slugify(toBeSlugified) {
  if (!toBeSlugified) {
    return;
  }
  const charactersToReplace =
    "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
  const templateForReplacingCharacters =
    "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
  const specialCharsRegex = new RegExp(
    charactersToReplace.split("").join("|"),
    "g"
  );
  return toBeSlugified
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(specialCharsRegex, (character) =>
      templateForReplacingCharacters.charAt(
        charactersToReplace.indexOf(character)
      )
    ) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with ‘and’
    .replace(/[^\w-]+/g, "") // Remove all non-word characters
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
