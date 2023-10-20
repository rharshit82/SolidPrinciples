import Meta from "@/components/Meta/Meta";
import Landing from "@/components/Landing/index";
import ErrorBoundaryPage from "@/components/Error/ErrorBoundaryPage";

const meta = {
    pageTitle: 'SolidPrinciples.org - Mastering SOLID Principles in Software Design',
    description: 'Welcome to SolidPrinciples.org, the go-to hub for understanding SOLID principles in software development. Embark on a journey to better coding practices and robust software design with our comprehensive guides.',
    keywords: 'SOLID principles, software design, coding best practices, object-oriented programming, software architecture, design principles',
    author: 'SolidPrinciples.org Team',
    og_title: 'SolidPrinciples.org - Mastering SOLID Principles in Software Design',
    og_description: 'Dive into SOLID principles with SolidPrinciples.org. Enhance your software design skills, embrace best coding practices, and elevate your developer journey.',
    og_url: 'https://www.SolidPrinciples.org/',
    twitter_title: 'SolidPrinciples.org - Mastering SOLID Principles in Software Design',
    twitter_description: 'Unlock the power of SOLID principles with SolidPrinciples.org. A treasure trove of knowledge for every developer aiming for excellence.',
};

const Index = ({currentPrinciple}) => {
  return (
    <ErrorBoundaryPage>
      <Meta meta={meta} />

      <Landing currentPrinciple={currentPrinciple} />
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
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {

    const { principle } = context.params;

    return {
        props: { currentPrinciple: principle },
    };
}
export default Index;
