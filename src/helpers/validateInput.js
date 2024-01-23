export const validateInput = (inputText) => {
  const trimmedText = inputText.trim();
  const singleSpacesOnly = trimmedText.replace(/\s+/g, ' ');
  return singleSpacesOnly.length > 0 ? singleSpacesOnly : false;
}