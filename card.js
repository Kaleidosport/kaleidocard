#!/usr/bin/env node

"use strict"

import CHALK from "chalk"
import BOXEN from "boxen"
import LIST from "listr"
import LINK from "terminal-link"
import CLEAR from "clear"
import OPEN from "open"
import INQUIRER from "inquirer"

CLEAR()

const PROMPT = INQUIRER.createPromptModule()

const QUESTIONS = [
    {
        type: "list",
        name: "action",
        message: "What you wanna do?",
        choices: [
            {
                name: `Drop an ${CHALK.bold("email")}.`,
                value: () => {
                    OPEN(`mailto:anthony-lambert@becode.xyz`)
                    console.log(`I'll make sure to reach back asap. Stay safe in the meantime.`)
                }
            },
            {
                name: "Exit",
                value: () => console.log(`Have a nice day.`)
            }
        ]
    }
]

const DATA = {
    name: CHALK.green.bold("                    Anthony Lambert"),
    handle: CHALK.hex("#008080")("@Kaleidosport"),
    github: CHALK.hex("#FFD700")("https://github.com/kaleidosport"),
    linkedin: CHALK.blue("https://www.linkedin.com/in/anthonylambert14"),
    twitter: CHALK.hex("#00FFFF")("https://twitter.com/Kaleidosport"),
    website: CHALK.hex("#DC143C")("http://kaleidosport.net"),
    npx: CHALK.hex("#00FF7F")("npx kaleidosport-card"),
    labelGithub: CHALK.yellow.bold("Github:"),
    labelLinkedin: CHALK.blue.bold("LinkedIn:"),
    labelTwitter: CHALK.cyan.bold("Twitter:"),
    labelWebsite: CHALK.magenta.bold("My website:"),
    labelCard: CHALK.green.bold("My card:")
    // https://dev.to/harshhhdev/creating-a-npx-introduction-card-782
    // https://studioelsa.se/blog/open-source-oss-npx-business-card/
    // https://github.com/anmol098/npx_card/blob/master/card.js
    // https://github.com/chilts/npxcard
}

const ME = BOXEN(
    [
        `${DATA.name}`,
        ``,
        `${CHALK.bold("🛠️  An aspiring, hard-working web developer ⚒️")}`,
        ``,
        `${DATA.labelGithub} ${DATA.github}`,
        `${DATA.labelLinkedin} ${DATA.linkedin}`,
        `${DATA.labelTwitter} ${DATA.twitter}`,
        `${DATA.labelWebsite} ${DATA.website}`,
        ``,
        `${CHALK.bold("💳 My all-new card brings 'em all to my yard.")}`,
        ``,
        `${DATA.labelCard} ${DATA.npx}`,
        ``,
        `${CHALK.italic("Take care, see ya. 🍵")}`
    ].join("\n"),

    {
        margin: 1,
        float: "center",
        padding: 1,
        borderStyle: "double",
        borderColor: "green",
        topLeft: "+",
        topRight: "+",
        bottomLeft: "+",
        bottomRight: "+",
        title: "Kaleidosport",
        titleAlignment: "center"
    }
)

console.log(ME)

PROMPT(QUESTIONS).then(answer => answer.action())