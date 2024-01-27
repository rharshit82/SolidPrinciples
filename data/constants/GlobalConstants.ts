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

export type PrincipleNamesType = {
  SRP: "single-responsibility";
  OCP: "open-closed-principle";
  LSP: "liskov-substitution-principle";
  ISP: "interface-segregation-principle";
  DIP: "dependency-inversion-principle";
};
export const principleNames: PrincipleNamesType = {
  SRP: "single-responsibility",
  OCP: "open-closed-principle",
  LSP: "liskov-substitution-principle",
  ISP: "interface-segregation-principle",
  DIP: "dependency-inversion-principle",
};

export const reversePrincipleNamesMapping: {
  [key: string]: keyof PrincipleNamesType;
} = Object.keys(principleNames).reduce((acc, key) => {
  const principleName = principleNames[key as keyof PrincipleNamesType];
  acc[principleName] = key as keyof PrincipleNamesType;
  return acc;
}, {} as { [key: string]: keyof PrincipleNamesType });

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
