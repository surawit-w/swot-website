import React, { Component } from "react";
import Navbar from "../components/navbar";
import Strength from '../components/strength'
import "../../stylesheets/pages/swotPage.css"
import { Bubble,Line } from 'react-chartjs-2';

const options = {
    tooltips: {
        enabled: false
    },
    ticks: {
        display: false,
        fontColor: '#fff'
        
    },
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    },
    legend: {
        display: false
    },
    title: {
        display: false,
        text: 'SWOT Result',
        fontFamily: 'light',
        fontSize: 28,
        padding: 26,
        fontColor: '#363C54'
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: -5,
            fontColor: '#363C54',
            fontSize: 18
          },
          gridLines: {
              color: 'rgba(0, 0, 0, 0.2)',
              zeroLineColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 5,
            min: -5,
            fontColor: '#363C54',
            padding: 10,
            fontSize: 18
          },
          gridLines: {
              color: 'rgba(0, 0, 0, 0.3)',
              zeroLineColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      ]
    }
  };


export default class resultPage extends Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      data : {
        datasets: [
          {
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            pointStyle: 'circle',
            rotation: 45,
            borderWidth: 10,
            hoverRadius: 10,
            data: [],
          }
        ]
      }
    }
  }

  // Before render
  componentDidMount = async () => {
    let details = JSON.parse(localStorage.getItem('finalScore'))
    let detailsArr = []
    detailsArr.push({
      name: 'strength',
      number: parseFloat(details[0])
    },
    {
      name: 'weakness',
      number: parseFloat(-details[1])
    },
    {
      name: 'opportunity',
      number: parseFloat(details[2])
    },
    {
      name: 'threat',
      number: parseFloat(-details[3])
    })
    console.log(detailsArr)

    await this.setState({
      data : {
        datasets: [
          {
            data: [{x:0, y: detailsArr[0].number}, {x: 0, y: detailsArr[1].number}, {x: detailsArr[2].number, y: 0}, {x: detailsArr[3].number, y: 0}]
          }
        ]
      }
    })
    console.log(detailsArr)
    detailsArr.sort(function(a,b){return Math.abs(b.number) - Math.abs(a.number)})
    console.log(detailsArr)
    console.log(detailsArr[0].name)
    // console.log(this.state.data.datasets[0].data[0])

    // await this.setState({
    //   data : {
    //     datasets: [
    //       {
    //         data: [{x:detailsArr[0].number, y: detailsArr[1].number}],
    //       }
    //     ]
    //   }
    // })

    // switch(true) {
    //   case detailsArr[0].name === 'strength' :
    //     await this.setState({
    //       data : {
    //         datasets: [
    //           {
    //             data: [{x:detailsArr[0].number, y: detailsArr[1].number}],
    //           }
    //         ]
    //       }
    //     })
    //     console.log(this.state.data.data)
    //     break
    //   case detailsArr[0].name === 'strength' && detailsArr[1].name === 'threat' || detailsArr[0].name === 'threat' && detailsArr[1].name === 'strength':
    //     await this.setState({
    //       data : {
    //         datasets: [
    //           {
    //             data: [{x:detailsArr[0].number, y: detailsArr[1].number}],
    //           }
    //         ]
    //       }
    //     })
    //     console.log(this.state.data.data)
    //     break
    //   case detailsArr[0].name === 'weakness' && detailsArr[1].name === 'threat' || detailsArr[0].name === 'threat' && detailsArr[1].name === 'weakness':
    //     await this.setState({
    //       data : {
    //         datasets: [
    //           {
    //             data: [{x:detailsArr[0].number, y: detailsArr[1].number}],
    //           }
    //         ]
    //       }
    //     })
    //     console.log(this.state.data.data)
    //     break
    //   case detailsArr[0].name === 'weakness' && detailsArr[1].name === 'opportunity' || detailsArr[0].name === 'opportunity' && detailsArr[1].name === 'weakness':
    //     await this.setState({
    //       data : {
    //         datasets: [
    //           {
    //             data: [{x:detailsArr[0].number, y: detailsArr[1].number}],
    //           }
    //         ]
    //       }
    //     })
    //     console.log(this.state.data.data)
    //     break
            
    // }
  }
 
  // Render elements
  render() {
      return (
        <div>
        <Navbar/>
        <div style={{width: '100%', textAlign: 'center', marginTop: '5%'}}>
            <h1>SWOT RESULT</h1>
        </div>
        <div style={{ padding:'24px', display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
            <div className="graph-swot" style={{padding: '24px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(94, 92, 92, 0.336)'}}>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-start',flex: '0 0 50%'}}>
                        <p>ST</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end',flex: '0 0 50%'}}>
                        <p>SO</p>
                    </div>
                </div>
                <Bubble data={this.state.data} options={options}/>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-start',flex: '0 0 50%'}}>
                        <p>WT</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end',flex: '0 0 50%'}}>
                        <p>WO</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}