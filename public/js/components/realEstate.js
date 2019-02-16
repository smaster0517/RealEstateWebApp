webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Alice'
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeStyles = _this.homeStyles.bind(_this);
    _this.rooms = _this.rooms.bind(_this);
    _this.baths = _this.baths.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        console.log(cities);
        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: 'item.' },
            item
          );
        });
      }
    }
  }, {
    key: 'homeStyles',
    value: function homeStyles() {
      if (this.props.globalState.populateFormsData.homeStyles != undefined) {
        var homeStyles = this.props.globalState.populateFormsData.homeStyles;

        console.log(homeStyles);
        return homeStyles.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: 'item' },
            item
          );
        });
      }
    }
  }, {
    key: 'rooms',
    value: function rooms() {
      if (this.props.globalState.populateFormsData.rooms != undefined) {
        var rooms = this.props.globalState.populateFormsData.rooms;

        console.log(rooms);
        return rooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: 'item' },
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'baths',
    value: function baths() {
      if (this.props.globalState.populateFormsData.baths != undefined) {
        var baths = this.props.globalState.populateFormsData.baths;

        console.log(baths);
        return baths.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: 'item' },
            item
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.cities(),
            _react2.default.createElement(
              'option',
              { value: 'HappyValley' },
              'Happy Valley'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Beaverton' },
              'Beaverton'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Gresham' },
              'Gresham'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Troutdale' },
              'Troutdale'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Hillsboro' },
              'Hillsboro'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Aloha' },
              'Aloha'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Oregon_City' },
              'Oregon City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lake_Oswego' },
              'Lake Oswego'
            ),
            _react2.default.createElement(
              'option',
              { value: 'West_Linn' },
              'West Linn'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'homeStyle' },
            'Home Style'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeStyle', className: 'filters homeStyle', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Homes'
            ),
            this.homeStyles(),
            _react2.default.createElement(
              'option',
              { value: 'Ranch' },
              'Ranch'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Cape_Cod' },
              'Cape Cod'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bungalo' },
              'Bungalo'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Colonial' },
              'Colonial'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Mediterranean' },
              'Mediterranean'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Mid_Century_Modern' },
              'Mid-Century Modern'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Split_Level' },
              'Split-Level'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Tudor' },
              'Tudor'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Victorian' },
              'Victorian'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Art_Deco' },
              'Art Deco'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Duplex' },
              'Duplex'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'bedrooms' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            this.rooms()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'bathrooms' },
            'Bathrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bathrooms', className: 'filters bathrooms', onChange: this.props.change },
            this.baths()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min_price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max_price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters square_feet' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Square Feet'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_sqft', className: 'min_sqft', onChange: this.props.change, value: this.props.globalState.max_sqft }),
            _react2.default.createElement('input', { type: 'text', name: 'max_sqftt', className: 'max_sqft', onChange: this.props.change, value: this.props.globalState.max_sqft })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters lot-size' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Lot Size'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_lot_size', className: 'min_lot_size' }),
            _react2.default.createElement('input', { type: 'text', name: 'max_lot_size', className: 'max_lot_size' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters additionalAmenities', onChange: this.props.change },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Additional Ammenities'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'additionalAmenities' },
              _react2.default.createElement(
                'span',
                null,
                'Elevator'
              ),
              _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'additionalAmenities' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'additionalAmenities' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'additionalAmenities' },
              _react2.default.createElement(
                'span',
                null,
                'Storage'
              ),
              _react2.default.createElement('input', { name: 'storage', value: 'storage', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'additionalAmenities' },
              _react2.default.createElement(
                'span',
                null,
                'Fireplace'
              ),
              _react2.default.createElement('input', { name: 'fireplace', value: 'fireplace', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'additionalAmenities' },
              _react2.default.createElement(
                'span',
                null,
                'Hardwood Floors'
              ),
              _react2.default.createElement('input', { name: 'hardwood_floors', value: 'hardwood_floors', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'additionalAmenities' },
              _react2.default.createElement(
                'span',
                null,
                'Bonus Space'
              ),
              _react2.default.createElement('input', { name: 'bonus_space', value: 'bonus_space', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Alice'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Alice'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "sorry your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement('div', { className: 'user-img' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Carolyn Meyers'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      'Listed on 01/05/19'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'sqft' },
                      _react2.default.createElement('i', { className: 'far fa-square' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        '1200 sqft'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.bedrooms,
                        ' bedrooms'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn' },
                    'View Listing'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                '$',
                listing.price
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement('i', { className: 'fa fa-map-marker-alt', 'aria-hidden': 'true' }),
                ' ',
                listing.city,
                ', ',
                listing.state
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '300 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '7654 Shoene Rd',
  city: 'HappyValley',
  state: 'OR',
  bedrooms: '1',
  price: '565,000',
  sqft: '2000',
  lotsize: '1 acre',
  homeStyle: 'Craftsman',
  extras: ['elevator', 'pool'],

  image: 'https://lh3.googleusercontent.com/p/AF1QipOFNLWTBCfAU6cYTJBVln9Eaq4lTAuSRBBw6G4g=s1600-w300-h300'
}, {
  address: '4762 SW Floure Ave',
  city: 'Beaverton',
  state: 'OR',
  bedrooms: '2',
  price: '278,000',
  sqft: '1200',
  lotsize: '1 acre',
  homeStyle: 'Bungalo',
  extras: ['elevator', 'pool'],

  image: 'https://i1.wp.com/pdx-realestate.com/wp-content/uploads/2018/11/18311080-6-s.jpg?fit=320%2C240'
}, {
  address: '2752 Krentz Place',
  city: 'Gresham',
  state: 'OR',
  bedrooms: '3',
  price: '464,000',
  sqft: '1800',
  lotsize: '1 acre',
  homeStyle: 'Town House',
  extras: ['elevator', 'pool'],

  image: 'https://i2.wp.com/pdx-realestate.com/wp-content/uploads/2018/06/18588137-1-s.jpg?fit=320%2C240'
}, {
  address: '92659 Canby Ct.',
  city: 'Troutdale',
  state: 'OR',
  bedrooms: '4',
  price: '198,000',
  sqft: '1000',
  lotsize: '1 acre',
  homeStyle: 'Cape Cod',
  extras: ['elevator', 'pool'],

  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuZkPXJ7u3Vf5lVN9TCLQ7PyFoIEFUFDSyWdZtvMetDauY6lp4'
}, {
  address: '4472 39th St.',
  city: 'Hillsboro',
  state: 'OR',
  bedrooms: '3',
  price: '385,000',
  sqft: '1500',
  lotsize: '1 acre',
  homeStyle: 'Cottage',
  extras: ['elevator', 'pool'],

  image: 'https://i.pinimg.com/236x/d7/25/4f/d7254f584eeb5813014fa33fdde7dfd4--website-ideas-home-staging.jpg'
}, {
  address: '1121 SE Couch Ave.',
  city: 'Portland',
  state: 'OR',
  bedrooms: '2',
  price: '799,000',
  sqft: '2200',
  lotsize: '1 acre',
  homeStyle: 'Ranch',
  extras: ['elevator', 'pool'],

  image: 'https://i.pinimg.com/236x/6d/ed/d0/6dedd01b11f1abd365fc70d1967d6d0e--take-that-condos.jpg'
}, {
  address: '1976 NE Hollywood Ct.',
  city: 'Aloha',
  state: 'OR',
  bedrooms: '1',
  price: '249,000',
  sqft: '1100',
  lotsize: '1 acre',
  homeStyle: 'Cape Cod',
  extras: ['elevator', 'pool'],

  image: 'https://images2.loopnet.com/i2/i6K6CZ69lDPqpY8Af5QNJTkHG4jflW2p_O-nyRf8ppY/106/image.jpg'
}, {
  address: '9888 SE Tibbets Circle',
  city: 'Lake_Oswego',
  state: 'OR',
  bedrooms: '2',
  price: '799,000',
  sqft: '2800',
  lotsize: '1 acre',
  homeStyle: 'Colonial',
  extras: ['elevator', 'pool'],

  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6IfvvmwfGUwlGyOtFGPhiYKSPhDjheRQIMH-T57kdySETHkG'
}, {
  address: '4444 Lucky Drive',
  city: 'West_Linn',
  state: 'OR',
  bedrooms: '3',
  price: '489,900',
  sqft: '1700',
  lotsize: '1 acre',
  homeStyle: 'Ranch',
  extras: ['elevator', 'pool'],

  image: 'https://ap.rdcpix.com/1329768741/4fe4d9493292d03ff1f66810cd900e48l-m0xd-w480_h480_q80.jpg'
}, {
  address: '12700 S Hills Ave.',
  city: 'Oregon City',
  state: 'OR',
  bedrooms: '4',
  price: '398,000',
  sqft: '1600',
  lotsize: '1 acre',
  homeStyle: 'Modern',
  extras: ['elevator', 'pool'],

  image: 'https://i.pinimg.com/236x/26/40/b2/2640b25fbd3a0d14fa8402f4857ba808--oregon-coast-a-small.jpg'
}, {
  address: '2034 Grand Ave',
  city: 'Portland',
  state: 'OR',
  bedrooms: '3',
  price: '1,200,000',
  sqft: '3000',
  lotsize: '1 acre',
  homeStyle: 'Mediterranean',
  extras: ['elevator', 'pool'],

  image: 'https://scontent.cdninstagram.com/vp/231cea726b2b966224505db040666d19/5CCD10E6/t51.2885-15/e35/s320x320/38734760_1895338204102931_3525140759479058432_n.jpg?_nc_ht=scontent.cdninstagram.com'
}, {
  address: '43021 Porter St.',
  city: 'Beaverton',
  state: 'OR',
  bedrooms: '2',
  price: '565,000',
  sqft: '2000',
  lotsize: '1 acre',
  homeStyle: 'Craftsman',
  extras: ['Hardwood Floors', 'Bonus Space'],

  image: 'https://lh3.googleusercontent.com/p/AF1QipOFNLWTBCfAU6cYTJBVln9Eaq4lTAuSRBBw6G4g=s1600-w300-h300'
}];
exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Alice',
      listingsData: _listingsData2.default,
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
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      search: ''

    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.populateForms = this.populateForms.bind(this);

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.sqft >= _this3.state.min_sqft && item.sqft <= _this3.state.max_sqft && item.bedrooms <= _this3.state.bedrooms && item.bathrooms <= _this3.state.bathrooms;
      });
      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }
      if (this.state.homeStyle != "All") {
        newData = newData.filter(function (item) {
          return item.homeStyle == _this3.state.homeStyle;
        });
      }
      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }
      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.search(searchText);
        });
      }
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      // city//
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      //homeStyle
      var homeStyles = this.state.listingsData.map(function (item) {
        return item.homeStyle;
      });
      homeStyles = new Set(homeStyles);
      homeStyles = [].concat(_toConsumableArray(homeStyles));

      homeStyles = homeStyles.sort();

      //bedrooms
      var rooms = this.state.listingsData.map(function (item) {
        return item.bedrooms;
      });
      rooms = new Set(rooms);
      rooms = [].concat(_toConsumableArray(rooms));

      rooms = rooms.sort();

      //bathrooms

      var baths = this.state.listingsData.map(function (item) {
        return item.bathrooms;
      });
      baths = new Set(baths);
      baths = [].concat(_toConsumableArray(baths));

      baths = baths.sort();

      this.setState({
        populateFormsData: {
          cities: cities,
          homeStyles: homeStyles,
          rooms: rooms,
          baths: baths

        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);
