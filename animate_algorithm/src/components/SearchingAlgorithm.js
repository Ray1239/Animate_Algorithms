import React, { Component } from 'react';
import AlertDismissible from './AlertDismissable';
import * as d3 from 'd3';

class SearchAnimation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartDrawn: false,
            // currIteratorVal: null,
            // prevSearchIteratorVal: null,
            indices: [],
            error: false,
            alertHeading: "Element Not Found!",
            alertText: "The element you are trying to find is not found in the data."
        };
    }

    componentDidMount() {
        if(!this.state.chartDrawn){
            this.drawChart();
            // this.setState({chartDrawn: true}, () => {
            //     console.log(this.state.chartDrawn); // This will log the correct state value
            // });
            this.setState({chartDrawn: true});
            window.addEventListener("resize", this.ifWindowResize);
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     if((prevState.currIteratorVal !== this.state.currIteratorVal)){
    //         this.setState({ prevSearchIteratorVal: prevState.currIteratorVal });
    //     }
    // }

    componentWillUnmount() {
        window.removeEventListener("resize", this.ifWindowResize);
    }

    ifWindowResize = () => {
        // Remove the previous chart
        d3.select("#" + this.props.id).select("svg").remove();
        this.setState({chartDrawn: false}, () => {
            // Redraw the chart
            this.drawChart();
        });
    }

    merge(arr, l, m, r){
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = new Array(n1);
        var R = new Array(n2);

        for(let i = 0; i < n1; i++){
            L[i] = arr[l + i];
        }

        for(let j = 0; j < n2; j++){
            R[j] = arr[m + 1 + j];
        }

        let i = 0, j = 0, k = l;

        while(i < n1 && j < n2){
            if(L[i] <= R[j]){
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1){
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2){
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    mergeSort(arr, l, r){
        if(l >= r){
            return; // Return a slice of the sorted portion of the array
        }
    
        var m = l + parseInt((r-l)/2);
        this.mergeSort(arr, l, m); // Recursively sort left half
        this.mergeSort(arr, m+1, r); // Recursively sort right half
        return this.merge(arr, l, m, r); // Merge the sorted halves
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    async linearSearch(arr, l, r, key){
        const svg = d3.select("#" + this.props.id).select("svg");
        for (var i = l; i <= r; i++){
            svg.select("#r" + i).attr("fill", "red");

            let firstElem = (i === 0);
            if(!firstElem){
                svg.select("#r" + (i-1)).attr("fill", "blue");
            }

            await this.sleep(1000);

            if(arr[i] === key){
                console.log("Element found at " + i + "th index.");
                svg.select("#r" + i).attr("fill", "green");
                return i;
            }
        }
        console.log("Array not found");
        return -1;
    }

    async binarySearch(arr, l, r, key){
        const svg = d3.select("#" + this.props.id).select("svg");
        while (l <= r){
            let m = l + Math.floor((r - l)/2);
            // this.setState({currIteratorVal: m});
            
            svg.select("#r" + m).attr("fill", "red");
            // this.state.indices.push(m);
            // const len = this.state.indices.length;
            this.setState(prevState => ({
                indices: [...prevState.indices, m]
            }), () => {
                const len = this.state.indices.length;
                if(len > 1){
                    svg.select("#r" + (this.state.indices[len - 2])).attr("fill", "blue");
                }
            });

            // if(len > 1){
            //     svg.select("#r" + (this.state.indices[len - 2])).attr("fill", "blue");
            // }

            await this.sleep(1000);
            
            if (arr[m] === key){
                console.log("Element found at index: " + m);
                svg.select("#r" + m).attr("fill", "green");
                return m;
            }
            else if (arr[m] < key){
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        console.log("Element not found!");
        this.setState({error: true});
        return -1;
    }

    animate(){

    }

    findMaxima(data, svgHeight) {
        // this.mergeSort(data, 0, data.length - 1);
        let maxima = data[data.length - 1];
        return maxima;
    }

    drawChart() {
        if(!this.state.chartDrawn){
            const svgHeight = 300;
            const svgWidth = parseInt(d3.select("#" + this.props.id).style('width'), 10);

            // const svgWidth = 570;
            // const offset = 10;

            const data = this.props.data;

            this.mergeSort(data, 0, data.length - 1); 

            const fullRecWidth = svgWidth/data.length;
            const recWidthIncGap = fullRecWidth - 2; 

            let maxima = this.findMaxima(data);
            let scale = svgHeight / maxima;
    
            const svg = d3.select("#" + this.props.id)
                        .append("svg")
                        .attr("width", svgWidth)
                        .attr("height", svgHeight)
                        .attr("id", "animationChart");
    
            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", (d, i) => i * fullRecWidth)
                .attr("y", (d, i) => 300 - scale * d)
                .attr("width", recWidthIncGap)
                .attr("height", (d, i) => d * scale)
                .attr("fill", "blue")
                .attr("id", (d, i) => "r" + i);

            // this.linearSearch(data, 0, data.length - 1, 10, svg);
        
            // this.binarySearch(data, 0, data.length - 1, 11);
        }
    }

    render() {
        return (
            <>
                <AlertDismissible show={this.state.error} heading={this.state.alertHeading} text={this.state.alertText}/>
                <div className="mainCont container">
                    <div id={this.props.id}></div>
                    {/* <button className="btn btn-sm btn-primary col-1">Play</button> */}
                    <div className="codeEditor">
                        <button className="btn btn-sm btn-primary mt-2" onClick={() => {this.binarySearch(this.props.data, 0, this.props.data.length - 1, 1)}}>Play Animation</button>
                        <button className="btn btn-sm btn-primary mt-2" onClick={() => {this.linearSearch(this.props.data, 0, this.props.data.length - 1, 37)}}>Play Linear Search Animation</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchAnimation;