import {FaChevronLeft , FaChevronRight} from 'react-icons/fa'; 
import {useState} from 'react';
import projectArray from './projectArray';

const ProjectFilter = () => {
    
    // get index of project currently being hovered over
    const [currentActive , setCurrentActive] = useState(null);
    // change state of hovered when hovering over project
    const [hovered , setHovered] = useState(false);

    // get the current index of the selected filter
    const[currentFilter , setCurrentFilter] = useState(0);
    

    // Only 5 projects displayed at a time. Use this state to determine the start point of array slice
    const[startItem , setStartItem] = useState(0);

    // End point of array slice
    const[endItem , setEndItem] = useState(5);

    // Keep track of current page
    const[page , setPage] = useState(0);

    // State to check if link is being hovered to add styling
    const[linkHover , setLinkHover] = useState(null);
    
    const[projectLinkHover , setProjectLinkHover] = useState(null);


    const setCurrent = (index) => {setCurrentActive(index)};
    const setFilter = (index) => {setCurrentFilter(index)};


    // get project array which is listed in /components/projectArray and store in this state to allow filter modification
    const[filterTo, setFilterTo] = useState(projectArray['All'])


    // list of filters to be listed
    let projectFilterNav = ['All','Branding','Web Design','Digital Marketing'];

    console.log(filterTo.length / 5)

    return(
        <>
            <div className="project-filter">
                    <ul>
                        {
                            projectFilterNav.map((filter , index) => (
                                <li onClick={(e) => {setFilter(index); setFilterTo(projectArray[`${filter}`]); setStartItem(0); setEndItem(5);}} className={currentFilter === index ? ('project-category active') : ('project-category')}>
                                    <a> {filter} </a>
                                </li>
                            ))
                        }
                     </ul>
                </div> 
                <div className="projects-container">
                    { filterTo.slice(startItem, endItem).map((project , index) => (

                        <div className="project" style={{backgroundImage:`url(${project.img})`}} key={index} onMouseEnter={(e) => {setCurrent(index); setHovered(true)}} onMouseLeave={(e) => setHovered(false)}>
                            <div className={currentActive === index && hovered ? ('project-intro project-active') : ('project-intro')}>
                                <div className="project-intro-content">
                                    <h3> {project.title} </h3>
                                    <p> {project.content} </p>
                                    <a href="#" className="project-intro-link" onMouseOver={(e) => {setProjectLinkHover(true)}} onMouseLeave={(e) => {setProjectLinkHover(false)}}> Full Project <span className={projectLinkHover ? ('underline') : ('')}></span> </a> 
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div class="projects-navigation"> 
                    <a className="content-link" href="#" onMouseOver={e => setLinkHover(true)} onMouseLeave={e => setLinkHover(false)}> <span> See all work </span> <span className={ linkHover ? ('underline') : ('')}> </span> </a>

                    {/* only show these buttons is projectArray for the specific filter is greater than 5  */}
                    {
                        filterTo.length > 5 ? (
                        <div class="slider-buttons">
                            { startItem === 0 ? ('') : (<div className="previous-group" onClick={(e) => { setPage(page - 1); setStartItem(startItem - 5); setEndItem(endItem - 5)}}> <span> <FaChevronLeft /> </span> </div>)}
                            {page == Math.floor(filterTo.length / 5) ? ('') : (<div className="next-group" onClick={(e) => { setPage(page + 1); setStartItem(endItem); setEndItem(endItem + 5)}}> <span> <FaChevronRight /> </span></div>) }
                        </div> 
                        ) : ('')
                    }
                </div>
        </>
    )
}


export default ProjectFilter