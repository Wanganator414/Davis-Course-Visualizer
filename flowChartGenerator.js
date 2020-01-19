let config = {
  //Config file for how the chart looks
  startOnLoad: true, //MStart ASAP upon load or some other dependency is gonna complain
  theme: "neutral",
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true
  }
};

$(document).init(function() {
  //Load config settings
  mermaid.initialize();
  console.log("Mermaid initialized");
});

// $.get('text_file.txt', function(data) {
//     items = ;
//     $('select[name=colors]').append('<option value="">' + items + '</option>');
// });

$.ajax({
  url: "mermaid.txt", // File path to user selected major data
  dataType: "text", //Add variable to sub out target major
  success: function(data) {
    $(".mermaid").html(data); // replace .tab-content if you want to put .txt file's data in other place.
  }
});


let dropDownMaker =  function(){    //Create dropdown options that link to renderGraph

};
let renderGraph = function() {    //Rerenders graph if user has changes view
  console.log("Trying to render graph.");
};

window.mermaid.init(undefined, document.querySelectorAll(".mermaid")); //Make mermaid anything with mermaid class to svg diagram
console.log("Mermaid selector reached"); //Debug stuff
