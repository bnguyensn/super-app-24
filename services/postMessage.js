const SPECIAL = {
  // %1B
  ESC: ``,

  // %0D
  CR: `\r`,

  // %0A
  LF: `\n`,
};

const DECORATIONS = {
  BOLD: [`${SPECIAL.ESC}[1m`, `${SPECIAL.ESC}[0m`],
  ITALIC: [`${SPECIAL.ESC}[4m`, `${SPECIAL.ESC}[0m`],
  REVERSED: [`${SPECIAL.ESC}[7m`, `${SPECIAL.ESC}[0m`],
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

function addDecoration(message, decoration) {
  if (decoration) {
    const decorationNormalized = decoration.toUpperCase();

    if (DECORATIONS[decorationNormalized]) {
      return wrapMessage(
        message,
        DECORATIONS[decorationNormalized][0],
        DECORATIONS[decorationNormalized][1]
      );
    }

    return message;
  }

  return message;
}

function colorize(message, color) {
  if (color) {
    const colorNormalized = color.toUpperCase();

    if (COLORS[colorNormalized]) {
      return wrapMessage(
        message,
        COLORS[colorNormalized][0],
        COLORS[colorNormalized][1]
      );
    }

    return message;
  }

  return message;
}

function removeGET(message, originalMessage) {
  // If the original message is less than 3 characters, the CR won't cover the
  // "GET" text. Thus we pad it with some spaces.
  if (originalMessage.length < 3) {
    return `${SPECIAL.CR}${message}  `;
  }

  return `${SPECIAL.CR}${message}`;
}

function addUserName(message, username) {
  if (!username) {
    return message;
  }

  const decoratedUsername = addDecoration(`@${username}:`, 'bold');

  return `${SPECIAL.CR}${decoratedUsername} ${message}`;
}

export default async function postMessage(message, { color, username } = {}) {
  try {
    const HOST_URL = `https://blog.repl.it`;

    let msgToSend = colorize(message, color);
    msgToSend = username
      ? addUserName(msgToSend, username)
      : removeGET(msgToSend, message);

    const url = `${HOST_URL}/${encodeURIComponent(msgToSend)}`;

    await fetch(url);
  } catch (err) {
    return err;
  }
}
