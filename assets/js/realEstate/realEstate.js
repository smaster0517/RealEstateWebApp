import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Alice',
      listingsData,
      city: 'All',
      homeStyle: 'All',
      bedrooms: '0',
      bathrooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_sqft: 0,
      max_sqft: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      storage: false,
      fireplace: false,
      hardwood_floors: false,
      bonus_space: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc'
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
  }
  componentWillMount(){

    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      listingsData
    })
  }
  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.populateForms = this.populateForms.bind(this)


    this.setState({
      [name]: value
    }, () => {
    console.log(this.state)
    this.filteredData()
    })
  }

  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.sqft >= this.state.min_sqft && item.sqft <= this.state.max_sqft && item.bedrooms <= this.state.bedrooms && mitem.bathrooms <= this.state.bathrooms
    })
    if(this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }
    if(this.state.homeStyle != "All") {
      newData = newData.filter((item) => {
        return item.homeStyle == this.state.homeStyle
      })
    }
    if(this.state.sortby == 'price-dsc') {newData = newData.sort((a,b) => {
      return a.price - b.price
      })
    }
    if(this.state.sortby == 'price-asc') {newData = newData.sort((a,b) => {
      return b.price - a.price
      })
    }

    this.setState({
      filteredData: newData
    })
  }
  populateForms() {
    // city//
    var cities = this.state.listingsData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    cities = cities.sort()

    //homeStyle
    var homeStyles = this.state.listingsData.map((item) => {
      return item.homeStyle
    })
    homeStyles = new Set(homeStyles)
    homeStyles = [...homeStyles]

    homeStyles = homeStyles.sort()

    //bedrooms
    var rooms = this.state.listingsData.map((item) => {
      return item.bedrooms
    })
    rooms = new Set(rooms)
    rooms = [...rooms]

    rooms = rooms.sort()

    //bathrooms

    var baths = this.state.listingsData.map((item) => {
      return item.bathrooms
    })
    baths = new Set(baths)
    baths = [...baths]

    baths = baths.sort()

    this.setState({
      populateFormsData: {
        cities,
        homeStyles,
        rooms,
        baths

      }
    }, () => {
      console.log(this.state)
    })
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
      <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
      <Listings listingsData={this.state.filteredData} change={this.change}/>
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
