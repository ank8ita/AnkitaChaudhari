<script src="test.js">
 document.addEventListener('click', musicPlay);
 function musicPlay() {
    document.getElementById('player').play();
    document.removeEventListener('click', musicPlay);
 }
</script>


 <div>
 <audio id="player" autoplay loop>
    <source src="/AnkitaChaudhari/Happy Whistling Ukulele.mp3" type="audio/mp3">
  </audio>
 <div id="quotesButton" display="block">
            <div class="buttonCenter">
                <input type="button" onclick="displayQuotes()" class="button" value="Click for Inspiration">
            </div>
 </div>
 <div id="quotesDiv" display="block">
            <p id="quote"></p>
            <p id="author"></p>
 </div>
 </div>


       
