const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function getRandomInt(max: number) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}

export function generatePassword(options: {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}) {
  let pool = "";
  let guaranteed: string[] = [];

  if (options.uppercase) {
    pool += UPPER;
    guaranteed.push(UPPER[getRandomInt(UPPER.length)]);
  }
  if (options.lowercase) {
    pool += LOWER;
    guaranteed.push(LOWER[getRandomInt(LOWER.length)]);
  }
  if (options.numbers) {
    pool += NUMBERS;
    guaranteed.push(NUMBERS[getRandomInt(NUMBERS.length)]);
  }
  if (options.symbols) {
    pool += SYMBOLS;
    guaranteed.push(SYMBOLS[getRandomInt(SYMBOLS.length)]);
  }

  if (!pool) return "";

  const remainingLength = Math.max(
    options.length - guaranteed.length,
    0
  );

  const result: string[] = [...guaranteed];

  for (let i = 0; i < remainingLength; i++) {
    result.push(pool[getRandomInt(pool.length)]);
  }

  

  // Shuffle result
  for (let i = result.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.join("");
}