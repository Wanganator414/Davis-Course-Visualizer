let config = {
  //Config file for how the chart looks
  startOnLoad: true, //MStart ASAP upon load or some other dependency is gonna complain
  theme: "default",
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true
  }
};

let renderTarget = "";
let dropDownIndex = 0;

let graphInfo = sessionStorage.getItem("graphInfo");
dropDownIndex = sessionStorage.getItem("selectIndex");
if (graphInfo !== null) {
  renderTarget = sessionStorage.getItem("graphInfo");
}

let majorNames = {
  majors: [
    {
      p: "AAS A.B."
    },
    {
      p: "AAS Minor"
    },
    {
      p: "ABI B.S"
    },
    {
      p: "AEE B.S."
    },
    {
      p: "AHI A.B."
    },
    {
      p: "AHI Minor"
    },
    {
      p: "AMS A.B."
    },
    {
      p: "ANB M.S."
    },
    {
      p: "ANB Ph.D."
    },
    {
      p: "ANS B.S."
    },
    {
      p: "ANS Minor"
    },
    {
      p: "ANT A.B."
    },
    {
      p: "ANT B.S."
    },
    {
      p: "ANT Minor"
    },
    {
      p: "ART A.B."
    },
    {
      p: "ART Minor"
    },
    {
      p: "ASA A.B."
    },
    {
      p: "ASA Minor"
    },
    {
      p: "ATM B.S."
    },
    {
      p: "ATM Minor"
    },
    {
      p: "AVS Minor"
    },
    {
      p: "Animal Science & Management B.S."
    },
    {
      p: "Applied Chemistry B.S."
    },
    {
      p: "Applied Physics B.S."
    },
    {
      p: "BIM B.S."
    },
    {
      p: "BIM Minor"
    },
    {
      p: "BIS A.B."
    },
    {
      p: "BIS B.S."
    },
    {
      p: "BIS Minor"
    },
    {
      p: "BIT B.S."
    },
    {
      p: "Biochemical Engineering B.S."
    },
    {
      p: "Biochemistry & Molecular Biology B.S."
    },
    {
      p: "CGS A.B."
    },
    {
      p: "CGS B.S."
    },
    {
      p: "CHE A.B."
    },
    {
      p: "CHE B.S."
    },
    {
      p: "CHE Minor"
    },
    {
      p: "CHI A.B. "
    },
    {
      p: "CHI Minor"
    },
    {
      p: "CHN A.B."
    },
    {
      p: "CMN A.B."
    },
    {
      p: "CMN Minor"
    },
    {
      p: "COM A.B."
    },
    {
      p: "COM Minor"
    },
    {
      p: "CRD B.S."
    },
    {
      p: "Cell Biology B.S."
    },
    {
      p: "Chemical Physics B.S."
    },
    {
      p: "Cinema & Digital Media A.B."
    },
    {
      p: "Civil Engineering B.S."
    },
    {
      p: "Classical Civilization A.B."
    },
    {
      p: "Classical Civilization Minor"
    },
    {
      p: "Clinical Nutrition B.S."
    },
    {
      p: "Computer Engineering B.S."
    },
    {
      p: "Computer Science & Engineering B.S."
    },
    {
      p: "Computer Science B.S."
    },
    {
      p: "DES A.B."
    },
    {
      p: "EAE B.S."
    },
    {
      p: "EAS A.B."
    },
    {
      p: "EAS Minor"
    },
    {
      p: "EBS B.S."
    },
    {
      p: "ECH B.S."
    },
    {
      p: "ECN A.B."
    },
    {
      p: "ECN Minor"
    },
    {
      p: "EE&B A.B."
    },
    {
      p: "EE&B B.S."
    },
    {
      p: "EE&B Minor"
    },
    {
      p: "EEC B.S."
    },
    {
      p: "EEC Minor"
    },
    {
      p: "EME B.S."
    },
    {
      p: "EMS B.S."
    },
    {
      p: "EMS Minor"
    },
    {
      p: "ENL A.B."
    },
    {
      p: "ENT B.S."
    },
    {
      p: "EPA&P B.S."
    },
    {
      p: "EPA&P Minor"
    },
    {
      p: "EPI M.S."
    },
    {
      p: "EPI Ph.D."
    },
    {
      p: "ESM B.S."
    },
    {
      p: "ETX B.S."
    },
    {
      p: "ETX Minor"
    },
    {
      p: "Ecological Management & Restoration B.S."
    },
    {
      p: "Environmental Engineering B.S."
    },
    {
      p: "Environmental Horticulture & Urban Forestry B.S."
    },
    {
      p: "FPS B.S."
    },
    {
      p: "FPS Minor"
    },
    {
      p: "FRE A.B."
    },
    {
      p: "FRE Minor"
    },
    {
      p: "Food Science B.S."
    },
    {
      p: "GDB B.S."
    },
    {
      p: "GDB Minor"
    },
    {
      p: "GEL A.B."
    },
    {
      p: "GEL B.S."
    },
    {
      p: "GEL Minor"
    },
    {
      p: "GER A.B."
    },
    {
      p: "Genetics & Genomics B.S."
    },
    {
      p: "HDE B.S."
    },
    {
      p: "HDE Minor"
    },
    {
      p: "HIS A.B."
    },
    {
      p: "HYD B.S."
    },
    {
      p: "HYD Minor"
    },
    {
      p: "IAD B.S."
    },
    {
      p: "IAD Minor"
    },
    {
      p: "ITA A.B."
    },
    {
      p: "ITA Minor"
    },
    {
      p: "International Relations A.B."
    },
    {
      p: "JPN A.B."
    },
    {
      p: "LDA B.S."
    },
    {
      p: "MAT A.B."
    },
    {
      p: "MAT B.S."
    },
    {
      p: "MAT Minor"
    },
    {
      p: "MIC A.B."
    },
    {
      p: "MIC B.S."
    },
    {
      p: "MSA A.B."
    },
    {
      p: "MSA Minor"
    },
    {
      p: "MST A.B."
    },
    {
      p: "MUS A.B."
    },
    {
      p: "MUS Minor"
    },
    {
      p: "Managerial Economics B.S."
    },
    {
      p: "Managerial Economics Minor"
    },
    {
      p: "Marine & Coastal Science B.S."
    },
    {
      p: "Mathematical & Scientific Computation B.S"
    },
    {
      p: "Mathematical Analytics & Operations Research B.S."
    },
    {
      p: "NAS A.B."
    },
    {
      p: "NPB B.S."
    },
    {
      p: "Nutrition Science B.S."
    },
    {
      p: "Nutrition Science Minor"
    },
    {
      p: "PHI A.B."
    },
    {
      p: "PHI Minor"
    },
    {
      p: "PHY A.B."
    },
    {
      p: "PHY B.S."
    },
    {
      p: "PHY Minor"
    },
    {
      p: "PLB A.B."
    },
    {
      p: "PLB B.S."
    },
    {
      p: "PLB Minor"
    },
    {
      p: "PLS B.S."
    },
    {
      p: "POL A.B."
    },
    {
      p: "POL; Public Service A.B."
    },
    {
      p: "PSC A.B."
    },
    {
      p: "PSC B.S."
    },
    {
      p: "PSC Minor"
    },
    {
      p: "Pharmaceutical Chemistry B.S."
    },
    {
      p: "Public Health M.P.H."
    },
    {
      p: "Public Health Sciences Minor"
    },
    {
      p: "Public Health Sciences Ph.D."
    },
    {
      p: "RST A.B."
    },
    {
      p: "RST Minor"
    },
    {
      p: "RUS A.B."
    },
    {
      p: "RUS Minor"
    },
    {
      p: "SOC A.B."
    },
    {
      p: "SOC Minor"
    },
    {
      p: "SOC; Organizational Studies A.B."
    },
    {
      p: "SOM Requirements"
    },
    {
      p: "SPA A.B."
    },
    {
      p: "SPA Minor"
    },
    {
      p: "STA A.B."
    },
    {
      p: "STA B.S."
    },
    {
      p: "STA Minor"
    },
    {
      p: "STS A.B."
    },
    {
      p: "Sustainable Agriculture & Food Systems B.S."
    },
    {
      p: "Sustainable Environmental Design B.S."
    },
    {
      p: "TXC B.S"
    },
    {
      p: "TXC Minor"
    },
    {
      p: "Theatre & Dance A.B."
    },
    {
      p: "Theatre & Dance Minor"
    },
    {
      p: "VEN B.S."
    },
    {
      p: "WFC B.S."
    },
    {
      p: "WFC Minor"
    },
    {
      p: "WMS A.B."
    },
    {
      p: "WMS Minor"
    }
  ]
};

let count = 0;
let dropdown = $("#drop");

$(document).init(function() {
  //Load config settings
  mermaid.initialize(config);
  console.log("Mermaid initialized");
});

$.ajax({
  url: renderTarget, // File path to user selected major data
  dataType: "text", //Add variable to sub out target major
  success: function(data) {
    $(".mermaid").html(data); //If successfully loaded add to all mermaid classes
  }
});

window.onload = function() {
  //Begin running function ONLY after all of DOM has been loaded
  $("#drop").empty();
  $("#drop").append(
    $("<option></option>")
      .attr("value", "--")
      .text("Select a Major")
  );
  for (i = 0; i < 169; i++) {
    try {
      $("#drop").append(
        $("<option></option>")
          .attr("value", majorNames.majors[i].p)
          .text(majorNames.majors[i].p)
      );
    } catch (e) {
      console.log(e);
    }
  }
  if (dropDownIndex !== null) {
    console.log(dropDownIndex);
    $("#drop").indexValue = dropDownIndex;
    this.console.log($("drop").selectedIndex)
  }
};

window.mermaid.init(undefined, document.querySelectorAll(".mermaid")); //Make mermaid anything with mermaid class to svg diagram
let renderGraph = function(indexValue) {
  //Rerenders graph if user has changes view
  //IndexValue is the index of the selected item from the dropdown,+1
  let searchVar = majorNames.majors[indexValue - 1].p + ".txt";
  dropDownIndex=indexValue; //Target selection index
  renderTarget = searchVar; //Target file name
  console.log(searchVar);
  location.reload("true");
};

window.onbeforeunload = function() {
  sessionStorage.setItem("graphInfo", renderTarget);
  sessionStorage.setItem("selectIndex", dropDownIndex);
};

console.log("Mermaid selector reached"); //Debug stuff
