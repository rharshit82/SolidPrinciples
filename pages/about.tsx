import Meta from '../components/Meta/Meta';
import ErrorBoundaryPage from '../components/Error/ErrorBoundaryPage';
import AboutComponent from '../components/About';

const meta = {
    pageTitle: 'About SolidPrinciples.net - Your Guide to SOLID Coding',
    description: 'Uncover the essence of SolidPrinciples.net, your definitive source on SOLID principles. Dive deep into this coding philosophy, understand our mission to simplify software design, and reach out for insights.',
    keywords: 'SOLID principles, software design, SolidPrinciples.net story, coding standards, object-oriented programming',
    author: 'SolidPrinciples.net Team',
    og_title: 'About SolidPrinciples.net - Your Guide to SOLID Coding',
    og_description: 'Join our journey at SolidPrinciples.net as we break down SOLID principles. From novices to pros, we aim to make software design principles accessible to all.',
    og_url: 'https://www.SolidPrinciples.net/about',
    twitter_title: 'About SolidPrinciples.net - Your Guide to SOLID Coding',
    twitter_description: 'Embark on a learning curve with SolidPrinciples.net. Making SOLID principles easy and engaging for everyone.',
};

const About = () => {
    return (
        <ErrorBoundaryPage>
            <Meta meta={meta} />
            <AboutComponent />
        </ErrorBoundaryPage>
    );
};

export default About;
