 $(document).ready(function(){

  var current_display = '#welcome'
  show_element = function show_element(element) {
    $(current_display).toggle()
    $(element).toggle()
    current_display = element
    console.log(element)
  }

});

