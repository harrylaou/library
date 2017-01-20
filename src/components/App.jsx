import React from 'react'
import Menu from './Navigations/Menu'
import Header from './Header'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import TabList from './Tabs/TabList'
import Thumbnail from './Thumbnail'
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

    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />
        <Navbar toggleMenu={ this.toggleMenu } />
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
                <TabList filters={filters} selectTab={this.selectTab}/>
              </div>
            </div>
            <div className="row book-list">
              { books.map( book => (<Thumbnail cover={book.cover} key={book.title}/>)) }
            </div>
          </div>
        </section>

        <About />
        <Footer />
      </div>
    )
  }
}

export default App
