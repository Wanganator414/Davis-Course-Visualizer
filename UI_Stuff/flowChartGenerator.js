let config = {
  //Config file for how the chart looks
  startOnLoad: false,
  theme: "default",
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true
  }
};

$(document).init(function() {
  //Load config settings
  mermaid.initialize();
  console.log("mermaid started");
});

console.log("FUCK YEAH");
$.ajax({
  url: "mermaid.txt", // File path to user selected major data
  dataType: "text",
  success: function(data) {
    $(".mermaid").html(data); // replace .tab-content if you want to put .txt file's data in other place.
  }
});

window.mermaid.init(undefined, document.querySelectorAll(".mermaid"));
console.log("Selector selected all");
