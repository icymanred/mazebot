Voice
Documentation
GitHub

    Home
        Introduction
        Requesting more content
        What's new 

    Installations & Preparations
        Installing Node.js and discord.js
        Setting up a linter
        Setting up a bot application
        Adding your bot to servers 

    Creating Your Bot
        Initial files
            Creating configuration files
                Using config.json
                Using environment variables
                Git and .gitignore 
            Creating the main file
            Resulting code 
        Creating commands
        Command handling
        Event handling 

    Interactions
        Registering slash commands
        Replying to slash commands
        Slash command permissions
        Buttons
        Select menus 

    Popular Topics
        Frequently asked Questions
        Threads
        Embeds
        Builders
        Reactions
        Collectors
        Permissions
        Permissions (extended)
        Gateway Intents
        Partial Structures
        Webhooks
        Errors
        Working with Audit Logs
        Image manipulation with Canvas 

    Miscellaneous
        Parsing mentions
        Useful packages 

    Databases
        Storing data with Sequelize
        Making a Currency System
        Storing data with Keyv 

    Sharding
        Getting started
        Additional information
        Extended changes 

    OAuth2
        Getting started with OAuth2 

    Improving Your Dev Environment
        Managing your bot process with PM2
        Setting up package.json scripts 

    Additional Information
        Understanding notation
        ES6 syntax examples
        Collections
        Understanding async/await
        Using a REST API
        Updating from v12 to v13 

#
Initial files

Once you add your bot to a server, the next step is to start coding and get it online! Let's start by creating a config file for your client token and a main file for your bot application.
#
Creating configuration files

As explained in the "What is a token, anyway?" section, your token is essentially your bot's password, and you should protect it as best as possible. This can be done through a config.json file or by using environment variables.

Open your application in the Discord Developer Portal

and go to the "Bot" page to copy your token.
#
Using config.json

Storing data in a config.json file is a common way of keeping your sensitive values safe. Create a config.json file in your project directory and paste in your token. You can access your token inside other files by using require().

{
	"token": "your-token-goes-here"
}

DANGER

If you're using Git, you should not commit this file and should ignore it via .gitignore.
#
Using environment variables

Environment variables are special values for your environment (e.g., terminal session, Docker container, or environment variable file). You can pass these values into your code's scope so that you can use them.

One way to pass in environment variables is via the command line interface. When starting your app, instead of node index.js, use TOKEN=your-token-goes-here node index.js. You can repeat this pattern to expose other values as well.

You can access the set values in your code via the process.env global variable, accessible in any file. Note that values passed this way will always be strings and that you might need to parse them to a number, if using them to do calculations.

A=123 B=456 DISCORD_TOKEN=your-token-goes-here node index.js

#
Using dotenv

Another common approach is storing these values in a .env file. This spares you from always copying your token into the command line. Each line in a .env file should hold a KEY=value pair.

You can use the dotenv package

for this. Once installed, require and use the package to load your .env file and attach the variables to process.env:

npm install dotenv

A=123
B=456
DISCORD_TOKEN=your-token-goes-here

DANGER

If you're using Git, you should not commit this file and should ignore it via .gitignore.
Online editors (Glitch, Heroku, Replit, etc.)
#
Git and .gitignore

Git is a fantastic tool to keep track of your code changes and allows you to upload progress to services like GitHub
, GitLab, or Bitbucket

. While this is super useful to share code with other developers, it also bears the risk of uploading your configuration files with sensitive values!

You can specify files that Git should ignore in its versioning systems with a .gitignore file. Create a .gitignore file in your project directory and add the names of the files and folders you want to ignore:

node_modules
.env
config.json

TIP

Aside from keeping credentials safe, node_modules should be included here. Since this directory can be restored based on the entries in your package.json and package-lock.json files by running npm install, it does not need to be included in Git.

You can specify quite intricate patterns in .gitignore files, check out the Git documentation on .gitignore

for more information!
#
Creating the main file

Open your code editor and create a new file. We suggest that you save the file as index.js, but you may name it whatever you wish.

Here's the base code to get you started:

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
