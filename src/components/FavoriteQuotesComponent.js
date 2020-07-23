import React, { Component } from "react";
import { connect } from "react-redux";

import SpinnerComponent from "./Spinner";
import { fetchData } from "../actions/getFirebase";

class FavoriteQuotesComponent extends Component {
 

  componentDidMount() {
    this.props.fetchData();
    
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>dfdf</p>
              <footer className="blockquote-footer">
                dddd
                <button
                  type="button"
                  // onClick={this.addQuotesAsFavorite(quout)}
                  className="btn btn-danger rounded-circle"
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favoritequotes: state.favoritequotes,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteQuotesComponent);
