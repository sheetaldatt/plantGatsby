import React, { Component } from 'react'
import { Link } from 'gatsby'
import Filters from '../components/filters'
import Layout from '../components/layout'
import { ReactiveBase, ResultList} from '@appbaseio/reactivesearch';

class IndexPage extends Component 
{
    constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	toggleVisibility = () => {
		const visible = !this.state.visible;
		this.setState({
			visible,
		});
	}
    render() {
return (
    
    
    <Layout>
   
    <ReactiveBase
				app="plantTrees"
				credentials="ZTNsIxjZd:de141fa7-5716-4053-b9fd-66354eb5ec73"
                theme={{
    typography: {
      fontFamily: 'Raleway, Helvetica, sans-serif',
      fontSize: '14px',
    },
    colors: {
      primaryColor: '#008000',
      titleColor: 'black',
    }   
  }}>       <div
    style={{
      background: '#ffffff',
      marginBottom: '1.45rem',
    }}
  >
	<nav className={`navbar ${this.state.visible ? 'active' : ''}`}>				
                <div class="title">Plant A Tree</div>
				<div class="btn toggle-btn" onClick={this.toggleVisibility}>Toggle Filters</div>
                
                <div class="mobileCart snipcart-summary" style={{float: 'right' }}><div class= "mobileLogin" style={{float: 'left' }}><a href="#" class="snipcart-user-profile"><span class="snipcart-user-email">Login / Register</span></a> <a href="#" class="snipcart-user-logout">Logout</a></div><a href="#" class="snipcart-checkout" >Cart (<span class="snipcart-total-items"></span>)</a></div>
                <Filters {...this.props} visible={this.state.visible} />
    </nav>
    <div style={{ display: "flex", flexDirection: "row", marginLeft: "20%", }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
    
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
        
          Plant A Tree
        </Link>
      </h1>
    <hr/>
    
   <div class="snipcart-summary" style={{float: 'right' }}><a href="#" class="snipcart-checkout" >Cart (<span class="snipcart-total-items"></span>)</a></div>
   <div style={{float: 'left' }}><a href="#" class="snipcart-user-profile"><span class="snipcart-user-email">Login / Register</span></a> <a href="#" class="snipcart-user-logout">Logout</a></div>    
   </div>
    </div>
                    <div class="results">
					<ResultList
						componentId="result"
						title="Results"
						dataField="tree_name"
						from={0}
						size={6}
                        innerClass={{
				        poweredBy: 'powered-by',
                        }}
                        showResultStats={false}
						pagination={true}
						react={{
							and: ["searchbox", "growthfilter", "sunfilter", "soilfilter", "maintainfilter", "heightRange", "priceRange", "categoryDropdown"]
						}}
						onData={(res) => {
							return {
								image: res.image,
								title: res.tree_name,
								description: (<div>
                                <div>{res.tree_category}</div>
                                <div>{res.description}</div>
                                <div align = 'right'>${res.price}</div>
                                <div> <a 
                                  href='#'
                                  onClick={() => alert("Item added to cart!")}                                
                                  className='snipcart-add-item'
                                  data-item-id={res._id}
                                  data-item-price={res.price}
                                  data-item-image={res.image}
                                  data-item-name={res.tree_name}
                                  data-item-description={res.description}
                                  data-item-url={"https://tender-knuth-3884fe.netlify.com/"}>
                                  Buy</a></div>
                                </div>
                                ),
                                
							}
						}}

						/>
                  </div>
        </div>
				</ReactiveBase>
  </Layout>)
    }
}


  


export default IndexPage
