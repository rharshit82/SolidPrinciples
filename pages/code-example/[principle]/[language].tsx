import Meta from "@/components/Meta/Meta";
import Landing from "@/components/Landing/index";
import ErrorBoundaryPage from "@/components/Error/ErrorBoundaryPage";
import { supportedLanguages } from "@/data/constants/GlobalConstants";
import { GetStaticPropsContext, GetStaticPaths } from "next";

const generateMeta = (principle: string, language: string) => {
  const capitalizedPrinciple =
    principle.charAt(0).toUpperCase() + principle.slice(1).replace(/-/g, " ");

  return {
    pageTitle: `${capitalizedPrinciple} in ${language} - SolidPrinciples.org `,
    description: `Explore the ${capitalizedPrinciple} with examples in ${language}. Dive into detailed discussions and enhance your software design skills with SolidPrinciples.org.`,
    keywords: `${capitalizedPrinciple}, ${language}, software design, coding best practices, object-oriented programming, software architecture`,
    author: "SolidPrinciples.org Team",
    og_title: `SolidPrinciples.org - Understanding ${capitalizedPrinciple} in ${language}`,
    og_description: `Deepen your understanding of the ${capitalizedPrinciple} with practical examples in ${language}. Start your journey towards better software design with SolidPrinciples.org.`,
    og_url: `https://www.SolidPrinciples.org/${principle}/${language}`,
    twitter_title: `Learn ${capitalizedPrinciple} in ${language} with SolidPrinciples.org`,
    twitter_description: `Grasp the essentials of ${capitalizedPrinciple} through comprehensive examples in ${language}. Elevate your coding practices with SolidPrinciples.org.`,
  };
};

type LanguageTypes = {
  currentPrinciple: string;
  currentLanguage: string;
};

const Language: React.FC<LanguageTypes> = ({
  currentPrinciple,
  currentLanguage,
}) => {
  const meta = generateMeta(currentPrinciple, currentLanguage);

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
