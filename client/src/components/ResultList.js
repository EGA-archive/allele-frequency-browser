// client/src/components/ResultList.js

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Form, Row, InputGroup } from 'react-bootstrap';

// changed
function ResultList ({ results, metaresults}) {
  // console.log(results)
  console.log(metaresults)
  var i =0
  var dataset = ''
  var rows = []
  const addedBeacons = []
  var isresponse = 'False'
  var exists = 'False'
  var total_count = 0
  var populationrow = ''
  var beaconized = ''
  var beaconName= ''
  var alleleC=''
  var alleleCHet=''
  var alleleCHom=''
  var popu =''
  const resultItems = results.map(result => {if (result.results) {exists='True';isresponse='False';rows=[]; dataset=result.id;result.results.map(variant => {if (variant.frequencyInPopulations) {isresponse='True';variant.frequencyInPopulations.map(frequencyInPopulation => frequencyInPopulation.frequencies.map(frequency =>
    {if (frequency.alleleCount instanceof Array){alleleC=frequency.alleleCount[0]}else{alleleC=frequency.alleleCount};if (frequency.alleleCountHeterozygous instanceof Array){alleleCHet=frequency.alleleCountHeterozygous[0]}else{alleleCHet=frequency.alleleCountHeterozygous};if (frequency.alleleCountHomozygous instanceof Array){alleleCHom=frequency.alleleCountHomozygous[0]}else{alleleCHom=frequency.alleleCountHomozygous};if (frequency.population === 'COVID_pop11_fin_2'){popu='Finnish'}else if(frequency.population === 'COVID_pop11_fin_1'){popu='Finnish'}else if(frequency.population === 'COVID_pop12_ita_1'){popu='Italian'}else if(frequency.population === 'COVID_pop12_ita_2'){popu='Italian'}else if(frequency.population === 'COVID_pop13_ger_1'){popu='German'}else if(frequency.population === 'COVID_pop13_ger_2'){popu='German'};rows.push({
      id: i+=1,
      population: popu, 
      alleleCount: alleleC, 
      alleleNumber: frequency.alleleNumber,
      alleleCountHomozygous: alleleCHom,
      alleleCountHeterozygous: alleleCHet,
      alleleFrequency: parseFloat(frequency.alleleFrequency.toString().substring(0,6)), })}

  ))}})}if (isresponse === 'True'){populationrow = rows.map((pr) => <tr><td></td><td>{dataset}</td><td>{pr.population}</td><td>{pr.alleleCount}</td><td>{pr.alleleNumber}</td><td>{pr.alleleCountHomozygous}</td><td>{pr.alleleCountHeterozygous}</td><td>{pr.alleleFrequency}</td></tr>);metaresults.map((meta) => {if (meta.response.id === result.beaconId){beaconName=meta.response.name}});beaconized = <tr><td class="beaconized" colspan="8"><b>{beaconName}</b></td></tr>; addedBeacons.push(beaconized); addedBeacons.push(populationrow); total_count+=1;isresponse='False'};});
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
      <div style={{overflowX: "auto"}}>
      <table style={{width: "100%"}}>
        <tr><th>Beacon</th><th style={{width: "20%"}}>Dataset</th><th style={{width: "11%"}}>Ancestry</th><th style={{width: "11%"}}>Allele Count</th><th style={{width: "11%"}}>Allele Number</th><th style={{width: "16%"}}>Homozygous/ Hemizygous Count</th><th style={{width: "16%"}}>Heterozygous Count</th><th style={{width: "11%"}}>Allele Frequency</th></tr>
        {addedBeacons}</table></div></Box>}
      {!results && <p>Search using the left panel.</p>}
      </Row>
    
  );
}

export default ResultList;