import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: '',
            price: 0,
            img: '',
            id: null,
        }
    }
    handleChange(e, key){
        this.setState({
            [key]: e.target.value
        })
    }
    clear(){
        this.setState({
            name: '',
            price: 0,
            img: ''
        })
    }

    post(){
        axios.post('/api/inventory', {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img,
        }).then(res=> 
          this.setState({
              postReturn: res
          }))
          this.props.updateInventory()
          this.clear()
    }

    render() {
       
        return(
            
            <div>
            <img src={this.state.img}
            alt='product'/>
            <input className='url'
            onChange={e => this.handleChange(e, 'img')}
            placeholder='Image URL'
            type='text'
            value={this.state.img}/>
            <input
            className='productName'
            onChange={e => this.handleChange(e, 'name')}
            placeholder='Product Name'
            type='text'
            value={this.state.name}/>
            <input
            className='productPrice'
            onChange={e=> this.handleChange(e, 'price')}
            placeholder='Price'
            type='number'
            value={this.state.price}/>
            <button onClick={() => this.clear()}>Cancel</button>
           
            <button onClick={()=> this.post()}>Add to Inventory</button>
          


           
    

            </div>
        )
    }
}
