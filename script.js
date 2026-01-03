(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    
    // Get the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // If the name starts with 'j', speak GoodBye
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      // Otherwise, speak Hello
      helloSpeaker.speak(names[i]);
    }
  }
})();