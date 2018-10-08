import React from 'react'
import { Link } from 'gatsby'
import { ReactiveBase, DataSearch, MultiDataList, ResultList, SingleRange, DynamicRangeSlider } from '@appbaseio/reactivesearch';
import Checkout from "../components/checkout"

import Layout from '../components/layout'

const IndexPage = () => (
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
  }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
						<div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
            
				<DataSearch
						componentId="searchbox"
						dataField="tree_name"
						categoryField="tree_category.raw" // use "brand.keyword" for newly cloned datasets
						placeholder="Search for trees"
					/>
    <p><br/></p>
					<MultiDataList 
						componentId="growthfilter"
						title="Growth Rate"
						dataField="growth.keyword"
						data={
                                [{
                                  label: "Slow",
                                  value: "Slow"
                                }, {
                                  label: "Medium",
                                  value: "Medium"
                                }, {
                                  label: "Fast",
                                  value: "Fast"
                                }]
                              }
                        showSearch={false}
					/>
					<MultiDataList 
						componentId="sunfilter"
						title="Sun Conditions"
						dataField="sun.keyword"
						data={
                                [{
                                  label: "Shady",
                                  value: "Shady"
                                }, {
                                  label: "Semi Shade",
                                  value: "Semi Shade"
                                }, {
                                  label: "Sunny",
                                  value: "Sunny"
                                }]
                              }
                        showSearch={false}
					/>
					<MultiDataList 
						componentId="soilfilter"
						title="Soil Drain Rate"
						dataField="soil_drainage.keyword"
						data={
                                [{
                                  label: "Slow",
                                  value: "Slow"
                                }, {
                                  label: "Medium",
                                  value: "Medium"
                                }, {
                                  label: "Fast",
                                  value: "Fast"
                                }]
                              }
                        showSearch={false}
					/>
                    <MultiDataList 
						componentId="maintainfilter"
						title="Maintainance"
						dataField="maintainance.keyword"
						data={
                                [{
                                  label: "Low",
                                  value: "Low"
                                }, {
                                  label: "Medium",
                                  value: "Medium"
                                }, {
                                  label: "High",
                                  value: "High"
                                }]
                              }
                        showSearch={false}
					/>
                    

                    <SingleRange
                      componentId="heightRange"
                      dataField="height"
                      data={
                        [{"start": 0, "end": 1000, "label": "Any"},
                         {"start": 0, "end": 1, "label": "Less than 1m"},
                         {"start": 1, "end": 2, "label": "1m to 2m"},
                         {"start": 2, "end": 3, "label": "2m to 3m"},
                         {"start": 3, "end": 1000, "label": "Greater than 3m"}]
                      }
                      title="Tree Height"
                      defaultSelected="Any"
                    />

                    <DynamicRangeSlider
                    componentId="priceRange"
                    dataField="price"
                    title="Price Range"
                    rangeLabels={(min, max) => (
								{
									start: `$${min}`,
									end: `$${max}`,
								}
							)}
                    />
                    </div>
					<ResultList
						componentId="result"
						title="Results"
						dataField="tree_name"
						from={0}
						size={6}
            
                        showResultStats={false}
						pagination={true}
						react={{
							and: ["searchbox", "growthfilter", "sunfilter", "soilfilter", "maintainfilter", "heightRange", "priceRange"]
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
                                  className='snipcart-add-item'
                                  data-item-id={res._id}
                                  data-item-price={res.price}
                                  data-item-image={res.image}
                                  data-item-name={res.tree_name}
                                  data-item-description={res.description}
                                  data-item-url={"/"}>
                                  Buy</a></div>
                                </div>
                                ),
                                
							}
						}}
					style={{
								width: "80%",
							}}
						/>
                  </div>
				</ReactiveBase>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
