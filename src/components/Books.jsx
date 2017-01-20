import React from 'react'
import TabList from './Navigations/Tabs/TabList'
import Thumbnail from './Images/Thumbnail'
import filters from '../mocks/filters'
import books from '../mocks/books'

class Books extends React.Component {
  constructor () {
    super()
    this.selectTab = this.selectTab.bind(this)
    this.state = {
      books,
      filters
    }
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category
        return filter
      }),
      books: category === 'All' ? books : books.filter(book => (book.category === category)),
    })
  }

  render () {
    const { books, filters } = this.state

    return (
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
    )
  }
}

export default Books