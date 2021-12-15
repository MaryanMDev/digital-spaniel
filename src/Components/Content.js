import ProjectFilter from './ProjectFilter';
import React, {useState} from 'react';
 
const Content = ({heading}) => {

    // set state for link hover to allow for animation
    const[linkHover , setLinkHover] = useState(null);

    // returns depend of the contents of the heading prop passed through higher level components
    if(heading.filter){
        return(
            <div className="content">
                <div className="section-heading">
                    {heading.dark ? ( <h2> {heading.dark} </h2>) : (<h2> No Title</h2>)}
                    {heading.light ? ( <h2 className="gray-heading"> {heading.light}  </h2> ) : ('')}
                </div> 
                <ProjectFilter />
            </div>
        );
    
    } else if (heading.case_studies === true){
        return(
            <div className="content">
                <div className="main-container section-heading" style={{textAlign:"center"}}>
                    {heading.dark ? ( <h2> {heading.dark} </h2>) : (<h2> No Title</h2>)}
                    {heading.short_intro ? (<p> {heading.short_intro} </p>) : ('')}
                </div> 
            </div>
        );
    } else {
        return(
            <div className="content">
                <div className="section-heading">
                    {heading.dark ? ( <h2> {heading.dark} </h2>) : (<h2> No Title</h2>)}
                    {heading.light ? ( <h2 className="gray-heading"> {heading.light}  </h2> ) : ('')}
                </div> 
                {heading.short_intro ? (<p> {heading.short_intro} </p>) : ('')}
                <a className="content-link" onMouseOver={e => setLinkHover(true)} onMouseLeave={e => setLinkHover(false)}> <span> Lets's talk </span> <span className={linkHover ? ('underline') : ('')}> </span> </a> 
            </div>
        );
    }
}

export default Content