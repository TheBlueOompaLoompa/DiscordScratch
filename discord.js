import { Client, Intents } from 'https://raw.githubusercontent.com/discordjs/discord.js/webpack/discord.12.5.3.min.js';

class ScratchDiscord {
    client
    constructor() {
        client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    }
    
    getInfo() {
        return {
            id: "Discord",
            name: "Discord",
            blocks: [
                {
                    opcode: "login",
                    blockType: "reporter",
                    text: "login with [token]",
                    arguments: {
                        token: {
                            type: "string",
                            defaultValue: ""
                        },
                    }
                }
            ],
        };
    }
    
    login(args) {
        client.login(args.token)
    }
}

Scratch.extensions.register(new ScratchDiscord())