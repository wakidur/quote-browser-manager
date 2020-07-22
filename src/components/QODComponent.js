import React, { Component } from "react";
import { connect } from "react-redux";

import SpinnerComponent from "./Spinner";
import { fetchQotd, createQuote } from "../actions";

class QODComponent extends Component {
  componentDidMount() {
    this.props.fetchQotd();
    console.log(this.props.qotd);
  }

  renderContent() {
    if (this.props.qotd)
      return (
        <blockquote className="blockquote mb-0">
          <p>
          <i className="fa fa-quote-left text-info mr-4" aria-hidden="true"></i>
            {this.props.qotd.body}
            <i className="fa fa-quote-right text-info ml-4" aria-hidden="true"></i>
            </p>
          <footer className="blockquote-footer mb-4">
            {this.props.qotd.author}
          </footer>
        </blockquote>
      );

    return <SpinnerComponent message="Please accept qotd request" />;
  }

  addQuotesAsFavorite = (params) => {
    console.log(this.props.qotd);
    this.props.createQuote(this.props.qotd);
  };

  getTheQuoteOfTheDay = () => {
    console.log("refress")
    this.props.fetchQotd();
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          {this.renderContent()}
          <button
            type="button"
            onClick={this.addQuotesAsFavorite}
            className="btn btn-danger rounded-circle"
          >
            <i className="fa fa-heart" aria-hidden="true"></i>
          </button>
          <button
            onClick={this.getTheQuoteOfTheDay}
            type="button"
            className="btn btn-danger rounded-circle ml-3"
          >
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  qotd: state.qotd.quote,
});

const mapDispatchToProps = {
  fetchQotd,
  createQuote
};

export default connect(mapStateToProps, mapDispatchToProps)(QODComponent);
