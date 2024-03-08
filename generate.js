function generateUUID(length) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charsLength = chars.length;
  let uuid = '';

  for (let i = 0; i < length; i++) {
    uuid += chars.charAt(Math.floor(Math.random() * charsLength));
  }

  return uuid;
}

// 生成 32 位的 UUID
const uuid32 = generateUUID(32);
console.log('32 位 UUID:', uuid32);

// 生成 16 位的 UUID
const uuid16 = generateUUID(16);
console.log('16 位 UUID:', uuid16);
