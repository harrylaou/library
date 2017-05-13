import React from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Books from './Books'
import Navbar from './Navigations/Navbar'



class App extends React.Component {
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)

    this.state = {
      // books,
      // filters,
      menu: { open : false }
    }
  }

  toggleMenu () {
    this.setState({ menu : { open: !this.state.menu.open } })
  }

  // selectTab ( category ) {
  //   this.setState({
  //     filters: filters.map(filter => {
  //       filter.selected = filter.category === category
  //       return filter
  //     }),
  //     books: category === 'All'? books : books.filter( book => (book.category === category) ),
  //   })
  // }

  render() {
    const { menu } = this.state

    // const tabItems = filters.map(filter => (
    //   <li className={ filter.selected? 'active': '' } key={ filter.category } onClick={ this.selectTab.bind(null, filter.category) }>
    //     <a href="#0">{ filter.category }</a>
    //   </li>
    // ))

    return (
      <div id="page-wrap">

        <Menu
          pageWrapId="page-wrap"
          isOpen={ menu.open }
          toggleMenu={ this.toggleMenu }
        />

        <Navbar toggleMenu={ this.toggleMenu } />

        <Header title="ReactJS Library" />

        <Books />

        <About/>

        <Footer/>

      </div>
    )
  }
}

export default App
