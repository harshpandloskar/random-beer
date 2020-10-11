import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/Common.scss';
import axios from 'axios';


class SingleBeer extends Component {
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
            url: `http://localhost:3000/beer/${this.props.match.params.id}/?withBreweries=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d`
        })
        .then(res => {
            this.setState({
                beer: res.data.data
            })
        })
        .catch((err)=> {
            console.log( "Error")
            console.log( "error is single beer info page")

        })
    }
    render () { 
        let beer=this.state.beer    
        if(beer) {
        return (
            <div>
                <div className="beer-img-details">
                    <h1>{beer.name}</h1>  
                    {beer.style ? (
                        <div>
                            <p><b>Style: </b>{beer.style.name}</p>
                            <p><b>Brewed by:</b>&nbsp;
                            <Link to={`/breweries/brewery/${beer.breweries[0].id}`}>{beer.breweries[0].name}</Link> in {beer.breweries[0].locations[0].country.displayName}</p>
                            <div>
                                <p><b>ABV:</b> {beer.abv}%</p>
                                <p><b>IBU:</b> {beer.style.ibuMin} - {beer.style.ibuMax}</p>  
                            </div>         
                        </div>
                    ):(
                        <h2>Sláinte...</h2>
                    )}
                    <div className="beer-img">
                        {beer.labels ? (      
                            <img src={beer.labels.medium} alt="beer-label"/>
                        ) : (
                            <div>
                            <img src="https://res.cloudinary.com/harsh-pandloskar/image/upload/v1601468606/fallback-beer-image.jpg" alt="not found" width="316" height="169"></img>
                            <p>No Image available</p>
                            </div>
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
export default SingleBeer;