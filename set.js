/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUVXM25HTTNxMEF4SjBTZUxzRDhHTElFY3QrYXUrY2YvNmpmVWRLZTltND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHVLaExadDB1MDlQZTI4WnJkWFY5WWlTc0V6SzVqbWlOUkpmaXUxbUZtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ1NVQXYzcWdxNFd3cUQwUjJJaHpKZXErUWtOTy90WnhjQ2tuaDA2QVVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RzZSSENEc0YxakFEd0hBdTBUTmZoRy9pdWtBeGgwZlFaQWRCUHd6MEFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDejRWN1d0MXJQS3J0WXRlN1VpY2ZOTTEyK1lZaVZ6c2ppcGUrbFYySG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpkemRMMTJCVCtZeERRQTVWK2phbkFDYUxCTksrOVhJdnFZUFMzcGRvQ1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xWRlNPTzdTNGdYekIrdTd6TExxSHRUYjNLelNSYTRaV01UWWZLSUJsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTBSb0xuelR0QjUreWlqNmtqQ2xxNDhITDkrUHp1bWxLbjNubGhhWmZUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndoNDlacUZGSm96MTM5T1VRcmVxd2dEcGxFQXpQY2t0OVc3aU1wV2srdDBBWldjNWUwY3ZHNEgrZFFZeG1lUXAva25ZTDBKN1NVV05VSG9ROG5uZEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6IjYyVllPQUxoaWVZRWVFTlJCdWpTK0g2eUdpWmxrTEYwVzhzcmx6c3ZpMVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMTMyODM4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MkI0MUI4ODYxQ0JCQzEyRjY2RDY5NUEwNTEyMUNEQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0ODMxNDM2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTIxMzI4MzgxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0NkRCMkExODAzMzA5NzVGQjA5OEYyMDg1NjZDNUQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQ4MzE0MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjEzMjgzODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzEzNThCNEMzRjU3QjhENDVEOTU0MzlGNTA4MkVCRTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDgzMTQ3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyMTMyODM4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1ODAyMEVEQzZCOEM2MTlCNTU2OTBCMkU2RUY3RkIyQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0ODMxNDc1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHaERMbVlKVVRVU29tVW5DdTJTT0R3IiwicGhvbmVJZCI6IjhlMjNmN2UwLWRjMzYtNDA3Ni1hYTk3LWE4OTgwYmNmNzMzMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2MDlDVjkwOEZVYXlsdWpFMnRRQjhyUld3aGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0tlMWQ5TVV6aUNuWGxmUzdoRVllTVcxaVlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVFV1dHQUxDIiwibWUiOnsiaWQiOiIyMzQ5MTIxMzI4MzgxOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQm90In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSFMwYzhIRUx5SGdNQUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLVGNMTUFoZkRSQlN2aGdLTk5OREVIcEFXQzg0enV5ZnpFWW5yYzg3YkY4PSIsImFjY291bnRTaWduYXR1cmUiOiJQRm90MXl0ekwrRVAybGdiY2cycU5XZk4ycmhYK0VpV0pOUXRlUnQ2Wlc2MzROTktUb3ZEYzJQR25sckZiYlpJOGFBRjBYYi9pdzdsTXdOUDZ4Sk1DZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQWZxYzdQK3NXMVNKOXpsTktPUkJxZzVNTmEzb1hEYzAxT1RNaWxoY0VYK1l1cFFNKytpWUhkTUV2V1ljY1FvQ1N3WU9xV0h0dmV4ZVVsS3pEZmJHQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTIxMzI4MzgxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2szQ3pBSVh3MFFVcjRZQ2pUVFF4QjZRRmd2T003c244eEdKNjNQTzJ4ZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NDgzMTQzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLcmQifQ==';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || 'Yūrei Bot𖤍';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'PhøenixFury';
const packname = process.env.STICKER_PACKNAME || 'PhøenixFury';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254114660061';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
