import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.cities = this.cities.bind(this)
    this.homeStyles = this.homeStyles.bind(this)
    this.rooms = this.rooms.bind(this)
    this.baths = this.baths.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }
  cities() {
    if(this.props.globalState.populateFormsData.cities !=undefined) {
    var{ cities } = this.props.globalState.populateFormsData
    console.log(cities)
     return cities.map((item) => {
       return(
         <option key={item} value="item.">{item}</option>
      )
    })
  }
  }
homeStyles() {
  if(this.props.globalState.populateFormsData.homeStyles !=undefined) {
  var{ homeStyles } = this.props.globalState.populateFormsData
  console.log(homeStyles)
   return homeStyles.map((item) => {
     return(
       <option key={item} value="item">{item}</option>
    )
  })
}
}
rooms(){
  if(this.props.globalState.populateFormsData.rooms !=undefined) {
  var{ rooms } = this.props.globalState.populateFormsData
  console.log(rooms)
   return rooms.map((item) => {
     return(
       <option key={item} value="item">{item}+ BR</option>
    )
  })
  }
}
baths(){
  if(this.props.globalState.populateFormsData.baths !=undefined) {
  var{ baths } = this.props.globalState.populateFormsData
  console.log(baths)
   return baths.map((item) => {
     return(
       <option key={item} value="item">{item}</option>
    )
  })
  }
}


  render () {
    return (<section id="filter">
    <div className="inside">
    <h4>Filter</h4>
    <label htmlFor="city">City</label>
    <select name="city" className="filters city" onChange={this.props.change}>
      <option value="All">All</option>
        {this.cities()}
      <option value="HappyValley">Happy Valley</option>
      <option value="Beaverton">Beaverton</option>
      <option value="Gresham">Gresham</option>
      <option value="Troutdale">Troutdale</option>
      <option value="Hillsboro">Hillsboro</option>
      <option value="Aloha">Aloha</option>
      <option value="Oregon_City">Oregon City</option>
      <option value="Lake_Oswego">Lake Oswego</option>
      <option value="West_Linn">West Linn</option>
    </select>
    <label htmlFor="homeStyle">Home Style</label>

    <select name="homeStyle" className="filters homeStyle" onChange={this.props.change}>
      <option value="All">All Homes</option>
      {this.homeStyles()}
      <option value="Ranch">Ranch</option>
      <option value="Cape_Cod">Cape Cod</option>
      <option value="Bungalo">Bungalo</option>
      <option value="Colonial">Colonial</option>
      <option value="Mediterranean">Mediterranean</option>
      <option value="Mid_Century_Modern">Mid-Century Modern</option>
      <option value="Split_Level">Split-Level</option>
      <option value="Tudor">Tudor</option>
      <option value="Victorian">Victorian</option>
      <option value="Art_Deco">Art Deco</option>
      <option value="Duplex">Duplex</option>
    </select>
    <label htmlFor="bedrooms">Bedrooms</label>
    <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
      {this.rooms()}
    </select>
    <label htmlFor="bathrooms">Bathrooms</label>
    <select name="bathrooms" className="filters bathrooms" onChange={this.props.change}>
      {this.baths()}
    </select>
    <div className="filters price">
      <span className="title">Price</span>
      <input type="text" name="min_price" className="min_price" onChange={this.props.change}
      value={this.props.globalState.min_price} />
      <input type="text" name="max_price" className="max_price" onChange={this.props.change}
      value={this.props.globalState.max_price} />
    </div>
    <div className="filters square_feet">
      <span className="title">Square Feet</span>
      <input type="text" name="min_sqft" className="min_sqft" onChange={this.props.change}
      value={this.props.globalState.min_sqft}/>
      <input type="text" name="max_sqft" className="max_sqft" onChange={this.props.change}
      value={this.props.globalState.max_sqft}/>
    </div>
    <div className="filters lot_size">
      <span className="title">Lot Size</span>
      <input type="text" name="min_lot_size" className="min_lot_size" onChange={this.props.change}
      value={this.props.globalState.min_lot_size}/>
      <input type="text" name="max_lot_size" className="max_lot_size" onChange={this.props.change}
      value={this.props.globalState.max_lot_size}/>
    </div>
    <div className="filters additionalAmenities" onChange={this.props.change}>
    <span className="title">
      Additional Ammenities
    </span>
      <label htmlFor="additionalAmenities">
        <span>Elevator</span>
        <input name="elevator" value="elevator" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="additionalAmenities">
        <span>Swimming Pool</span>
        <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="additionalAmenities">
        <span>Finished Basement</span>
        <input name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="additionalAmenities">
        <span>Storage</span>
        <input name="storage" value="storage" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="additionalAmenities">
        <span>Fireplace</span>
        <input name="fireplace" value="fireplace" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="additionalAmenities">
        <span>Hardwood Floors</span>
        <input name="hardwood_floors" value="hardwood_floors" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="additionalAmenities">
        <span>Bonus Space</span>
        <input name="bonus_space"value="bonus_space" type="checkbox" onChange={this.props.change}/>
      </label>
    </div>
  </div>
</section>)
  }
}
