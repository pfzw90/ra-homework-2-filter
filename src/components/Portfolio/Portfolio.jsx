import React from 'react'
import Toolbar from './Toolbar/Toolbar'
import ProjectList from './ProjectList/ProjectList'
import projects from '../../js/projects'
import filters from '../../js/filters'
import shortid from 'shortid'

const INITIAL_STATE = {filters: filters, projects:projects, selected:'All'}

export default class Portfolio extends React.Component {
    projectsIndex = INITIAL_STATE.projects.map((project) => ({...project, id: shortid.generate() }))
    state = {...INITIAL_STATE, projects: this.projectsIndex} 
    
   

    onSelectFilter(e) {
        const filter = e.target.id;
        if (filter !== 'All') this.setState({projects: this.projectsIndex.filter(project => project.category === filter), selected: filter});
        else this.setState({...INITIAL_STATE, projects : this.projectsIndex})
    }


    render() { 
        return(
        <div className="Portfolio">
        <Toolbar  filters={this.state.filters}  selected={this.state.selected}  onSelectFilter={this.onSelectFilter.bind(this)}/>
        <ProjectList projects={this.state.projects}/>
        </div>
        ) 
    }
}