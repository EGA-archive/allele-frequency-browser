// client/src/components/ResultList.js

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import Accordion from 'react-bootstrap/Accordion';

// changed
function ResultList ({ results }, props) {
  // console.log(results)
  
  const columns = [  
    { field: 'population', headerName: 'Ancestry', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleCount', headerName: 'Allele Count', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleNumber', headerName: 'Allele Number', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleCountHomozygous', headerName: 'Homozygous/Hemizygous Count', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleCountHeterozygous', headerName: 'Heterozygous Count', flex: 3, headerClassName: 'super-app-theme--header' },
    { field: 'alleleFrequency', headerName: 'Allele Frequency', flex: 3, headerClassName: 'super-app-theme--header' },
]
  var i =0
  var beacon = ''
  var dataset = ''
  var elementito = ''
  var last_beacon=''
  var last_count= 0
  var count = 0
  var elemento = ''
  var rows = []
  var elementitos = []
  const aggregated_rows = []
  var arrayElementitos = ''
  const addedBeacons = []
  var isresponse = 'False'
  var exists = 'False'
  var total_count = 0
  var populationrow = ''
  var beaconized = ''
  var j = 1
  const resultItems = results.map(result => {if (result.results) {exists='True';isresponse='False';rows=[]; dataset=result.id;result.results.map(variant => {if (variant.frequencyInPopulations) {isresponse='True';variant.frequencyInPopulations.map(frequencyInPopulation => frequencyInPopulation.frequencies.map(frequency =>
    rows.push({
      id: i+=1,
      population: 'Finnish', 
      alleleCount: frequency.alleleCount, 
      alleleNumber: frequency.alleleNumber,
      alleleCountHomozygous: frequency.alleleCountHomozygous,
      alleleCountHeterozygous: frequency.alleleCountHeterozygous,
      alleleFrequency: parseFloat(frequency.alleleFrequency.toString().substring(0,6)), })

  ))}})}if (isresponse === 'True'){populationrow = rows.map((pr) => <tr><td></td><td>{dataset}</td><td>{pr.population}</td><td>{pr.alleleCount}</td><td>{pr.alleleNumber}</td><td>{pr.alleleCountHomozygous}</td><td>{pr.alleleCountHeterozygous}</td><td>{pr.alleleFrequency}</td></tr>);beaconized = <tr><td class="beaconized" colspan="8">{result.beaconId}</td></tr>; addedBeacons.push(beaconized); addedBeacons.push(populationrow); total_count+=1;isresponse='False'};});
  //const arrayDataItems = addedBeacons.map((course) => <div>{course}</div>);
 // document.getElementById('clickme').onclick = sort_by_key(results, 'id');
  // document.getElementById('clickme2').onclick = sort_by_key(results, 'id');
  // changed
  return (
    <div id="eldiv">
    {results && results.length !== 0 &&
    
    <Box sx={{ margin: 2,
      width: '145%',backgroundColor: 'white',
      '& .super-app-theme--header': {
        backgroundColor: '#7B1B58',
        color: 'white'
      }, }}>
              <p className='lead mt-2'>
        The query made exists as <b>{exists}</b> with a total number of results of <b>{total_count}</b>.
      </p>
      <table>
        <tr><th>Beacon</th><th>Dataset</th><th>Ancestry</th><th>Allele Count</th><th>Allele Number</th><th>Homozygous Count</th><th>Heterozygous Count</th><th>Allele Frequency</th></tr>
        {addedBeacons}</table></Box>}
      {!results && <p>Search using the left panel.</p>}
    </div>
    
  );
}

export default ResultList;