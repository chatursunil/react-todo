const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const TodoSearch = React.createClass({
    render: function() {
        const {dispatch, searchText, showCompleted} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
                        dispatch(actions.setSearchText(this.refs.searchText.value));
                    }}/>
                </div>
                <div>
                    <label htmlFor="showCompleted">
                        <input type="checkbox" id="showCompleted" ref="showCompleted" checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show Completed
                    </label>
                </div>
            </div>
        );
    }
});

export default connect((state) => {
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    };
})(TodoSearch);