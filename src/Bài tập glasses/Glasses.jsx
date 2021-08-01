import React, { Component } from 'react';
import './Glasses.css';
import data from './dataGlasses.json'



export default class Glasses extends Component {
    state = {
        name: '',
        url: '',
        desc: ' '
    }
    changeGlasses = (name, url, desc) => {
        this.setState({
            name,
            url,
            desc
        })
        document.getElementById('bodyCard').style.display = 'block'
    }
    renderGlasses = (listProducts) => {
        return listProducts.map((product, index) => {
            const { name, url, desc } = product
            return(
                <li className="col-2 list-group-item" key={index} onClick={() => this.changeGlasses(name,url ,desc)}>
                    <img src={url} width="100px" />
                </li>
            )
        })
    }
    render() {
        let listProducts = data;
        const { name, url, desc } = this.state;
        return (
            <div className=" container-fluid model__main ">
                <div className="card glasses justify-content-around col-3">
                
                    <div className="card-body card__body " id="bodyCard">        
                    <img src={url} className="card-img-top img-fluid img__glass" alt="" />
                        <h6 className="card-title">{name}</h6>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
                <ul className="row wrap flex-row justify-content-start container-fluid">
                    {this.renderGlasses(listProducts)}
                </ul>
            </div>
        )
    }
}
