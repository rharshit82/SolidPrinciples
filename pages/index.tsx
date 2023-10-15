import Meta from "@/components/Meta/Meta";
import Landing from "@/components/Landing/index";
import ErrorBoundaryPage from "@/components/Error/ErrorBoundaryPage";

const meta = {
    pageTitle: 'SolidPrinciples.net - Mastering SOLID Principles in Software Design',
    description: 'Welcome to SolidPrinciples.net, the go-to hub for understanding SOLID principles in software development. Embark on a journey to better coding practices and robust software design with our comprehensive guides.',
    keywords: 'SOLID principles, software design, coding best practices, object-oriented programming, software architecture, design principles',
    author: 'SolidPrinciples.net Team',
    og_title: 'SolidPrinciples.net - Mastering SOLID Principles in Software Design',
    og_description: 'Dive into SOLID principles with SolidPrinciples.net. Enhance your software design skills, embrace best coding practices, and elevate your developer journey.',
    og_url: 'https://www.SolidPrinciples.net/',
    twitter_title: 'SolidPrinciples.net - Mastering SOLID Principles in Software Design',
    twitter_description: 'Unlock the power of SOLID principles with SolidPrinciples.net. A treasure trove of knowledge for every developer aiming for excellence.',
};

const Index = () => {
  return (
    <ErrorBoundaryPage>
      <Meta meta={meta} />

      <Landing />
    </ErrorBoundaryPage>
  );
};

export default Index;
