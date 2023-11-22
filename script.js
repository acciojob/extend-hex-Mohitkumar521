const extendHex = (shortHex) => {
  // Remove the '#' if present
  shortHex = shortHex.replace('#', '');

  // Ensure the input is a valid short hex code
  if (!/^[0-9a-fA-F]{3}$/.test(shortHex)) {
    throw new Error('Invalid short hex code');
  }

  // Extend the short hex code to the full hex code
  const fullHex = shortHex
    .split('')
    .map(char => char.repeat(2))
    .join('');

  // Add the '#' prefix and return the full hex code
  return `#${fullHex.toUpperCase()}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

