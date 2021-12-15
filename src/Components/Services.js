import Content from './Content'

const Services = () => {

    let heading = {
        dark: 'What are',
        light: 'we capable of',
        short_intro: 'By focusing on design as an enabler and putting a huge emphasis on out clients as co-producers, we create innovate, sustainable marketing that enhances brand experience and user engagement'
    }

    return(
        <div className="main-container">
            <div className="services-container">
                <div className="header-intro">
                    <Content heading={heading} />
                </div>
                <div className="services-list">
                    <ul className="service-item">
                        <li>
                            <h3> Brand </h3>
                            <ul>
                                <li>
                                <a href="#"> Brand Strategy </a>
                                </li>
                                <li>
                                <a href="#"> Logo & Name </a>
                                </li>
                                <li>
                                <a href="#"> Identity & Collateral </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3> Marketing </h3>
                            <ul>
                                <li>
                                   <a href="#"> Digital </a>
                                </li>
                                <li>
                                <a href="#"> Market Research </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3> Development </h3>
                            <ul>
                                <li>
                                <a href="#"> eCommerce </a>
                                </li>
                                <li>
                                <a href="#"> Web Development </a>
                                </li>
                                <li>
                                <a href="#"> Mobile Apps </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div> 
            </div> 
        </div>
    );
}

export default Services