(function (window) {
  var names = ["Yassmine", "Jordan", "Janin", "Jamal", "Pola", "Franklin", "Lamia", "Perla", "Leila", "Jawad"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'J') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

