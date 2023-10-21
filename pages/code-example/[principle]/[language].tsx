import Meta from "@/components/Meta/Meta";
import Landing from "@/components/Landing/index";
import ErrorBoundaryPage from "@/components/Error/ErrorBoundaryPage";
import { supportedLanguages } from "@/data/constants/GlobalConstants";
import { GetStaticPropsContext, GetStaticPaths } from "next";

const meta = {
  pageTitle:
    "SolidPrinciples.org - Mastering SOLID Principles in Software Design",
  description:
    "Welcome to SolidPrinciples.org, the go-to hub for understanding SOLID principles in software development. Embark on a journey to better coding practices and robust software design with our comprehensive guides.",
  keywords:
    "SOLID principles, software design, coding best practices, object-oriented programming, software architecture, design principles",
  author: "SolidPrinciples.org Team",
  og_title:
    "SolidPrinciples.org - Mastering SOLID Principles in Software Design",
  og_description:
    "Dive into SOLID principles with SolidPrinciples.org. Enhance your software design skills, embrace best coding practices, and elevate your developer journey.",
  og_url: "https://www.SolidPrinciples.org/",
  twitter_title:
    "SolidPrinciples.org - Mastering SOLID Principles in Software Design",
  twitter_description:
    "Unlock the power of SOLID principles with SolidPrinciples.org. A treasure trove of knowledge for every developer aiming for excellence.",
};
type LanguageTypes = {
  currentPrinciple: string;
  currentLanguage: string;
};
const Language: React.FC<LanguageTypes> = ({
  currentPrinciple,
  currentLanguage,
}) => {
  return (
    <ErrorBoundaryPage>
      <Meta meta={meta} />

      <Landing
        currentPrinciple={currentPrinciple}
        currentLanguage={currentLanguage}
      />
    </ErrorBoundaryPage>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  for (let lang of supportedLanguages) {
    paths.push({
      params: { language: lang, principle: "single-responsibility" },
    });
    paths.push({
      params: { language: lang, principle: "open-closed-principle" },
    });
    paths.push({
      params: { language: lang, principle: "liskov-substitution-principle" },
    });
    paths.push({
      params: { language: lang, principle: "interace-segregation-principle" },
    });
    paths.push({
      params: { language: lang, principle: "dependency-inversion-principle" },
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const language = params?.language as string;
  const principle = params?.principle as string;

  return {
    props: { currentLanguage: language, currentPrinciple: principle },
  };
};

export default Language;
