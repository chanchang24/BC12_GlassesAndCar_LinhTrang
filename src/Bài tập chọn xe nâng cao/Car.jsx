import React, { Component } from 'react'
import './style.css'
import dataCar from "./arrayFeatures.json";
import dataWheels from './wheels.json'

export default class Car extends Component {
    state = {
        img: "./images/icons/icon-black.jpg",
        srcImg: "images-black/images-black-1/",
        color: "Black",
        price: "19,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
        wheels: [
            {
                "idWheel": 1,
                "srcImg": "images-black/images-black-1/"
            },
            {
                "idWheel": 2,
                "srcImg": "images-black/images-black-2/"
            },
            {
                "idWheel": 3,
                "srcImg": "images-black/images-black-3/"
            }
        ]
    };
    handleChange = (srcImg, color, price, engineType, displacement, horsepower, torque, redline, wheels) => {
        this.setState({
            srcImg,
            color,
            price,
            engineType,
            displacement,
            horsepower,
            torque,
            redline,
            wheels
        });
    }
    renderInfoCar = (dataCar) => {
        return dataCar.map((car, index) => {
            const { title, type, img, srcImg, color, price, engineType, displacement, horsepower, torque, redline, wheels } = car;
            return (
                <li className="list-group-item" onClick={() => this.handleChange(srcImg, color, price, engineType, displacement, horsepower, torque, redline, wheels)}>
                    <div className="row">
                        <div className="col-2">
                            <img src={img} width="60px" alt="" />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                            <p>{title}</p>
                            <p>{type}</p>
                        </div>
                    </div>
                </li>

            )
        })
    }
    getImgWheel =(arrWheels,id)=>{
        let wheel =arrWheels.filter((wheel)=>{
            return wheel.idWheel= id;
        })
        return wheel[0].srcImg
    }

    handleChangeWheels =(srcImg)=>{
        this.setState({
            srcImg
        })
    }
    renderWheels(dataWheels,arrWheels){
        return dataWheels.map((wheel, index)=>{
            const {idWheel,img,title,price}=wheel
            return(
                    <div className="row">
                <div className="col-2">
                  <img src={img} width="60px" key={index} onClick={()=>this.handleChangeWheels(this.getImgWheel(arrWheels,idWheel))} />
                </div>
                <div className="col-10  d-flex align-items-start flex-column">
                  <p>{title}</p>
                  <p>{price}</p>
                </div>
              </div>
                
            )

        })
    }
    render() {
        const { srcImg, color, price, engineType, displacement, horsepower, torque, redline, wheels } = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <img
                            src={"./images/" + srcImg + "civic-1.jpg"}
                            className="w-100"
                        />
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">Exterior Color</div>
                            <ul className="list-group list-group-flush">
                                {this.renderInfoCar(dataCar)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div
                            className="card"
                            style={{ width: "width:100%", textAlign: "left" }}
                        >
                            <div className="card-header">Featured</div>
                            <div className="card-body">
                                <h2>See More LX Futures</h2>
                                <div className="row ">
                                    
                                    <div className="border border-dark col">Color</div>
                                    <div className="border border-dark col">{color}</div>
                                    <div className="w-100" />
                                    <div className="border border-dark price col">Price</div>
                                    <div className="border border-dark col">{price}</div>
                                    <div className="w-100" />
                                    <div className="border border-dark col">Engine Type</div>
                                    <div className="border border-dark col">{engineType}</div>
                                    <div className="w-100" />
                                    <div className="border border-dark col">Displacement</div>
                                    <div className="border border-dark col">{displacement}</div>
                                    <div className="w-100" />
                                    <div className="border border-dark col"> Horsepower (SAE nef) </div>
                                    <div className="border border-dark col">{horsepower}</div>
                                    <div className="w-100" />
                                    <div className="border border-dark col">Torque (SAE nef)</div>
                                    <div className="border border-dark col">{torque}</div>
                                    <div className="w-100" />
                                    <div className="border border-dark col">Redline</div>
                                    <div className="border border-dark col">{redline}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">Wheels</div>
                            <ul className="list-group list-group-flush" id="ulWheels">
                                {this.renderWheels(dataWheels, wheels)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
