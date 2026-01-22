export type StrengthLevel = {
  label: string;
  color: "red" | "yellow" | "green" | "purple";
  message: string;
  emoji: string;
  isFire: boolean;
};



export function getPasswordStrength(options: {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}): StrengthLevel {
  const { length, uppercase, lowercase, numbers, symbols } = options;

  const varietyCount = [uppercase, lowercase, numbers, symbols].filter(
    Boolean
  ).length;



  // 🔥 MAX HEAT MODE
  if (length === 20 && varietyCount === 4) {
    return {
      label: "INSANE",
      color: "purple",
      message: "🔥 MAXIMUM HEAT MODE. This thing is uncrackable.",
      emoji: "🔥",
      isFire: true,
    };
  }

  let score = 0;

  if (length >= 8) score++;
  if (length >= 12) score++;
  if (length >= 16) score++;
  if (length >= 20) score++;

  score += varietyCount;

  if (score <= 3) {
    return {
      label: "Weak",
      color: "red",
      message: "💀 This password will get cooked instantly.",
      emoji: "💀",
      isFire: false,
    };
  }

  if (score <= 5) {
    return {
      label: "Moderate",
      color: "yellow",
      message: "😐 Not bad, but not Fort Knox either.",
      emoji: "😐",
      isFire: false,
    };
  }

  if (score <= 7) {
    return {
      label: "Strong",
      color: "green",
      message: "💪 Pretty solid. You're safe.",
      emoji: "💪",
      isFire: false,
    };
  }

  return {
    label: "Very Strong",
    color: "green",
    message: "🛡️ This is extremely hard to crack.",
    emoji: "🛡️",
    isFire: false,
  };
}