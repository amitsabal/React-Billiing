import React, {Component} from 'react';
import ItemList from './item_list';

class ItemListDisp extends Component{  			
	constructor(props) {
		super(props);
		this.state = { totalBill: '',  itemMap: {}};
	}			
	onInputChange(qnty, cost, id) {
      let totalBill=0;	  	 
	  if(qnty>0){	  
		  this.state.itemMap[id]=qnty * cost;
	  }else{
		  delete this.state.itemMap[id]; 
	  } 
	  
	  let iMap= this.state.itemMap;
	  Object.keys(iMap).forEach(function(key) {
		totalBill += iMap[key];
	  });
	    	           
      this.setState({
        totalBill: totalBill
      });    
  }		
	 
  render(){	  
	  const itemRows = ItemList.map((item, i) => {
		return (		
		    <div key={i} className="row">
				<div className="col-sm-2" >{item.itemName}</div>
				<div className="col-sm-2" >Rs. {item.itemCost}</div>
				<div className="col-sm-1" ><input value={this.state.term} onChange={event => this.onInputChange(event.target.value, item.itemCost, event.target.id)}
				      type="text" id={item.id} className="txtWidth" /></div>
		    </div>			
		);
  });	  
	  
  return (
		<div>	
			<div className="row">
				<div className="col-sm-5 col-th-bill-bgColor"><h5 className="bold header">-:Select Items:-</h5></div>
			</div>
			<div className="row">
				<div className="col-sm-2 col-th-bgColor bold" >Item</div>
				<div className="col-sm-2 col-th-bgColor bold" >Price</div>
				<div className="col-sm-1 col-th-bgColor bold" >Quantity</div>
		    </div>
			<div className="row">
				{itemRows}
			</div>
			<div className="row">
				<div className="col-sm-5 col-th-bill-bgColor"><span className="bold">Total Bill: {this.state.totalBill}</span></div>
			</div>					
		</div>		
	);
  }
};

export default ItemListDisp;
