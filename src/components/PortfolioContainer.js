import React, { Component } from "react";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import $ from "jquery"

class PortfolioPage extends Component {
  state = {
    currentPage: "Index"
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case "Portfolio":
        return <Portfolio />
      default:
        return <Index />
    }
  };

  showInfo = () => {
    // Porfolio Cards Sliding
    $('.show-btn').on('click', function () {
      $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function () {
      $('div.card-reveal[data-rel=' + $(this).data('rel') + ']').slideToggle('slow');
    });
  }

  render() {
    if (this.state.currentPage === "Index") {
      return (
        <>
          <Index
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange} />
        </>
      );
    } else {
      return (
        <>
          <Portfolio
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange} />
        </>
      );
    }
  }
}

export default PortfolioPage;
