import fix from '../images/fix.png';
import settings from '../images/fix.png';
import playbutton from '../images/play-button.png';
import html from '../images/html.png';
import './footer.css'

const footer = () => {
    return (
        <section>
            <div className='container'>
                <img src={ fix } alt="fixImg" />
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className='container'>
                <img src={ html } alt="htmlpageImg" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className='container'>
                <img src={ settings } alt="settingsImg" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className='container'>
                <img src={ playbutton } alt="playbtnImg" />
                <h2>JSX</h2>
                <p>Statically-typed design to run on modern browsers.</p>
            </div>
        </section>
    )
}

export default footer;