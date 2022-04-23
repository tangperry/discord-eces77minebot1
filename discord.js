const { Client } = require('discord.js');
const ytdl = require('ytdl-core');
const { token } = require('./token.json');
const { prefix } = require('./config.json');
const client = new Client();

// 建立一個類別來管理 Property 及 Method
class Music {

    constructor() {
        /**
         * 下面的物件都是以 Discord guild id 當 key，例如：
         * this.isPlaying = {
         *     724145832802385970: false
         * }
         */

        /**
         * 機器人是否正在播放音樂
         * this.isPlaying = {
         *     724145832802385970: false
         * }
         */
        this.isPlaying = {};

        /**
         * 等待播放的音樂隊列，例如：
         * this.queue = {
         *     724145832802385970: [{
         *         name: 'G.E.M.鄧紫棋【好想好想你 Missing You】Official Music Video',
         *         url: 'https://www.youtube.com/watch?v=P6QXo88IG2c&ab_channel=GEM%E9%84%A7%E7%B4%AB%E6%A3%8B'
         *     }]
         * }
         */
        this.queue = {};

        // https://discord.js.org/#/docs/main/stable/class/VoiceConnection
        this.connection = {};

        // https://discord.js.org/#/docs/main/stable/class/StreamDispatcher
        this.dispatcher = {};
    }



    // resume(msg) {

    //     if (this.dispatcher[msg.guild.id]) {
    //         msg.channel.send('恢復播放');

    //         // 恢復播放
    //         this.dispatcher[msg.guild.id].resume();
    //     }

    // }

}



// 當 Bot 接收到訊息時的事件
client.on('message', async (msg) => {

    // 如果發送訊息的地方不是語音群（可能是私人），就 return
    // if (!msg.guild) return;

    // !!join
    if (msg.content === `${prefix}help`) {

            msg.channel.send('HI!!我是eces77minesv群的 機器人 我叫 ``` eces77minebot1 ```');

    }
});



// 連上線時的事件
client.on('ready', () => {
    console.log(` ${client.user.tag}機器人以登入!!`);
});

client.login(token);
