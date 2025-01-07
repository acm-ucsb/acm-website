interface ButtonLabelType {
  key: string;
  buttonLabelString: string;
  routingLink: string;
}

export const ButtonLabels: ButtonLabelType[] = [
  {
    key: "about",
    buttonLabelString: "About Us",
    routingLink: "/#about",
  },
  {
    key: "branches",
    buttonLabelString: "Branches",
    routingLink: "/#branches",
  },
  {
    key: "events",
    buttonLabelString: "Events",
    routingLink: "/#events",
  },
  {
    key: "faq",
    buttonLabelString: "FAQ",
    routingLink: "/#faq",
  },
  {
    key: "interns",
    buttonLabelString: "Interns",
    routingLink: "/interns",
  },
];
