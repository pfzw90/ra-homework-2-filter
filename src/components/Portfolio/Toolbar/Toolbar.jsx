import React from 'react'
export default class Toolbar extends React.Component {

    onSelectFilter = (filter) => {
        this.props.onSelectFilter(filter)
    }

    render() {
        return(
            <div className="Toolbar">
                {this.props.filters.map(filter=> (
                    <div className={this.props.selected === filter ? "Toolbar-Filter-active" : "Toolbar-Filter"} 
                        key={filter} id={filter}
                        onClick={this.onSelectFilter}>{filter}</div>))}
            </div>
        )
    }
}