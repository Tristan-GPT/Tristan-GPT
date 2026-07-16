import './NotFound.scss';

export function NotFound() {
    return (
        <>
            <h1>This page don't exist.</h1>
            <button className="button">
                <a href="/" className="secondary homego">
                    Go on the main page
                </a>
            </button>
        </>
    );
}
