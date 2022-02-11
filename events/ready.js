
		/*client.user.setActivity(`ใช้ ${client.config.discord.prefix}help | อยู่ใน ${client.guilds.cache.size} เซิฟเวอร์`, { type: "STREAMING",
		url: "https://www.twitch.tv/im_just_non"})*/
function change_status(client) {
	try {
		client.user.setActivity(`${client.config.discord.prefix}help | ${client.guilds.cache.size} เซิฟเวอร์`, { type: "STREAMING",
		url: "https://www.twitch.tv/im_just_non",
			shardID: shard
		});
	} 
	catch (e) {
		client.user.setActivity(`${client.config.discord.prefix}help | ${client.guilds.cache.size} เซิฟเวอร์`, { type: "STREAMING",
		url: "https://www.twitch.tv/im_just_non",
			shardID: 0
		});
	}
}

module.exports = async (client) => {
	
	console.log("");
	console.log("Loaded All Event And Command Success !!");
	console.log("");
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);
	console.log("");
	console.log("BOT  " + client.user.tag + " IS READY");
	console.log("");
    
	console.log("-------------------------------------------------------------");
	
	change_status(client);
    //loop through the status per each 10 minutes
    setInterval(() => {
        change_status(client);
    }, 10 * 1000);

};

