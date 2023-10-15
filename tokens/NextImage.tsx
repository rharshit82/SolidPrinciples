import styled from 'styled-components';
import Image from 'next/image';

interface ContainerProps {
    width?: string;
    height?: string;
    margin?: string;
    cursor?: string;
    transform?: string;
    transition?: string;
    borderRadius?: string;
    opacity?: string;
    dwidth?: string;
    dheight?: string;
    dmargin?: string;
    ddisplay?: string;
    display?: string;
}

const Container = styled.div<ContainerProps>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    cursor: ${props => props.cursor};
    transform: ${props => props.transform};
    transition: ${props => props.transition};
    border-radius: ${props => props.borderRadius};
    opacity: ${props => props.opacity};

    & img{
        border-radius: ${props => props.borderRadius};
    }

    @media (min-width: 769px){
        width: ${props => props.dwidth ? props.dwidth : props.width};
        height: ${props => props.dheight ? props.dheight : props.height};   
        margin: ${props => props.dmargin ? props.dmargin : props.margin};
        display: ${props => props.ddisplay ? props.ddisplay : props.display};
    }
`;
type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";

interface NextImageProps extends ContainerProps {
    src: string;
    alt: string;
    priority?: boolean;
    quality?: string | number;
    objectFit?: ObjectFit ;
}

const NextImage: React.FC<NextImageProps> = props => {
    return (
        <Container {...props}>
            <Image 
                quality={typeof props.quality === 'string' ? parseInt(props.quality) : props.quality} 
                src={props.src} 
                alt={props.alt} 
                priority={props.priority} 
                style={{ objectFit: props.objectFit }} 
                layout="fill" // Added as per Next Image's requirement for 'fill'
            />
        </Container>
    );
}

NextImage.defaultProps = {
    display: 'block',
    alt: 'Image',
    quality: '75'
}

export default NextImage;
