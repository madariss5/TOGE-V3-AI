const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// Dossier où les sessions sont stockées
global.SESSION_DIR = './lib/sessions';

// Créer le dossier des sessions s'il n'existe pas
if (!fs.existsSync(global.SESSION_DIR)) {
    fs.mkdirSync(global.SESSION_DIR, { recursive: true });
}

// ID de session (peut être défini via une variable d'environnement)
global.SESSION_ID = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"+JV9m6KbPj/Q5Bl1KiwRzM0ZUZCT98OWRRRWFhhsK3A="},"public":{"type":"Buffer","data":"p94aE9SFC/3Kml0kl1upm8fj8FYj+vKc1XFaKVhZoQo="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mKMXel6UrSlKE5aZzSjF+QimTnlVAFZjQOYlan4NClo="},"public":{"type":"Buffer","data":"Y/DtX1VgMIUUbQblT4YhfMI3JPXHqq5H1/0f27OwxXA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"EBPM/j1ofmWUYANZXR91tWqCZhAVfgSIVTJfh7t1A3c="},"public":{"type":"Buffer","data":"sTw1UvaK/OTtSIdSQbqeNOWa0xnr+5rpHLBKokd+iiI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wOwFF2jE+whqn6mzF/B0uz483wzRY1IWslugzvAdtlE="},"public":{"type":"Buffer","data":"kLkkfdvABpM5Ks/tDawJQ6bc0VYOY+N0TjX58fpF/nQ="}},"signature":{"type":"Buffer","data":"mJs0U57URg8ouzfWmvz6lyPtOpPcsQvTfO3pb+jwmej6pF8WOnkFY+HQejvp00AgRyxXZx4mMJQO+jOKKePrjQ=="},"keyId":1},"registrationId":103,"advSecretKey":"JEVKMFJ/mgssxJVRbvNgn++LKoJUTSAJcvYsOuqJlxo=","processedHistoryMessages":[{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"9EA3F8E8479DA03F84B620EEE8CC83D7"},"messageTimestamp":1741115998},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"C007DFBFE7375ED0B2DDACE7F435686A"},"messageTimestamp":1741115998},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"549C565F29D5BBE870BC7A5455673092"},"messageTimestamp":1741116002},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"8655BEE337921B1A846468594F474E11"},"messageTimestamp":1741116003},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"09C4E0DA08E8A6722A69A3D2C40BD56A"},"messageTimestamp":1741116003}],"nextPreKeyId":61,"firstUnuploadedPreKeyId":61,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"hy3D3aLbTMuPDQGcgMeuJg","phoneId":"d06cf6ae-6419-4d13-8b57-d809f5ad8e89","identityId":{"type":"Buffer","data":"tFfhxxqtAIbDGejBjQP9YVlGlJo="},"registered":true,"backupToken":{"type":"Buffer","data":"jxCUnUUAlhxFmTYrhFBcM/Usg9w="},"registration":{},"pairingCode":"R74QLSNT","me":{"id":"4915562378343:81@s.whatsapp.net","lid":"87712426110989:81@lid","name":"."},"account":{"details":"CM3PyS0Q2aSdvgYYASAAKAA=","accountSignatureKey":"72V11lIZvalJvF262bMXw34nKgRN9Ko3COgw+4H4eRs=","accountSignature":"MSL2r8VBLT9Q9LvDfxMBOXDQIGWeBGRMlXIqhKnqmJ/BSBY9mga5Cc2Aj8VLegSovNoa+ZLUo8VcuxRvVckHDg==","deviceSignature":"CwtQefKxbmuLKzR8Ee0Y7ozRU57Fgme/kpUTuFw8Vh8Kv4sMKdZEHfe1TdxjN1oagd6HqKLVjgumY36qSOFHiQ=="},"signalIdentities":[{"identifier":{"name":"4915562378343:81@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Be9lddZSGb2pSbxdutmzF8N+JyoETfSqNwjoMPuB+Hkb"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIAg=="},"lastAccountSyncTimestamp":1741115997,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAALZI"}'

// Chemin du fichier de session
global.SESSION_FILE = path.join(global.SESSION_DIR, `${global.SESSION_ID}.json`);

//contact details
global.ownernumber = [process.env.OWNER_NUMBER || "4915563151347"];
global.ownername = process.env.OWNER_NAME || "Martin";
global.ytname = "YT: kenzo3146";
global.socialm = "GitHub: toge012345";
global.location = "Europe";

global.botname = process.env.BOTNAME || "𝐓𝐎𝐆𝐄-𝐌𝐃-𝐕𝟑"; //name of the bot

//sticker details
global.stickername = process.env.STICKER || "𝐓𝐎𝐆𝐄-𝐌𝐃-𝐕𝟑";
global.packname = 'Sticker By';
global.author = process.env.AUTHOR || "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻";
//console view/theme
global.themeemoji = '𓅃';
global.wm = "𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻 𝐈𝐧𝐜 ✨";

//theme link
global.link = 'https://whatsapp.com/channel/0029VaiuD4s4IBhI0fzbv40Z';

//custom prefix
global.prefa = process.env.PREFIX || ".";

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false"; //auto welcome
global.autoRecording = false; //auto recording
global.autoTyping = false; //auto typing
global.autorecordtype = false; //auto typing + recording
global.autoread = false; //auto read messages
global.autobio = false; //auto update bio
global.anti212 = true; //auto block +212
global.autoread_status = false; //auto view status/story

//reply messages
global.mess = {
    done: '💫 *Here you go, sensei!* ',
    prem: '💫 *hello senpai, this feature is reserved for premium users only*',
    admin: '💫 *hello senpai, this feature is reserved for admins only*',
    botAdmin: '💫 *senpai, this feature can only be used when the bot is a group admin* ',
    owner: '💫 *hello senpai, this feature is reserved for the owner only*',
    group: '💫 *sensei, this feature is exclusively for groups*',
    private: '💫 *hello senpai, this feature is exclusively for private chats*',
    wait: '💫 *hello senpai, in process...* ',
    error: '💫 *hello senpai, there seems to be an error!*',
};

module.exports = {
    ownernumber: global.ownernumber,
    ownername: global.ownername,
    AUTO_BLOCK: process.env.PM_BLOCKER,
    STATUS_SAVER: "true",
    ANTI_BOT: "false",
    SESSION_ID: global.SESSION_ID, // Exporter l'ID de session
    SESSION_FILE: global.SESSION_FILE, // Exporter le chemin du fichier de session
};

global.thumb = fs.readFileSync('./lib/Assets/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});
