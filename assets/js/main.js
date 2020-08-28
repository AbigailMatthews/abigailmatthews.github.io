$(document).ready(function() {
  var classes = ["one", "two", "three", "four"];

  $(".roll").each(function() {
    $(this).addClass(classes[~~(Math.random() * classes.length)]);
  });

  setInterval(function() {
    rollClasses();
  }, 750);

  function rollClasses() {
    $(".roll").each(function() {
      $(this).removeClass("one two three four");
    });

    $(".roll").each(function() {
      $(this).addClass(classes[~~(Math.random() * classes.length)]);
    });
  }

});







$(document).ready(function () {
  $(".menu").click(function () {
    $(".essay").addClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function () {
    $(".essay").removeClass("slide");
    $(".close").removeClass("show");
  });
});



$(document).ready(function () {
  $(".menu1").click(function () {
    $(".essay1").addClass("slide");
    $(".close1").addClass("show");
  });

  $(".close1").click(function () {
    $(".essay1").removeClass("slide");
    $(".close1").removeClass("show");
  });
});