import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      
      <ul>
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/shopdetaildescription">ShopDetailDescription</Link>
        </li>
        <li>
          <Link to="/detailreview">DetailReview</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/blogdetail">BlogDetail</Link>
        </li>
        <li>
          <Link to="/contactus">Contactus</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
