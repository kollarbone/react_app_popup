import People from "./People";
import {
  followActionCreater,
  unfollowActionCreator,
  setUsersActionCreator,
  currentPageActionCreater
} from "../../Redux/people-reducer";
import { connect } from "react-redux";
import React from "react";

class PeopleClass extends React.Component {
  pageChange = (currentPage) => {
    this.props.currentPageActionCreater(currentPage);
  };
  render() {
    return (
      <People
        theme={this.props.theme}
        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        pageChange={this.pageChange}
        currentPage={this.props.currentPage}
        people={this.props.people}
        followActionCreater={this.props.followActionCreater}
        unfollowActionCreator={this.props.unfollowActionCreator}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    people: state.people.people,
    pageSize: state.people.pageSize,
    totalCount: state.people.people.length,
    currentPage: state.people.currentPage
  };
};

export default connect(mapStateToProps, {
  followActionCreater,
  unfollowActionCreator,
  setUsersActionCreator,
  currentPageActionCreater
})(PeopleClass);
