const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  console.log(`Nice to meet you, ${answer}.`);

  rl.question('What is an activity you like doing? ', (answer) => {
    console.log(`That sounds like fun.`);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Interesting choice.`);

      rl.question('Which meal is your favorite (eg: dinner, brunch, etc.)? ', (answer) => {
        console.log(`${answer} is delicious.`);

        rl.question('What is your favorite thing to eat for that meal? ', (answer) => {
          console.log(`Yum, ${answer} is one of my favorites too.`);

          rl.question('Which sport is your absolute favorite? ', (answer) => {
            console.log(`I love watching ${answer} too.`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Wow, ${answer} is an incredible superpower.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
