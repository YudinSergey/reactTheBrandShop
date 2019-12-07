import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/HeaderList/Header';
import Subscribe from './components/SubscribeList/Subscribe';
import AboutCompany from './components/AboutCompanyList/AboutCompany';
import Footer from './components/FooterList/Footer';
import MainPagePicture from './components/main_page_components/MainPagePictureList/MainPagePicture';
import HotDeals from './components/main_page_components/HotDealsList/HotDeals';
import PopularProducts from './components/main_page_components/PopularProductsList/PopularProducts';
import ProfitableItems from './components/ProfitableItemsList/ProfitableItems';
import OfferBlock from './components/main_page_components/OfferBlockList/OfferBlock';
import PagesHeadline from './components/PagesHeadlineList/PagesHeadline';
import MainPart from './components/products_page_components/MainPartList/MainPart'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" component={MainPagePicture} exact/>
        <Route exact path="/products">
          <PagesHeadline headline="New Arrivals" category="Men"/>
        </Route>
        <Route path="/products" component={MainPart} exact/>
        <Route path="/" component={HotDeals} exact/>
        <Route path="/" component={PopularProducts} exact/>
        <Route path="/" component={OfferBlock} exact/>
        <Route exact path="/products">
          <div className="profitable_items_section" style={{backgroundColor:"#222224"}}>
            <div className="container">
              <ProfitableItems/>
            </div>
          </div>
        </Route>
        <Subscribe/>
        <AboutCompany/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
