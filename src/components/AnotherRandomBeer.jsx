import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/RandomBeer.scss';
import axios from 'axios';


class AnotherRandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        beer:[]
    }
    this.getSingleBeer=this.getSingleBeer.bind(this);
    }
    
    componentDidMount() {
        this.getSingleBeer();
    }

    getSingleBeer(){
        axios({
            method: "GET",
            url: `http://localhost:3000/beer/random/?withBreweries=Y&hasLabels=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d`
        })
        .then(res => {
            this.setState({
                beer: res.data.data
            })
        })
        .catch((err)=> {
            console.log( "Error")
        })
    }

    render () { 
        let beer=this.state.beer    
        if(beer) {
        return (
            <div className="random-beer-page">
               {/* This below button loads random beer info on the same page */}
               {/* <button onClick={this.getSingleBeer}>Show Another Beer</button> */}
                <button className="go-back-button" onClick={this.props.history.goBack}>Go back</button>
                <div className="beer-img-detail">
                    <h1>{beer.name}</h1>  
                    {beer.style ? (
                        <div>
                            <p><b>Style: </b>{beer.style.name}</p>
                            <p><b>Brewed by:</b>&nbsp;
                            <Link to={`/breweries/brewery/${beer.breweries[0].id}`}>{beer.breweries[0].name}</Link> in {beer.breweries[0].locations[0].country.displayName}</p>
                            <div className="abv-ibuu">
                                <p><b>ABV:</b> {beer.abv}%</p>
                                <p><b>IBU:</b> {beer.style.ibuMin} - {beer.style.ibuMax}</p>  
                            </div>         
                        </div>
                    ):(
                        <h2>Loading beer information...</h2>
                    )}
                    <div className="beers-img">
                        {beer.labels ? (      
                            <img src={beer.labels.medium} alt="beer-label"/>
                        ) : (
                            <div>
                            <img src="https://touch.daft.ie/static/images/fallbacks/no-image-size740x480.jpg" alt="not found" width="316" height="169"></img>
                            <p>No Image available</p>
                            </div>
                        )}  
                    </div> 
                </div>
                <div className="beers-description">
                    {beer.style ? (
                            <p>{beer.style.description}</p>
                    ):(
                        <p></p>
                    )}
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

export default AnotherRandomBeer;  