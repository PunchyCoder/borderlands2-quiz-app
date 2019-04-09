
let questionIndex = 0;
let score = 0;

const QUESTIONS = [
  {  //
    number: 1,
    text: "What is the name of the planet Borderlands 2 takes place on?",
    choice1: "Middle Earth",
    choice2: "Spira",
    choice3: "Aincrad",
    choice4: "Pandora"
  },
  {
    number: 2,
    text: "Who is the main antagonist?",
    choice1: "Sir HammerLock",
    choice2: "Handsome Jack",
    choice3: "Wilhelm",
    choice4: "the Vault Hunters"
  },
  {
    number: 3,
    text: "What is Hyperion?",
    choice1: "An evil army",
    choice2: "A planet",
    choice3: "A weapons manufacturer",
    choice4: "None of the Above.."
  },
  {
    number: 4,
    text: "What are the names of the four main Vault Hunters?",
    choice1: "Handsome Jack|Moxxi|Wilhelm|Marcus",
    choice2: "Leonardo|Donatello|Michaelangelo|Raphael",
    choice3: "Maya|Axton|Salvador|Zer0",
    choice4: "ClapTrap|Wilhelm|Athena|Nisha"
  },
  {
    number: 5,
    text: "What is the name on Handsome Jack's Diamond horse?",
    choice1: "Butt Stallion",
    choice2: "Diamond Stallion",
    choice3: "Handsome Jack Jr.",
    choice4: "BoJack"
  },
  {
    number: 6,
    text: "Who was Marcus married to?",
    choice1: "Ellie",
    choice2: "Patricia Tannis",
    choice3: "Mad Moxxi",
    choice4: "You made this up!"
  },
  {
    number: 7,
    text: "Meta Question| Which actor does the voice for Sir Hammerlock?",
    choice1: "Matthew Mercer",
    choice2: "Jim Cummings",
    choice3: "Christopher Sabat",
    choice4: "J. Michael Tatum"
  },
  {
    number: 8,
    text: "Who is Firehawk?",
    choice1: "Matthew Mercer",
    choice2: "Lilith",
    choice3: "Mordecai",
    choice4: "None of the above.."
  },
  {
    number: 9,
    text: "Who is the most dangerous 13 year old?",
    choice1: "Gaige",
    choice2: "Lilith",
    choice3: "Tiny Tina",
    choice4: "Angel"
  },
  {
    number: 10,
    text: "How many different guns in Borderlands2 were there actually?",
    choice1: "just over 9000",
    choice2: "1 million",
    choice3: "6.5 million",
    choice4: "17.7 million"
  },
  {
    number: 11,
    text: "What color represents the highest rarity for weapons?",
    choice1: "purple",
    choice2: "cyan",
    choice3: "yellow",
    choice4: "pink"
  },
]

//can compare choices
const ANSWERS = [
                 "Pandora",
                 "Handsome Jack",
                 "A weapons manufacturer",
                 "Maya|Axton|Salvador|Zer0",
                 "Butt Stallion",
                 "Mad Moxxi",
                 "J. Michael Tatum",
                 "Lilith",
                 "Tiny Tina",
                 "17.7 million",
                 "cyan"
                ]





  