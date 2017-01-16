import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'

import filters from '../mocks/filters'
import books from '../mocks/books'

class App extends React.Component {
  constructor () {
    super()
    this.selectTab = this.selectTab.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      books,
      filters,
      menu: { open : false }
    }
  }

  toggleMenu () {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category
        return filter
      }),
      books: category === 'All'? books : books.filter( book => (book.category === category) ),
    })
  }

  render() {
    const { books, filters, menu } = this.state

    const tabItems = filters.map(filter => (
      <li className={ filter.selected? 'active': '' } key={ filter.category } onClick={ this.selectTab.bind(null, filter.category) }>
        <a href="#0">{ filter.category }</a>
      </li>
    ))

    return (
      <div id="page-wrap">

        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />

        <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#page-top">ReactJS Academy</a>
                </div>
                <ul className="nav navbar-nav pull-right">
                    <li className="hidden-xs">
                        <a href="#about">About the library</a>
                    </li>
                    <li>
                      <button onClick={ this.toggleMenu } className="btn btn-lg btn-outline">
                        <i className="fa fa-graduation-cap"></i> <span>Training</span>
                      </button>
                    </li>
                </ul>
            </div>
        </nav>

        <Header title="ReactJS Library" />

        <section id="books">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Books</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav nav-pills text-center">
                  { tabItems }
                </ul>
              </div>
            </div>
            <div className="row book-list">
              { books.map( book => ( <div className="col-sm-3" key={ book.title }><img className="img-responsive" src={ book.cover }/></div> )) }
            </div>
          </div>
        </section>

        <section id="about" className="success">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>About The Library</h2>
                        <hr className="star-light" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-2">
                        <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-lg-4">
                        <p>Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                    </div>
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <a target="_blank" href="https://github.com/reactjs-academy/library" className="btn btn-lg btn-outline">
                            <i className="fa fa-code-fork"></i> Fork me on Github
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Main Location</h3>
                            <p>
                              <span>1 Fore Stree</span>
                              <br />
                              <span>London, EC2Y 5EJ</span>
                              <br />
                              <span className="fa fa-map-marker"></span>
                              <a target="_blank" href="https://reactjs.academy/react-redux-training"> Other Locations </a>
                            </p>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>Around the Web</h3>
                            <ul className="list-inline">
                                <li>
                                    <a target="_blank" href="https://github.com/reactjs-academy" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://twitter.com/reactjsacademy" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.instagram.com/reactjsacademy/" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>About ReactJS Academy</h3>
                            <p>
                              <a href="https://reactjs.academy/">ReactJS Academy </a>
                              <span>
                                is devoted to teach React across Europe, providing free workshops and private trainings.
                              </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span>Copyright &copy;</span> <a href="https://reactjs.academy/" target="_blank">ReactJS Academy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default App
