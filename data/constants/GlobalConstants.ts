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
  LSP: "liskoc-substition-principle",
  ISP: "interface-segregation-principle",
  DIP: "dependency-inversion-principle",
};
