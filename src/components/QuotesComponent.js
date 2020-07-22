import React, { Component } from "react";
import { connect } from "react-redux";

import SpinnerComponent from "./Spinner";
import { fetchQuotes, createQuote } from "../actions";

class QuotesComponent extends Component {
  state = {
    search: "",
  };

  componentDidMount() {
    this.props.fetchQuotes();
    console.log(this.props.quouts);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.search);
  };

  resetForm = () => {
    this.setState({ search: "" });
  };

  addQuotesAsFavorite (quout) {
    console.log(quout);
    this.props.createQuote(quout);
  };

  render() {
    return (
      <div>
        <form className="mb-4" onSubmit={this.onFormSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={this.state.search}
              placeholder="Quote Text Filter "
              onChange={(e) => this.setState({ search: e.target.value })}
            />
            <div className="input-group-append">
              <button
                onClick={this.resetForm}
                className="btn btn-outline-secondary"
                type="button"
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>
        {this.props.quouts.map((quout) => {
          return (
            <div key={quout.id} class="card mb-3">
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>{quout.body}</p>
                  <footer class="blockquote-footer">
                    {quout.author}
                    <button
                      type="button"
                      onClick={ () => this.addQuotesAsFavorite(quout)}
                      className="btn btn-danger rounded-circle ml-4"
                    >
                      <i className="fa fa-heart" aria-hidden="true"></i>
                    </button>
                  </footer>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quouts: state.quouts,
});

const mapDispatchToProps = {
  fetchQuotes,
  createQuote,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesComponent);
