import React, { Component } from 'react';
import '../styles/SingleBrewery.scss';
import {Link} from "react-router-dom";
import axios from 'axios';


class SingleBrewery extends Component {
    constructor(props) {
    super(props);
    this.state = {
        brewery: [],
        beers:[]
    }
    this.getSingleBrewery=this.getSingleBrewery.bind(this);
    this.getAllBeers=this.getAllBeers.bind(this);
	}
    componentDidMount() {
        this.getSingleBrewery();
    }
    getSingleBrewery(){
        axios({
            method: "GET",
            url: `http://localhost:3000/brewery/${this.props.match.params.id}/?key=a5c1b917e7ba62dcd79f434ed73bc72d`
        })
        .then(res => {
            this.setState({
                brewery: res.data.data
            })
            this.getAllBeers();
            console.log(this.state.brewery);
        })
        .catch((err)=> {
                console.log( "Error")
        })
    }
    getAllBeers(){
        axios({
            method: "GET",
            url: `http://localhost:3000/brewery/${this.props.match.params.id}/beers/?key=a5c1b917e7ba62dcd79f434ed73bc72d`
        })
        .then(res => {
            this.setState({
                beers: res.data.data
            })
            console.log(this.state.beers.id)
        })
        .catch((err)=> {
                console.log( "Error")
        })
    }
    render () {
        let Beers;
        if(this.state.beers.length === 0){
            Beers=<h2>Sláinte...</h2>
        } 
        else if(this.state.beers.length === 1){
            Beers=<h2>The brewery produces <u>{this.state.beers.length}</u> beer: </h2>
        } 
        else {
            Beers=<h2>The brewery produces <u>{this.state.beers.length}</u> beers: </h2>
        }
                           
        let brew = this.state.brewery         
        if(brew && this.state.beers){
        return (
            <div className="single-brew-page">
                <div>
                    <h1>{brew.name}</h1>
                    {brew.established ? (
                        <h5><b>Established: {brew.established}</b></h5>
                    ) : (
                        <p></p>
                    )}
                    <div className="brew-img-details">
                        <div className="brew-img">
                            {brew.images ? (
                                <div>
                                    <a href={brew.website} rel="noopener noreferrer" target="_blank">
                                        <img src={brew.images.squareMedium} alt="brewery logo" />
                                    </a>
                                </div>
                            ) : (
                                <div>
                                  <img src="https://touch.daft.ie/static/images/fallbacks/no-image-size740x480.jpg" alt="not found" width="316" height="169"></img>
                                  <p>No Image available</p>
                              </div>  
                            )}
                        </div>
                            <a href={brew.website} rel="noopener noreferrer" target="_blank">
                                <h4>{brew.website}</h4>
                            </a>
                        <div className="brew-description">
                            <p>{brew.description}</p>
                        </div>
                    </div>
                </div>
                <div className="beers">
                    <div className="beersCounter">
                        {Beers}
                    </div>
                    <div className="beers-box">
                        {this.state.beers.map((item)=>(
                        <div key={item.id}>
                            <Link to={`/beer/${item.id}`}> <h5>{item.name}</h5></Link>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        )
        } else {
        return (
            <div>
                <h2>Loading error</h2>
            </div>
        )
    }
    }
}

export default SingleBrewery;