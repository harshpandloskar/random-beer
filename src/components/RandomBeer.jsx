import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/Common.scss';
import '../styles/RandomBeer.scss';
import axios from 'axios';


class RandomBeer extends Component {
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
        let beer= this.state.beer  
        if(beer) {
        return (
            <div className="random-beer-page">
                <div className="random-beer-box">
                  <h1>The Random Beer App!</h1>
                     {/* future implementation - <Link to={`/AnotherRandomBeer/${beer.name}/${beer.id}`}> */}
                     {/* future implementation - loads random beer info on the same page */}
                     <button class="buttonHover" onClick={this.getSingleBeer}>Show Another Beer</button>
                    {/* <Link to={`/AnotherRandomBeer/${beer.id}`}>
                       <button onClick={this.getSingleBeer}>Show Another Beer</button>
                    </Link>          */}
                </div>

                <div className="beer-img-details">
                    <div className="beer-img">
                        {beer.labels ? (      
                            <img src={beer.labels.medium} alt="beer-label"/>
                        ) : (
                            <div>
                               <img src="https://res.cloudinary.com/harsh-pandloskar/image/upload/v1601468606/fallback-beer-image.jpg" alt="Not found" width="300" height="220"></img>
                            </div>
                        )}  
                    </div>
                    <div class="beer-details">
                        <h1>{beer.name}</h1>  
                        {beer.style ? (
                            <div>
                                <p><b>Style: </b>{beer.style.name}</p>
                                <p><b>Brewed by:</b>&nbsp;
                                <Link to={`/breweries/brewery/${beer.breweries[0].id}`}>{beer.breweries[0].name}</Link> in {beer.breweries[0].locations[0].country.displayName}</p>
                                <div>
                                    <p><b>Alcohol by volume (ABV):</b> {beer.abv}%</p>
                                    <p><b>International bittering unit (IBU):</b> {beer.style.ibuMin} - {beer.style.ibuMax}</p>  
                                </div>         
                            </div>
                        ):(
                            <h3>Loading your Beer Information..Sláinte !!</h3>
                        )}
                    </div>
                </div>
                <div className="beer-description">
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
                <h2>Loading Error</h2>
            </div>
        )
        }
    }
  }

export default RandomBeer;