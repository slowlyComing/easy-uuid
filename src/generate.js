import md5 from 'md5'


function randomUUID(length) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charsLength = chars.length;
  let uuid = '';

  for (let i = 0; i < length; i++) {
    uuid += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return uuid.toLocaleLowerCase();
}



function timestampRandomMd5UUID(){

    const timestamp = new Date().getTime().toString(16);
    const random = Math.random().toString(16).slice(2, 10);
    const node = Math.random().toString(16).slice(2, 10); 

    return md5(timestamp + '-' + random + '-' + node);

}


export{
  randomUUID,
  timestampRandomMd5UUID
}