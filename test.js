async function displayQuotes() {
  // Start the snowfall
  generateSnowfall();
//  console.log(quotes);
  document.getElementById("quotesButton").style.display = "none";
  document.getElementById("quotesDiv").style.display = "block";
  
  for (let i = 0; i < quotes.length; i++) {
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

// Create a snowflake
function createSnowflake() {
  const snowflake = document.createElement('span');
  snowflake.className = 'snowflake';
  snowflake.innerHTML = '&#10052;'; // You can change this to a different snowflake icon

  // Set initial position and animation
  const initialX = Math.random() * window.innerWidth;
  const initialRotation = Math.random() * 360;
  snowflake.style.left = initialX + 'px';
  snowflake.style.transform = 'rotate(' + initialRotation + 'deg)';

  // Add snowflake to the page
  document.body.appendChild(snowflake);

  // Remove snowflake after animation ends
  snowflake.addEventListener('animationend', function () {
    snowflake.parentNode.removeChild(snowflake);
  });
}

// Generate snowfall
function generateSnowfall() {
  setInterval(createSnowflake, 100); // Adjust the interval to control the number of snowflakes
}



const quotes = [
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
    "quote": "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently",
    "author": "Maya Angelou"
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
  }
];
