const RPC=require("discord-rpc");
require("dotenv").config();
const fs = require('fs');
const client=new RPC.Client({
    transport: "ipc"
});

var details=process.env.DETAILS;
var state=process.env.STATE;
var large_image_text=process.env.LARGE_IMAGE_TEXT;
var small_image_text=process.env.SMALL_IMAGE_TEXT;
var files = fs.readdirSync('Images/');
var large_image_key=files[Math.floor(Math.random()*files.length)];
var small_image_key=files[Math.floor(Math.random()*files.length)];

client.on("ready", () => {
    client.setActivity({
        buttons: [{'label': "Join !", 'url': "https://discord.gg/xjnHhCJHxJ"}],
        startTimestamp: new Date(),
        details: `${details}`,
        state: `${state}`,
        largeImageKey: `${large_image_key}`,
        largeImageText: `${large_image_text}`,
        smallImageKey: `${small_image_key}`,
        smallImageText: `${small_image_text}`
    })
    console.log("Connected to discord, RPC is now Active!");
    console.log(`Images Used,\nSmall Image: ${small_image_key}\nLarge Image: ${large_image_key}`);
});

client.login({
    clientId: process.env.CLIENT_ID
});