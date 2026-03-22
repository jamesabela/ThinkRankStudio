const layouts = {
  diamond9: {
    count: 9,
    boxes: [
      { top: "12%", left: "50%" },
      { top: "27%", left: "35%" }, { top: "27%", left: "65%" },
      { top: "42%", left: "20%" }, { top: "42%", left: "50%" }, { top: "42%", left: "80%" },
      { top: "57%", left: "35%" }, { top: "57%", left: "65%" },
      { top: "72%", left: "50%" }
    ],
    labels: [
      { text: "Most Important", className: "label top", top: "4%", bottom: "auto" },
      { text: "Least Important", className: "label bottom", top: "88%", bottom: "auto" }
    ]
  },
  diamond5: {
    count: 5,
    boxes: [
      { top: "18%", left: "50%" },
      { top: "36%", left: "35%" }, { top: "36%", left: "65%" },
      { top: "54%", left: "50%" },
      { top: "72%", left: "50%" }
    ],
    labels: [
      { text: "Most Important", className: "label top", top: "5%", bottom: "auto" },
      { text: "Least Important", className: "label bottom", top: "88%", bottom: "auto" }
    ]
  },
  triangle: {
    count: 6,
    boxes: [
      { top: "20%", left: "50%" },
      { top: "45%", left: "35%" }, { top: "45%", left: "65%" },
      { top: "70%", left: "20%" }, { top: "70%", left: "50%" }, { top: "70%", left: "80%" }
    ],
    labels: [
      { text: "Most Important", className: "label top", top: "6%", bottom: "auto" },
      { text: "Least Important", className: "label bottom", top: "88%", bottom: "auto" }
    ]
  },
  line: {
    count: 5,
    boxes: [
      { top: "15%", left: "50%" },
      { top: "30%", left: "50%" },
      { top: "45%", left: "50%" },
      { top: "60%", left: "50%" },
      { top: "75%", left: "50%" }
    ],
    labels: [
      { text: "Most Important", className: "label top", top: "4%", bottom: "auto" },
      { text: "Least Important", className: "label bottom", top: "88%", bottom: "auto" }
    ]
  },
  podium: {
    count: 3,
    boxes: [
      { top: "30%", left: "50%" },
      { top: "50%", left: "30%" },
      { top: "60%", left: "70%" }
    ],
    labels: [
      { text: "1ST", className: "label", top: "18%", left: "50%", transform: "translateX(-50%)" },
      { text: "2ND", className: "label", top: "38%", left: "30%", transform: "translateX(-50%)" },
      { text: "3RD", className: "label", top: "48%", left: "70%", transform: "translateX(-50%)" }
    ]
  },
  elimination: {
    count: 2,
    boxes: [
      { top: "40%", left: "35%" },
      { top: "40%", left: "65%" }
    ],
    labels: [
      { text: "Select the Winner", className: "label top", top: "20%", bottom: "auto" }
    ]
  }
};
