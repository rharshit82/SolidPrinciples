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
} from "./principles/SingleResponsibility";

import {
  withOpenClosedPrinciplePseudoCode,
  withOpenClosedPrincipleCHash,
  withOpenClosedPrincipleCPP,
  withOpenClosedPrincipleGo,
  withOpenClosedPrincipleJava,
  withOpenClosedPrincipleJavascript,
  withOpenClosedPrinciplePHP,
  withOpenClosedPrinciplePython,
  withOpenClosedPrincipleRuby,
  withOpenClosedPrincipleRust,
  withOpenClosedPrincipleSwift,
  withoutOpenClosedPrincipleCHash,
  withoutOpenClosedPrincipleGo,
  withoutOpenClosedPrincipleCPP,
  withoutOpenClosedPrincipleJava,
  withoutOpenClosedPrincipleJavascript,
  withoutOpenClosedPrinciplePHP,
  withoutOpenClosedPrinciplePseudoCode,
  withoutOpenClosedPrinciplePython,
  withoutOpenClosedPrincipleRust,
  withoutOpenClosedPrincipleSwift,
  withoutOpenClosedPrincipleRuby,
} from "./principles/OpenClosedPrinciple";

import {
  withLiskovSubstitutionPseudoCode,
  withLiskovSubstitutionCHash,
  withLiskovSubstitutionCPP,
  withLiskovSubstitutionGo,
  withLiskovSubstitutionJava,
  withLiskovSubstitutionJavascript,
  withLiskovSubstitutionPHP,
  withLiskovSubstitutionPython,
  withLiskovSubstitutionRuby,
  withLiskovSubstitutionRust,
  withLiskovSubstitutionSwift,
  withoutLiskovSubstitutionCHash,
  withoutLiskovSubstitutionGo,
  withoutLiskovSubstitutionCPP,
  withoutLiskovSubstitutionJava,
  withoutLiskovSubstitutionJavascript,
  withoutLiskovSubstitutionPHP,
  withoutLiskovSubstitutionPseudoCode,
  withoutLiskovSubstitutionPython,
  withoutLiskovSubstitutionRust,
  withoutLiskovSubstitutionSwift,
  withoutLiskovSubstitutionRuby,
} from "./principles/LiskovSubstitutionPrinciple";

import {
  withInterfaceSegregationPseudoCode,
  withInterfaceSegregationCHash,
  withInterfaceSegregationCPP,
  withInterfaceSegregationGo,
  withInterfaceSegregationJava,
  withInterfaceSegregationJavascript,
  withInterfaceSegregationPHP,
  withInterfaceSegregationPython,
  withInterfaceSegregationRuby,
  withInterfaceSegregationRust,
  withInterfaceSegregationSwift,
  withoutInterfaceSegregationCHash,
  withoutInterfaceSegregationGo,
  withoutInterfaceSegregationCPP,
  withoutInterfaceSegregationJava,
  withoutInterfaceSegregationJavascript,
  withoutInterfaceSegregationPHP,
  withoutInterfaceSegregationPseudoCode,
  withoutInterfaceSegregationPython,
  withoutInterfaceSegregationRust,
  withoutInterfaceSegregationSwift,
  withoutInterfaceSegregationRuby,
} from "./principles/InterfaceSegregationPrinciple";

import {
  withDependencyInversionPseudoCode,
  withDependencyInversionCHash,
  withDependencyInversionCPP,
  withDependencyInversionGo,
  withDependencyInversionJava,
  withDependencyInversionJavascript,
  withDependencyInversionPHP,
  withDependencyInversionPython,
  withDependencyInversionRuby,
  withDependencyInversionRust,
  withDependencyInversionSwift,
  withoutDependencyInversionCHash,
  withoutDependencyInversionGo,
  withoutDependencyInversionCPP,
  withoutDependencyInversionJava,
  withoutDependencyInversionJavascript,
  withoutDependencyInversionPHP,
  withoutDependencyInversionPseudoCode,
  withoutDependencyInversionPython,
  withoutDependencyInversionRust,
  withoutDependencyInversionSwift,
  withoutDependencyInversionRuby,
} from "./principles/DependencyInversionPrinciple";

import { principleNames } from "./constants/GlobalConstants";
const SingleResponsibilityData = {
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
};

const OpenClosedPrincipleData = {
  pseudocode: {
    with: withOpenClosedPrinciplePseudoCode,
    without: withoutOpenClosedPrinciplePseudoCode,
  },
  javascript: {
    with: withOpenClosedPrincipleJavascript,
    without: withoutOpenClosedPrincipleJavascript,
  },
  java: {
    with: withOpenClosedPrincipleJava,
    without: withoutOpenClosedPrincipleJava,
  },
  python: {
    with: withOpenClosedPrinciplePython,
    without: withoutOpenClosedPrinciplePython,
  },
  csharp: {
    with: withOpenClosedPrincipleCHash,
    without: withoutOpenClosedPrincipleCHash,
  },
  php: {
    with: withOpenClosedPrinciplePHP,
    without: withoutOpenClosedPrinciplePHP,
  },
  cpp: {
    with: withOpenClosedPrincipleCPP,
    without: withoutOpenClosedPrincipleCPP,
  },
  go: {
    with: withOpenClosedPrincipleGo,
    without: withoutOpenClosedPrincipleGo,
  },
  swift: {
    with: withOpenClosedPrincipleSwift,
    without: withoutOpenClosedPrincipleSwift,
  },
  ruby: {
    with: withOpenClosedPrincipleRuby,
    without: withoutOpenClosedPrincipleRuby,
  },
  rust: {
    with: withOpenClosedPrincipleRust,
    without: withoutOpenClosedPrincipleRust,
  },
};
const LiskovSubstitutionData = {
  pseudocode: {
    with: withLiskovSubstitutionPseudoCode,
    without: withoutLiskovSubstitutionPseudoCode,
  },
  csharp: {
    with: withLiskovSubstitutionCHash,
    without: withoutLiskovSubstitutionCHash,
  },
  cpp: {
    with: withLiskovSubstitutionCPP,
    without: withoutLiskovSubstitutionCPP,
  },
  go: {
    with: withLiskovSubstitutionGo,
    without: withoutLiskovSubstitutionGo,
  },
  java: {
    with: withLiskovSubstitutionJava,
    without: withoutLiskovSubstitutionJava,
  },
  javascript: {
    with: withLiskovSubstitutionJavascript,
    without: withoutLiskovSubstitutionJavascript,
  },
  php: {
    with: withLiskovSubstitutionPHP,
    without: withoutLiskovSubstitutionPHP,
  },
  python: {
    with: withLiskovSubstitutionPython,
    without: withoutLiskovSubstitutionPython,
  },
  ruby: {
    with: withLiskovSubstitutionRuby,
    without: withoutLiskovSubstitutionRuby,
  },
  rust: {
    with: withLiskovSubstitutionRust,
    without: withoutLiskovSubstitutionRust,
  },
  swift: {
    with: withLiskovSubstitutionSwift,
    without: withoutLiskovSubstitutionSwift,
  },
};

const InterfaceSegregationData = {
  pseudocode: {
    with: withInterfaceSegregationPseudoCode,
    without: withoutInterfaceSegregationPseudoCode,
  },
  csharp: {
    with: withInterfaceSegregationCHash,
    without: withoutInterfaceSegregationCHash,
  },
  cpp: {
    with: withInterfaceSegregationCPP,
    without: withoutInterfaceSegregationCPP,
  },
  go: {
    with: withInterfaceSegregationGo,
    without: withoutInterfaceSegregationGo,
  },
  java: {
    with: withInterfaceSegregationJava,
    without: withoutInterfaceSegregationJava,
  },
  javascript: {
    with: withInterfaceSegregationJavascript,
    without: withoutInterfaceSegregationJavascript,
  },
  php: {
    with: withInterfaceSegregationPHP,
    without: withoutInterfaceSegregationPHP,
  },
  python: {
    with: withInterfaceSegregationPython,
    without: withoutInterfaceSegregationPython,
  },
  ruby: {
    with: withInterfaceSegregationRuby,
    without: withoutInterfaceSegregationRuby,
  },
  rust: {
    with: withInterfaceSegregationRust,
    without: withoutInterfaceSegregationRust,
  },
  swift: {
    with: withInterfaceSegregationSwift,
    without: withoutInterfaceSegregationSwift,
  },
};

const DependencyInversionData = {
  pseudocode: {
    with: withDependencyInversionPseudoCode, // actual string of the code example
    without: withoutDependencyInversionPseudoCode, // actual string of the code example
  },
  csharp: {
    with: withDependencyInversionCHash,
    without: withoutDependencyInversionCHash,
  },
  cpp: {
    with: withDependencyInversionCPP,
    without: withoutDependencyInversionCPP,
  },
  go: {
    with: withDependencyInversionGo,
    without: withoutDependencyInversionGo,
  },
  java: {
    with: withDependencyInversionJava,
    without: withoutDependencyInversionJava,
  },
  javascript: {
    with: withDependencyInversionJavascript,
    without: withoutDependencyInversionJavascript,
  },
  php: {
    with: withDependencyInversionPHP,
    without: withoutDependencyInversionPHP,
  },
  python: {
    with: withDependencyInversionPython,
    without: withoutDependencyInversionPython,
  },
  ruby: {
    with: withDependencyInversionRuby,
    without: withoutDependencyInversionRuby,
  },
  rust: {
    with: withDependencyInversionRust,
    without: withoutDependencyInversionRust,
  },
  swift: {
    with: withDependencyInversionSwift,
    without: withoutDependencyInversionSwift,
  },
};

type CodeExample = {
  with: string;
  without: string;
};

type LanguageExamples = {
  [key: string]: CodeExample;
};

type PrinciplesCodeExamples = Record<string, LanguageExamples | null>;
export const dataMapping: PrinciplesCodeExamples = {
  [principleNames.SRP]: SingleResponsibilityData,
  [principleNames.OCP]: OpenClosedPrincipleData,
  [principleNames.LSP]: LiskovSubstitutionData,
  [principleNames.ISP]: InterfaceSegregationData,
  [principleNames.DIP]: DependencyInversionData,
};
