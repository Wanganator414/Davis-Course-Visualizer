window.onload = function() {
  let btn = document.getElementById("run"),chart;
let information = "st=>start: Start:>http://www.google.com[blank] \
e=>end:>http://www.google.com \
op1=>operation: My Operation \
sub1=>subroutine: My Subroutine \
cond=>condition: Yes";

  (btn.onclick = function() {
    let code = information.value();

    if (chart) {
      chart.clean();
    }

    chart = flowchart.parse(code);
    chart.drawSVG("canvas", {
      // 'x': 30,
      // 'y': 50,
      "line-width": 3,
      maxWidth: 3, //ensures the flowcharts fits within a certian width
      "line-length": 50,
      "text-margin": 10,
      "font-size": 14,
      font: "normal",
      "font-family": "Helvetica",
      "font-weight": "normal",
      "font-color": "black",
      "line-color": "black",
      "element-color": "black",
      fill: "white",
      "yes-text": "yes",
      "no-text": "no",
      "arrow-end": "block",
      scale: 1,
      symbols: {
        start: {
          "font-color": "red",
          "element-color": "green",
          fill: "yellow"
        },
        end: {
          class: "end-element"
        }
      },
      flowstate: {
        past: { fill: "#CCCCCC", "font-size": 12 },
        current: { fill: "yellow", "font-color": "red", "font-weight": "bold" },
        future: { fill: "#FFFF99" },
        request: { fill: "blue" },
        invalid: { fill: "#444444" },
        approved: {
          fill: "#58C4A3",
          "font-size": 12,
          "yes-text": "APPROVED",
          "no-text": "n/a"
        },
        rejected: {
          fill: "#C45879",
          "font-size": 12,
          "yes-text": "n/a",
          "no-text": "REJECTED"
        }
      }
    });

    $("[id^=sub1]").click(function() {
      alert("info here");
    });
  })();
};

function myFunction(event, node) {
  console.log("You just clicked this node:", node);
}
