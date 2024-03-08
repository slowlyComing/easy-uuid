function generateUUID(length) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charsLength = chars.length;
  let uuid = '';

  for (let i = 0; i < length; i++) {
    uuid += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  return uuid;
}

