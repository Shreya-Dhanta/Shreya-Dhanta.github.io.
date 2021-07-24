// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function(window){
 var byeSpeaker=new Object();
var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
 byeSpeaker.speak=function speak(name) {
  console.log(speakWord + " " + name);
};
  window.byeSpeaker= byeSpeaker;
)}(window);
