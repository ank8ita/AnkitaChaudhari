async function displayQuotes() {
  console.log(quotes);
  document.getElementById("quotesButton").style.display = "none";
  document.getElementById("quotesDiv").style.display = "block";

  console.log("called");
  for (let i = 0; i < quotes.length; i++) {
    var sleepTime = quotes[i].quote.length * 100;

    document.getElementById("quote").innerHTML = quotes[i].quote;
    document.getElementById("author").innerHTML = "- " + quotes[i].author;
    if (i === quotes.length - 1) {
      i = 0;
    }
    await sleep(sleepTime);
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const quotes = [
  {
    "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "author": "Nelson Mandela"
  }, 
  {
    "quote": “If I had asked people what they wanted, they would have said faster horses.”,
    "author": "Henry Ford"
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
    "quote": "Never let success get to your head and never let failure get to your heart",
    "author": "Drake"
  }, {
    "quote": "If you don't risk anything, you risk even more",
    "author": "Erica Jong"
  },
  {
    "quote": "If it makes you nervous, you're doing it right",
    "author": "Childish Gambino"
  }, {
    "quote": "Life is like riding a bicycle. To keep your balance you must keep moving",
    "author": "Albert Einstein"
  }, {
    "quote": "Life is getting up an hour early to live an hour more",
    "author": "Unknown"
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
  }


];
