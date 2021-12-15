import Content from './Content'

const Projects = () => {

    let heading = {
        dark: 'Some of our',
        light: 'recent projects',
        filter: 'true'
    }

    return(
        <div className="main-container">
                <div className="header-intro">
                    <Content heading={heading} />
                </div>
        </div>
    );
}

export default Projects