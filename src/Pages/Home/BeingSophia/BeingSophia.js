import React from 'react';
import './BeingSophia.css';
import Sophiahat from '../../../images/other-images/sophia_therobot_hat.jpg';
import sophiabeingnext from '../../../images/other-images/beingsophialogo.png';
import { Link } from 'react-router-dom';


const BeingSophia = () => {

     return (
          <div className="container">
              
              <div className="row">
                    <div className="col-lg-7">
                         
                         <img className="img-fluid" src={Sophiahat} alt="" />
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center">
                       <div className="sub-right">
                       <img className="img-fluid"  src={sophiabeingnext} alt="" />
                         <h3>AI Coming Of Age</h3>
                         <p>Being Sophia is about Sophia’s emerging life, adventures, experiences, and quest to learn and develop into a super-intelligent, benevolent being. Join her as she embarks on her adventures and incredible journey of becoming a conscious, living machine.</p>

                         <Link to="/contact">
                         <button className="book-btn">Book Sophia For Your Next Virtual Event!</button>
                         </Link>
                       </div>
                    </div>
              </div>
              
          </div>
     );
};

export default BeingSophia;