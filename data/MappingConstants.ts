import {
  withSingleResponsibilityPseudoCode,
  withSingleResponsibilityCHash,
  withSingleResponsibilityCPP,
  withSingleResponsibilityGo,
  withSingleResponsibilityJava,
  withSingleResponsibilityJavascript,
  withSingleResponsibilityPHP,
  withSingleResponsibilityPython,
  withSingleResponsibilityRuby,
  withSingleResponsibilityRust,
  withSingleResponsibilitySwift,
  withoutSingleResponsibilityCHash,
  withoutSingleResponsibilityGo,
  withoutSingleResponsibilityCPP,
  withoutSingleResponsibilityJava,
  withoutSingleResponsibilityJavascript,
  withoutSingleResponsibilityPHP,
  withoutSingleResponsibilityPseudoCode,
  withoutSingleResponsibilityPython,
  withoutSingleResponsibilitySwift,
  withoutSingleResponsibilityRuby,
  withoutSingleResponsibilityRust,
} from "./SingleResponsibility";

type CodeExample = {
    with: string; 
    without: string;
  };
  
  type LanguageExamples = {
    [key: string]: CodeExample; 
  };
  
type PrinciplesCodeExamples = Record<string, LanguageExamples>;

export const dataMapping: PrinciplesCodeExamples = {
  "single-responsibility": {
    pseudocode: {
      with: withSingleResponsibilityPseudoCode,
      without: withoutSingleResponsibilityPseudoCode,
    },
    javascript: {
      with: withSingleResponsibilityJavascript,
      without: withoutSingleResponsibilityJavascript,
    },
    java: {
      with: withSingleResponsibilityJava,
      without: withoutSingleResponsibilityJava,
    },
    python: {
      with: withSingleResponsibilityPython,
      without: withoutSingleResponsibilityPython,
    },

    csharp: {
      with: withSingleResponsibilityCHash,
      without: withoutSingleResponsibilityCHash,
    },
    php: {
      with: withSingleResponsibilityPHP,
      without: withoutSingleResponsibilityPHP,
    },
    cpp: {
      with: withSingleResponsibilityCPP,
      without: withoutSingleResponsibilityCPP,
    },
    go: {
      with: withSingleResponsibilityGo,
      without: withoutSingleResponsibilityGo,
    },
    swift: {
      with: withSingleResponsibilitySwift,
      without: withoutSingleResponsibilitySwift,
    },
    ruby: {
      with: withSingleResponsibilityRuby,
      without: withoutSingleResponsibilityRuby,
    },
    rust: {
      with: withSingleResponsibilityRust,
      without: withoutSingleResponsibilityRust,
    },
  },
};
