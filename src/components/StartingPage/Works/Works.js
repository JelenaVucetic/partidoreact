import React, { Component } from 'react';

import classes from './Works.css';
import Image1 from '../../../assets/images/radovi1.png';
import Image2 from '../../../assets/images/radovi2.png';
import Image3 from '../../../assets/images/radovi3.png';
import Image4 from '../../../assets/images/radovi4.png';

class Works extends Component {

    state = { isOpen: false };

    showImageHeandler = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log('clicked');
    }


    render()  {
        return (
            <div className={classes.Radovi} >
                <h1>Radovi</h1>
                <div className={classes.Images}>
                    <div > <img src={Image1} alt='img' onClick={() => this.showImageHeandler()} /> </div>
                    {this.state.isOpen && (
                        <dialog
                            className="dialog"
                            style={{ position: "absolute" }}
                            open
                            onClick={this.showImageHeandler}
                        >
                            <img
                                src={Image1}
                                className={classes.DialogImg}
                                onClick={this.showImageHeandler}
                                alt="no image"
                            />
                        </dialog>
                    )}
                    <div> <img src={Image3} alt='img' onClick={() => this.showImageHeandler()} /> </div>
                    {this.state.isOpen && (
                        <dialog
                            className="dialog"
                            style={{ position: "absolute" }}
                            open
                            onClick={this.showImageHeandler}
                        >
                            <img
                                src={Image2}
                                className={classes.DialogImg}
                                onClick={this.showImageHeandler}
                                alt="no image"
                            />
                        </dialog>
                    )}
                        <div> <img src={Image2} alt='img' onClick={() => this.showImageHeandler()} /> </div>
                        {this.state.isOpen && (
                        <dialog
                        className="dialog"
                        style={{ position: "absolute" }}
                        open
                        onClick={this.showImageHeandler}
                    >
                        <img
                            src={Image3}
                            className={classes.DialogImg}
                            onClick={this.showImageHeandler}
                            alt="no image"
                        />
                        </dialog>
                    )}
                    <div> <img src={Image4} alt='img' onClick={() => this.showImageHeandler()} /> </div>
                    {this.state.isOpen && (
                        <dialog
                            className="dialog"
                            style={{ position: "absolute" }}
                            open
                            onClick={this.showImageHeandler}
                        >
                            <img
                                src={Image4}
                                className={classes.DialogImg}
                                onClick={this.showImageHeandler}
                                alt="no image"
                            />
                        </dialog>
                    )}

                </div>
            </div>
        );

    }
}


export default Works;