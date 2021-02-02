const BASE_URL = `https:/blog.repl.it`;

const SPECIAL = {
  ESC: ``,
};

const COLORS = {
  RED: [`${SPECIAL.ESC}[31m`, `${SPECIAL.ESC}[0m`],
  GREEN: [`${SPECIAL.ESC}[32m`, `${SPECIAL.ESC}[0m`],
  BLUE: [`${SPECIAL.ESC}[34m`, `${SPECIAL.ESC}[0m`],
  YELLOW: [`${SPECIAL.ESC}[33m`, `${SPECIAL.ESC}[0m`],
  MAGENTA: [`${SPECIAL.ESC}[35m`, `${SPECIAL.ESC}[0m`],
  CYAN: [`${SPECIAL.ESC}[36m`, `${SPECIAL.ESC}[0m`],
};

function wrapMessage(message, start, end) {
  return `${start}${message}${end}`;
}

function colorize(message, color) {
  if (color) {
    const colorNormalized = color.toUpperCase();

    if (Object.keys(COLORS).includes(colorNormalized)) {
      return wrapMessage(
        message,
        COLORS[colorNormalized][0],
        COLORS[colorNormalized][1]
      );
    }
  }

  return message;
}

export default async function postMessage(message, { color } = {}) {
  try {
    const formattedMessage = colorize(message, color);

    const url = `${BASE_URL}/${encodeURIComponent(formattedMessage)}`;

    await fetch(url);
  } catch (err) {
    return err;
  }
}
