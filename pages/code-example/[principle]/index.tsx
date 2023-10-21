import Meta from "@/components/Meta/Meta";
import Landing from "@/components/Landing/index";
import ErrorBoundaryPage from "@/components/Error/ErrorBoundaryPage";
import { GetStaticPropsContext, GetStaticPaths } from "next";
import { urlNameMapping } from "@/data/constants/GlobalConstants";

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
const generatePrincipleMeta = (principle : string) => {
  const formattedPrinciple =
    urlNameMapping[principle]

  return {
    pageTitle: `SolidPrinciples.org - ${formattedPrinciple} Principle Explained`,
    description: `Delve into the ${formattedPrinciple} Principle with illustrative pseudocode examples. Enhance your software design skills and understand the core of effective system architecture with SolidPrinciples.org.`,
    keywords: `${formattedPrinciple}, SOLID principles, software design, coding best practices, pseudocode examples, object-oriented programming, software architecture`,
    author: "SolidPrinciples.org Team",
    og_title: `SolidPrinciples.org - The Essence of the ${formattedPrinciple} Principle`,
    og_description: `Master the ${formattedPrinciple} Principle through comprehensive insights and pseudocode examples. Join the community of proficient developers with SolidPrinciples.org.`,
    og_url: `https://www.SolidPrinciples.org/${principle}`,
    twitter_title: `Discover the ${formattedPrinciple} Principle at SolidPrinciples.org`,
    twitter_description: `Embark on an educational journey with SolidPrinciples.org and uncover the intricacies of the ${formattedPrinciple} Principle through intuitive pseudocode illustrations.`,
  };
};

type PrinciplePageTypes = {
  currentPrinciple: string;
};
const PrinciplePage: React.FC<PrinciplePageTypes> = ({ currentPrinciple }) => {
    const principleMeta = generatePrincipleMeta(currentPrinciple);

  return (
    <ErrorBoundaryPage>
      <Meta meta={principleMeta} />

      <Landing
        currentPrinciple={currentPrinciple}
        currentLanguage={"pseudocode"}
      />
    </ErrorBoundaryPage>
  );
};
export async function getStaticPaths() {
  const paths = [
    { params: { principle: "single-responsibility" } },
    { params: { principle: "open-closed-principle" } },
    { params: { principle: "liskov-substitution-principle" } },
    { params: { principle: "interace-segregation-principle" } },
    { params: { principle: "dependency-inversion-principle" } },
  ];

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const principle = params?.principle as string;

  return {
    props: { currentPrinciple: principle },
  };
};
export default PrinciplePage;
