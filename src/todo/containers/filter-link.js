import { connect } from 'react-redux';
import { setVisibilityFilters } from "../actions";
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilters(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);