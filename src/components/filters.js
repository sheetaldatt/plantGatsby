import React from 'react';
import PropTypes from 'prop-types';
import {DataSearch, MultiDataList, SingleRange, DynamicRangeSlider} from '@appbaseio/reactivesearch';


const Filters = ({visible }) => (
	<div className={`flex column filters-container ${!visible ? 'hidden' : ''}`}>
		<DataSearch
						componentId="searchbox"
						dataField={['tree_name', 'tree_category']}
						placeholder="Search for trees and categories"
                        style={{width: "92%",}}
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
);

Filters.propTypes = {
	visible: PropTypes.bool,
};

export default Filters;