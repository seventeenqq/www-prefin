function playSound(sound,sound_false,form1,form2) {
    var song = document.getElementById(sound), song_f = document.getElementById(sound_false), form1 = document.forms["forma"]["user_name"].value, form2 = document.forms["forma"]["user_number"].value;
    song.volume = 1;
    song_f.volume = 1;
    if ((song.paused && song_f.paused) && form1!="" && form2!="") {
      song.play();
      alert("Спасибо за запись! Дело в шляпе!");
    } else {
        song_f.play()
    }
  }