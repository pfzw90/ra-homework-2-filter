import React from 'react'

export default class ProjectList extends React.Component {
 
    render() {
        console.log(this.props)
        return(
            <div className = 'ProjectList'> 
                {this.props.projects.map((project)=> 
                    <div className="ProjectList-Project-Container" key={`${project.id}-Container`}>
                        <img src={project.img} className='ProjectList-Project' alt={project.category} key={project.id}/>
                    </div>
                )}
            </div>
        )
    }
}