export const supportedLanguages = [
  "pseudocode",
  "javascript",
  "java",
  "python",
  "csharp",
  "php",
  "cpp",
  "go",
  "swift",
  "ruby",
  "rust",
];

type PrincipleNamesType = {
  [key: string]: string;
};
export const principleNames: PrincipleNamesType = {
  SRP: "single-responsibility",
  OCP: "open-closed-principle",
  LSP: "liskov-substitution-principle",
  ISP: "interface-segregation-principle",
  DIP: "dependency-inversion-principle",
};

type UrlNameMapping = {
  [key: string]: string;
};

export const urlNameMapping: UrlNameMapping = {
  [principleNames.SRP]: "Single Responsibility",
  [principleNames.OCP]: "Open Closed Principle",
  [principleNames.LSP]: "Liskov Substitution Principle",
  [principleNames.ISP]: "Interface Segregation Principle",
  [principleNames.DIP]: "Dependency Inversion Principle",
};
