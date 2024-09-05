const password = 'swe314';
const limit = 1000000000;
const generateRandomString = length => {
 const chars = 
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 const charsLength = chars.length;
 let result = '';
 for (let i = 0; i < length; i++) {
 result += chars.charAt(Math.floor(Math.random() * charsLength));
 }
 return result;
};
let attempts = 0;
const makeGuess = () => {
 let attempts = 0;
 let guess = '';
 while (guess !== password && attempts < limit) {
 guess = generateRandomString(password.length);
 attempts++;
 }
 if (attempts === limit) {
 console.log(`Password not cracked!`);
 return;
 }
 console.log(`Password cracked! It was ${guess}`);
 console.log(`It took ${attempts} attempts to crack the password with length 
${password.length}`);
 
};
makeGuess();


