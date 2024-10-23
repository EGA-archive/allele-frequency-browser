// client/src/components/ResultList.js

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Form, Row, InputGroup } from 'react-bootstrap';

// changed
function ResultList ({ results }) {
  // console.log(results)
  
  var i =0
  var dataset = ''
  var rows = []
  const addedBeacons = []
  var isresponse = 'False'
  var exists = 'False'
  var total_count = 0
  var populationrow = ''
  var beaconized = ''
  const resultItems = results.map(result => {if (result.results) {exists='True';isresponse='False';rows=[]; dataset=result.id;result.results.map(variant => {if (variant.frequencyInPopulations) {isresponse='True';variant.frequencyInPopulations.map(frequencyInPopulation => frequencyInPopulation.frequencies.map(frequency =>
    rows.push({
      id: i+=1,
      population: 'Finnish', 
      alleleCount: frequency.alleleCount, 
      alleleNumber: frequency.alleleNumber,
      alleleCountHomozygous: frequency.alleleCountHomozygous,
      alleleCountHeterozygous: frequency.alleleCountHeterozygous,
      alleleFrequency: parseFloat(frequency.alleleFrequency.toString().substring(0,6)), })

  ))}})}if (isresponse === 'True'){populationrow = rows.map((pr) => <tr><td></td><td>{dataset}</td><td>{pr.population}</td><td>{pr.alleleCount}</td><td>{pr.alleleNumber}</td><td>{pr.alleleCountHomozygous}</td><td>{pr.alleleCountHeterozygous}</td><td>{pr.alleleFrequency}</td></tr>);beaconized = <tr><td class="beaconized" colspan="8"><b>{result.beaconId}</b></td></tr>; addedBeacons.push(beaconized); addedBeacons.push(populationrow); total_count+=1;isresponse='False'};});
  //const arrayDataItems = addedBeacons.map((course) => <div>{course}</div>);
 // document.getElementById('clickme').onclick = sort_by_key(results, 'id');
  // document.getElementById('clickme2').onclick = sort_by_key(results, 'id');
  // changed
  return (
    <Row>
    {results && results.length !== 0 &&
    
    <Box sx={{marginTop: '50px',backgroundColor: 'white',
      '& .super-app-theme--header': {
        backgroundColor: '#7B1B58',width: '2000px',
        color: 'white'
      }, }}>
              <p className='lead mt-2'>
        <b>Results</b>
      </p>
      <table style={{width: "92%"}}>
        <tr><th>Beacon</th><th style={{width: "30%"}}>Dataset</th><th>Ancestry</th><th>Allele Count</th><th>Allele Number</th><th>Homozygous Count</th><th>Heterozygous Count</th><th>Allele Frequency</th></tr>
        {addedBeacons}</table></Box>}
      {!results && <p>Search using the left panel.</p>}
      </Row>
    
  );
}

export default ResultList;