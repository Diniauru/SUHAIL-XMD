const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_35_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTksXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkgzak1lNTZPa0VzbE50Z2E5MVlDMU50Ty8yUHRWdVRWZU4wOUVxMnNjR1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNsLUhjM3NkUUdxUjNURXJqSHRrMkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTNkNTdjMjQtYmExMi00NDBlLWI3NWQtNGZkOWI5MWVhNzU5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDI0NyxcbiAgICAgIDEzMyxcbiAgICAgIDc3LFxuICAgICAgMTMxLFxuICAgICAgOCxcbiAgICAgIDQxLFxuICAgICAgODYsXG4gICAgICAxMTYsXG4gICAgICAyMTksXG4gICAgICAxMDEsXG4gICAgICA5OSxcbiAgICAgIDEwMSxcbiAgICAgIDEwNyxcbiAgICAgIDYxLFxuICAgICAgMTAwLFxuICAgICAgMTYwLFxuICAgICAgOTQsXG4gICAgICAxOSxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICA0OCxcbiAgICAgIDE3MyxcbiAgICAgIDM3LFxuICAgICAgMTAyLFxuICAgICAgMzgsXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDE0NyxcbiAgICAgIDU0LFxuICAgICAgMTYxLFxuICAgICAgMTc1LFxuICAgICAgMTg3LFxuICAgICAgMTc5LFxuICAgICAgNDIsXG4gICAgICA0MixcbiAgICAgIDEyMCxcbiAgICAgIDIyMCxcbiAgICAgIDE4NCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIMTRLTE5KNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njg4NDQ2MTY6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNzYzNjk0MTQzOTA0Njo0MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNS0FwUGdGRUlXSDRya0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9sWEJrbGdTeGZsbEltNTFkWjc2VVJmRkJKTkZnVGVJOUh4czlXbGJWMzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaTgwY2NPblNabXExK3ZVZHNYKytXM3N3Nk9ERVRENXVNTFZhbmN4VUNTYi82MnNlTXh0STFlLzFBMmZPMDV5VnFSZnlXZ2l6T25NUWdIcHoyMSs5Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieWVxU1RUbDVBMzNVL2VMU2IrNktOK2lGZXlWQXRGNngwZUlFZG5sUW9TR1JCTGlJQ0dXb0FFa01HdUl1ZnlVY2owdGxySm0wYUhhUU9TUmV4czJEZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Njg4NDQ2MTY6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTc1NjkzNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp4QVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnhBLmpzb24iOiAie1wia2V5RGF0YVwiOlwia3BkTEdLRHFvWWVxTWFGd2dFVFAyNm1WNTl6alQ3TlpHU3ZkdWZNSWhjRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTk0NDI1NDEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk0Mjc1MDExMzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
