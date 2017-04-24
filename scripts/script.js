var attProgram = 0;
var bgBrightness = 0;

var $program1light = '<iframe src="startupautobahn.github.io/widgets/sa_widget_p1_light.html" style="border: none;" name="sa_widget_p1_light" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="43px" width="200px" allowfullscreen></iframe>'
var $program1dark = '<iframe src="startupautobahn.github.io/widgets/sa_widget_p1_dark.html" style="border: none;" name="sa_widget_p1_dark" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="43px" width="200px" allowfullscreen></iframe>'
var $program2light = '<iframe src="startupautobahn.github.io/widgets/sa_widget_p2_light.html" style="border: none;" name="sa_widget_p2_light" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="43px" width="200px" allowfullscreen></iframe>'
var $program2dark = '<iframe src="startupautobahn.github.io/widgets/sa_widget_p2_dark.html" style="border: none;" name="sa_widget_p2_dark" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="43px" width="200px" allowfullscreen></iframe>'

$(document).ready(function() {
  $('a').click(function() {
    if (attProgram != 0 && bgBrightness != 0) {
      $('#generate-btn').attr('disabled', false);
    };
  });
  $('#generate-btn').click(function() {
    var selection = attProgram.toString() + bgBrightness.toString();
    switch (selection) {
      case "11":
        $('#results').text($program1light)
        break;
      case "12":
        $('#results').text($program1dark)
        break;
      case "21":
        $('#results').text($program2light)
        break;
      case "22":
        $('#results').text($program2dark)
        break;
      default:
        $('#results').text("")
        break;
    };
    $('#results').animate({boxShadow: '0 0 8px $col-green'}, 100).delay(10).animate({boxShadow: '0 0 8px $col-green'}, 100);
  });
  $('#results').focus(function() {
    var $this = $(this);
    $this.select();
    $this.mouseup(function() {
      $this.unbind("mouseup");
      return false;
    });
  });
});
