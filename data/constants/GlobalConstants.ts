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

type PrincipleKeyType = "SRP" | "OCP" | "LSP" | "ISP" | "DIP";

type PrincipleUrlMapping = {
  [key in PrincipleKeyType]: string;
} & { [key: string]: string | undefined };

export const principleUrlMapping: PrincipleUrlMapping = {
  SRP: "single-responsibility",
  OCP: "open-closed-principle",
  LSP: "liskov-substition-principle",
  ISP: "interface-segregation-principle",
  DIP: "dependency-inversion-principle",
};

type UrlNameMapping = {
  [key: string]: string;
};
export const urlNameMapping: UrlNameMapping = {
  "single-responsibility": "Single Responsibility",
  "open-closed-principle": "Open Closed Principle",
  "liskov-substition-principle": "Liskov Substitution Principle",
  "interface-segregation-principle": "Interface Segregation Principle",
  "dependency-inversion-principle": "Dependency Inversion Principle",
};
