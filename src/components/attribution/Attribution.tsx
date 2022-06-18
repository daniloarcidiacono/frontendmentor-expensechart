import './Attribution.scss';

interface AttributionProps {
    link: string;
    author: string;
}

function Attribution({ link, author }: AttributionProps) {
    return (
        <div className="attribution">
            <span>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend Mentor</a>. 
            </span>
            <span>
                Coded by <a href={link} target="_blank" rel="noopener">{author}</a>.
            </span>
        </div>
    );
}

export default Attribution;