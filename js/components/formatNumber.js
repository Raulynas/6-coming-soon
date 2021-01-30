function formatNumber(number, position = 2) {
  if (typeof number !== "number" || !isFinite(number)) {
    console.error("ERROR: number has to be valid");
    return false;
  }
  if (
    typeof position !== "number" ||
    !isFinite(position) ||
    position % 1 !== 0 ||
    position < 0 ||
    position > 10
  ) {
    console.error("ERROR: position has to be valid");
    return false;
  }

  {
  }

  const fixed = 10 ** position;
  return Math.round(number * fixed) / fixed;
}
export { formatNumber };
