
import js from '../images/js.jpg';
import {Link} from 'react-router-dom';

function Courses(){
    return(
        <div className="container">
            <div className="row">
                <div className="col s2">
                    <h4>JavaScript Basics</h4>
                </div>
            </div>
            <div className="row">
                <div className="col s3">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <Link to="/activity">
                                    <div className="card-image">
                                        <img src={js} alt="javascript logo" />
                                        <span className="card-title">JS Activity 1</span>
                                    </div>
                                </Link>
                                <div className="card-content">
                                    <p>Learn basics of JavaScript in this basic activity!</p>
                                </div>
                                <div className="card-action">
                                    <a href="#!">Start Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-image">
                                    <img src={js} alt="javascript logo" />
                                    <span className="card-title">JS Activity 2</span>
                                </div>
                                <div className="card-content">
                                    <p>Learn basics of JavaScript in this basic activity!</p>
                                </div>
                                <div className="card-action">
                                    <a href="#!">Start Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-image">
                                    <img src={js} alt="javascript logo" />
                                    <span className="card-title">JS Activity 3</span>
                                </div>
                                <div className="card-content">
                                    <p>Learn basics of JavaScript in this basic activity!</p>
                                </div>
                                <div className="card-action">
                                    <a href="#!">Start Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-image">
                                    <img src={js} alt="javascript logo"/>
                                    <span className="card-title">JS Activity 4</span>
                                </div>
                                <div className="card-content">
                                    <p>Learn basics of JavaScript in this basic activity!</p>
                                </div>
                                <div className="card-action">
                                    <a href="#!">Start Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;