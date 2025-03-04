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
global.SESSION_ID = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"aEOR3SK44tBWWy42iSmeF2gf7nWW2Cfax8XqgqAY4mM="},"public":{"type":"Buffer","data":"gFrZSMw+21h8f/ETiBHGLjzJgHZEw0TPm0YpJp20iiE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"+LUkJpFffQF22nM+lv+jl99/g+GcNALH4utELCY0MGg="},"public":{"type":"Buffer","data":"zt/PfwxVbQAPtWOar5JtM/ccKyDb7C6IZdnJUKDSHDE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wCXKtbjH/lKvORtyNKCdWdiIAazjY+yFwMFyqlRF+GI="},"public":{"type":"Buffer","data":"9A0Bq9zpGczP4txd/H7VQvxq2BW9flxyCfwbGKeawEk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4IT0FhaYQx/tVeW4dnOhRmxMNJMgpKGRR/QIx5ycMW4="},"public":{"type":"Buffer","data":"bREvxRQPbFSQSz+6L+7iSEvrD7JHZFBRCY7CQJHDbmc="}},"signature":{"type":"Buffer","data":"5GqHzOAL2GD2LO7MARMuXEmPgOclM192hroT+yfxQgUPBo1hefcyRPwDD2iThzK+VFfBs6QeiGgxLQoAcqDMAg=="},"keyId":1},"registrationId":131,"advSecretKey":"q42UqlGFXq2kj9EHHkYSKWlylNkhmoEhqHp+4AdKYVQ=","processedHistoryMessages":[{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"7BAE0F88226F9C80199FF89BE5D1AF73"},"messageTimestamp":1741114325},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"068F1AC8916015CA545ED5556AE1015F"},"messageTimestamp":1741114325},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"B3F349C56D75B058CEFA51377ECBB72B"},"messageTimestamp":1741114331},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"7F913A360A75776AD648F1AD182424E6"},"messageTimestamp":1741114333},{"key":{"remoteJid":"4915562378343@s.whatsapp.net","fromMe":true,"id":"33F48692E55B0FBE0EB770FB9BA570E1"},"messageTimestamp":1741114334}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"cB6f1ID6RpOAeomhB4elrw","phoneId":"18890954-277d-4746-8766-1a436c12a490","identityId":{"type":"Buffer","data":"qeuEl4Hx81U/YCiTUJqU8dOrGnw="},"registered":true,"backupToken":{"type":"Buffer","data":"k0JX4hAVMUOLjFkLelgTvyElOSo="},"registration":{},"pairingCode":"EXXW7CL4","me":{"id":"4915562378343:80@s.whatsapp.net","lid":"87712426110989:80@lid","name":"."},"account":{"details":"CMzPyS0Qz5edvgYYASAAKAA=","accountSignatureKey":"72V11lIZvalJvF262bMXw34nKgRN9Ko3COgw+4H4eRs=","accountSignature":"G83B0V+kr/m+frWKjKyO2oNdbB3PYsgp7hcTANJTshOkhQH82UxUhK81ecOgAHOFYYv+DzvBp2tc+lvSj2z2AA==","deviceSignature":"UB7TD7NrIUrSMNt/W6EadHpD6FuIpozXVojtBMeuveVe+p036/87eM3D1aUcMSifure5h4N6E+N/KhQtU/RfDA=="},"signalIdentities":[{"identifier":{"name":"4915562378343:80@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Be9lddZSGb2pSbxdutmzF8N+JyoETfSqNwjoMPuB+Hkb"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAUIAg=="},"lastAccountSyncTimestamp":1741114324,"lastPropHash":"PWk5B","myAppStateKeyId":"AAAAALZG"}'; // Utilisez une session par défaut si aucune n'est spécifiée

// Chemin du fichier de session
global.SESSION_FILE = path.join(global.SESSION_DIR, `${global.SESSION_ID}.json`);

//contact details
global.ownernumber = [process.env.OWNER_NUMBER || "24105114159"];
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
