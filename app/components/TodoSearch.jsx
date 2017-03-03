const React = require('react');

const TodoSearch = React.createClass({
    handleSearch: function() {
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function() {
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label htmlFor="showCompleted">
                        <input type="checkbox" id="showCompleted" ref="showCompleted" onChange={this.handleSearch}/>
                        Show Completed
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;