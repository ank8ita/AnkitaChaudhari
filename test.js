async function displayQuotes() {
  musicPlay()
  document.getElementById("quotesButton").style.display = "none";
  document.getElementById("quotesDiv").style.display = "block";
  const randomIndex = Math.floor(Math.random() * quotes.length);
  
  for (let i = randomIndex; i <= quotes.length; i++) {
    if(i === quotes.length){
      i = 0;
    }
    var sleepTime = quotes[i].quote.length * 100;

    document.getElementById("quote").innerHTML = quotes[i].quote;
    document.getElementById("author").innerHTML = "- " + quotes[i].author;
    if (i === quotes.length - 1) {
      i = -1;
    }
    await sleep(sleepTime);
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  

 function musicPlay() {
    document.getElementById('player').play()
 }

const quotes = [
   {
    "quote": "Always be yourself, express yourself, have faith in yourself. Do not go out and look for a successful personality and duplicate it",
    "author": "Bruce Lee"
  },
  {
    "quote": "The same boiling water that softens the potato hardens the egg. It's about what you're made of, not the circumstances",
    "author": "Unknown"
  },
  {
    "quote": "Always have a unique character like salt. Its presence is not felt, but its absence makes everything tasteless.",
    "author": "Jay Shetty’s book Think Like A Monk"
  },
    {
    "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "author": "Joshua J. Marine"
  },
   {
    "quote": "Embrace the glorious mess that you are.",
    "author": "Elizabeth Gilbert"
  },
   {
    "quote": "A lot of people are afraid to say what they want. That's why they don't get what they want.",
    "author": "Madonna"
  },
    {
    "quote": "We all have problems. But it's not what happens to us, [it 's] the choices we make after.",
    "author": "Elizabeth Smart"
  },
    {
    "quote": "You do not find the happy life. You make it.",
    "author": "Camilla Eyring Kimball"
  },
  {
    "quote": "When it comes to luck, you make your own.",
    "author": "Bruce Springsteen"
  },
    {
    "quote": "Don't try to lessen yourself for the world; let the world catch up to you.",
    "author": "Beyoncé"
  },
  {
    "quote": "Try to be a rainbow in someone's cloud.",
    "author": "Maya Angelou"
  },
  {
    "quote": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt"
  },
  {
    "quote": "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    "author": "Mandy Hale"
  },
  {
    "quote": "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    "author": "Lady Gaga"
  },
  {
    "quote": "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
    "author": "Unknown"
  },
   {
    "quote": "You are never too old to set another goal or to dream a new dream.",
    "author": "Malala Yousafzai"
  },
    {
    "quote": "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    "author": "Nicole Kidman"
  },
  {
    "quote": "The bad news is time flies. The good news is you're the pilot.",
    "author": "Michael Altshuler"
  },
   {
    "quote": "If it's out of your hands, it deserves freedom from your mind too!",
    "author": "Ivan Nuru"
  },
    {
    "quote": "You'll never be criticized by someone who is doing more than you. You'll always be criticized by someone doing less. Remember that. ",
    "author": "DENZEL WASHINGTON"
  },
     {
    "quote": "Don’t just wait for inspiration. Become it.",
    "author": "Unknown"
  },
    {
    "quote": "Don’t let your past blackmail your present, to ruin your beautiful future",
    "author": "Dear Zindagi Movie"
  },
   {
    "quote": "It's safe to assume that no matter where you stand, someone would be happy to be in your shoes, just as you'd be happy to be in someone else's",
    "author": "Unknown"
  },
    {
    "quote": "Stop being perfect because obsessing about perfection stops you from growing",
    "author": "Tyler Durden from Fight Club"
  },
  {
    "quote": "A mind is like a parachute. It doesn't work if it is not open.",
    "author": "Frank Zappa"
  },
  {
    "quote": "If I had asked people what they wanted, they would have said faster horses.",
    "author": "Henry Ford"
  },
  {
    "quote": "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
    "author": "Grand Master Oogway (Kung Fu Panda)"
  },
   {
    "quote": "He who asks may be a fool for five minutes. He who doesn't is a fool for a lifetime",
    "author": "Chinese Proverb"
  },
   {
    "quote": "Genius is 1% inspiration and 99% perspiration",
    "author": "Thomas Edison"
  },
  {
    "quote": "There is no secret ingredient. Don’t have to. To make something special, you just believe it’s special.",
    "author": "Mr Ping, Po’s adoptive father (Kung Fu Panda)"
  }
  ,
  {
    "quote": "If you’re good at something, never do it for free.",
    "author": "The Dark Knight"
  },
    {
    "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore",
    "author": "Albert Einstein"
  }, 
    {
    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "author": "Nelson Mandela"
  }, 
    {
    "quote": "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
    "author": "Albert Einstein"
  }, 
  {
    "quote": "Work So Hard That One Day Your Signature Will Be Called An Autograph",
    "author": "Tim Notke"
  },
    {
    "quote": "A smooth sea never made a skillful sailor",
    "author": "Proverb"
  },
  {
    "quote": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
    "author": "Harry Potter and the Sorcerer's Stone book"
  },
  {
    "quote": "Life is getting up an hour early to live an hour more",
    "author": "Unknown"
  },
  {
    "quote": "The more you sweat in peace, the less you bleed in war",
    "author": "Norman Schwarzkopf"
  },
  {
    "quote": "The way to get started is to quit talking and begin doing",
    "author": "Walt Disney"
  },
   {
    "quote": "Man who waits for roast duck to fly into mouth must wait very, very, long time",
    "author": "Chinese proverb"
  },
  {
    "quote": "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "author": "Benjamin Franklin"
  }
  , {
    "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.",
    "author": "Steve Jobs"
  },
  {
    "quote": "You can get everything in life you want if you will just help enough other people get what they want.",
    "author": "Zig Ziglar"
  },
  {
    "quote": "If there is no struggle, there is no progress",
    "author": "Frederick Douglass"
  }, {
    "quote": "Courage is like a muscle. We strengthen it by use",
    "author": "Ruth Gordo"
  }, {
    "quote": "Albert Einstein ne kaha tha, pagal woh hota hai joh roz roz same kaam karta hai, magar chahta hai ki nateeja alag ho",
    "author": "Dear Zindagi Movie"
  },
  {
    "quote": "A year from now you will wish you had started today",
    "author": "Unknown"
  },
  
  {
    "quote": "There is a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
    "author": "Grand Master Oogway (Kung Fu Panda)"
  }
  ,
  {
    "quote": "There is just news. There is no good or bad.",
    "author": "Grand Master Oogway (Kung Fu Panda)"
  },
  {
    "quote": "Never let success get to your head and never let failure get to your heart",
    "author": "Drake"
  }, {
    "quote": "If you don't risk anything, you risk even more",
    "author": "Erica Jong"
  },
  {
    "quote": "If it makes you nervous, you're doing it right",
    "author": "Childish Gambino"
  }, 
  {
    "quote": "Life is like riding a bicycle. To keep your balance you must keep moving",
    "author": "Albert Einstein"
  }, 
  {
    "quote": "I wept because I had no shoes until I saw a man who had no feet",
    "author": "Persian proverb"
  },
  {
    "quote": "In a world full of Umbridge be a Fred and George",
    "author": "Unknown"
  },
  {
    "quote": "I'm not in this world to live up to your expectations and you're not in this world to live up to mine",
    "author": "Bruce Lee"
  },
  {
    "quote": "Don't wish it was easier, wish you were better. Don't wish for less problem, wish for more skills. Don't wish for less challenge, wish for more wisdom.",
    "author": "Jim Rohn"
  },
  {
    "quote": "You have not failed until you quit trying.",
    "author": "Gordon B. Hinckley"
  },
  {
    "quote": "If you are always trying to be normal you will never know how amazing you can be.",
    "author": "Maya Angelou"
  }
  ,
  {
    "quote": "The meaning of life is to find your gift. The purpose of life is to give it away.",
    "author": "Pablo Picasso"
  }
  ,
  {
    "quote": "If you think you are too small to make a difference, try sleeping with a mosquito.",
    "author": "Dalai Lama"
  }
  ,
  {
    "quote": "Learn everything you can, anytime you can, from anyone you can - there will always come a time when you will be grateful you did.",
    "author": "Sarah Caldwell"
  },
  {
    "quote": "Jab hum apne aap ko achhi tarah samajh lete hai, to dusre kya samajhte hai, it doesn't matter. Not at all!",
    "author": "Dear Zindagi Movie"
  },
   {
    "quote": "“Losing friends as you grow up is a sign of growing up!",
    "author": "Dear Zindagi Movie"
  }
  
];
