#!/usr/bin/env node

const figlet = require("figlet");
var term = require("terminal-kit").terminal;
const gradient = require("gradient-string");
function ram() {

term.cyan(figlet.textSync('Ramakrushna Biswal', { font: "Doom"}));
  term.yellow(
    "\nHey there! 👋 I'm Ramakrushna Biswal | Open Source Contributor | Much more....\n"
  );
  term.yellow(
    "\n🚀 Let's connect and explore the vast universe of coding together!\n"
  );
  term.yellow("\n   GitHub: "),console.log( gradient.instagram(" https://github.com/RamakrushnaBiswal"))
  term.yellow("\n   LinkedIn:"),console.log(gradient.instagram(" https://www.linkedin.com/in/ramakrushna-biswal/"));
  term.yellow("\n   G-dev:  "),console.log(gradient.instagram("https://g.dev/ramakrushna-biswal"))
  term.yellow("\n\n🌟 Excited to embark on coding adventures with you! 🌟\n");

  let duck = gradient("rainbow","blue").multiline(
    ["\n\n👋🏼 Have a great day! 👋🏼",
        "::====================>"
    ].join("\n")
  );

  console.log(duck);

}
ram()
