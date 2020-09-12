const config = require("./config.json");

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!";

const isIncludeBanWords = (content) => {
  const bannedWords = ["before", "ban", "strike", "and", "tantrum", "is", "like", "mayan", "misango", "aztec", "rid", "no", "went", "of", "would", "could", "should", "why", "which", "but", "on", "sacred", "which", "com", "net", "org", "won", "lost", "beaten", "bashed", "he", "she", "they", "maybe", "pr", "na", "bot", "the", "religous", "can", "went", "holy", "hates", "spring", "ribbon", "ninja", "mauso", "via", "scrap", "beach", "dna", "sparring", "of", "edu", "Ban", "Bot", "Strike", "And", "Tantrum", "Is", "Like", "Mayan", "Misango", "Aztec", "Rid", "No", "Went", "Of", "Would", "Could", "Should", "Why", "Before", "Which", "But", "On", "Sacred", "Which", "Com", "Net", "Org", "Won", "Lost", "Beaten", "Bashed", "He", "She", "They", "Maybe", "Pr", "Na", "In", "The", "Religous", "Can", "Went", "Holy", "Hates", "Spring", "Ribbon", "Ninja", "Mauso", "Via", "Scrap", "Beach", "Dna", "Sparring", "Of", "Edu", "BAN", "STRIKE", "AND", "TANTRUM", "IS", "LIKE", "MAYAN", "MISANGO", "AZTEC", "RID", "NO", "WENT", "OF", "WOULD", "COULD", "SHOULD", "WHY", "WHICH", "BUT", "ON", "SACRED", "WHICH", "COM", "NET", "ORG", "WON", "LOST", "BEATEN", "BASHED", "HE", "SHE", "THEY", "MAYBE", "PR", "NA", "IN", "THE", "RELIGOUS", "CAN", "WENT", "HOLY", "HATES", "SPRING", "RIBBON", "NINJA", "MAUSO", "VIA", "SCRAP", "BEACH", "DNA", "SPARRING", "OF", "EDU",];
  for (const bannedWord of bannedWords) {
    if (content.indexOf(bannedWord) >= 0) {
      return true;
    }
  }
  return false;
}

client.on("message", function (message) {
  if (message.author.bot) return;
  const isMatchKeyword = message.content.match("Temple") || message.content.match("temple") || message.content.match("TEMPLE");
  if (isMatchKeyword && !isIncludeBanWords(message.content)) { // match keyword and NOT include banned word
    message.channel.send("https://cdn.discordapp.com/attachments/278000731125186560/750883416744001606/A9a0P768eBgtgAAAABJRU5ErkJggg_1.png")
  }

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
});

client.login(config.BOT_TOKEN);