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
  var total_count = 0
  var j = 1
  const resultItems = results.map(result => {if (result.results) {isresponse='True';rows=[]; dataset=result.id;result.results.map(variant => {if (variant.frequencyInPopulations) { variant.frequencyInPopulations.map(frequencyInPopulation => frequencyInPopulation.frequencies.map(frequency =>
    
    rows.push({
      id: i+=1,
      population: frequency.population, 
      alleleCount: frequency.alleleCount, 
      alleleNumber: frequency.alleleNumber,
      alleleCountHomozygous: frequency.alleleCountHomozygous,
      alleleCountHeterozygous: frequency.alleleCountHeterozygous,
      alleleFrequency: frequency.alleleFrequency, })

  ))}})}var table = <DataGrid sx={{
    boxShadow: 2,
    height: '100%',
    '& .MuiDataGrid-cell:hover': {
      color: '#7B1B58',
      backgroundColor: 'white'
    },
  }}

  initialState={{
      columns: {
        columnVisibilityModel: {
          // Hide columns status and traderName, the other columns will remain visible
          sex_concept_class_id: false,
          
        },
      },
      pagination: {
        paginationModel: { pageSize: 10, page: 0 },
      },
    }}
  getRowHeight={() => 'auto' }


      columns={columns}
      rows={rows}
      readOnly={true}

  />;if (result.results !== undefined && result.results.length !== 0){if (result.beaconId === beacon || beacon === '') {last_beacon=result.beaconId;last_count=result.resultsCount;total_count+=last_count;count+=result.resultsCount;elementito =
    <Accordion.Item eventKey={dataset}><Accordion.Header>{result.id}<span class="count">{last_count}</span></Accordion.Header>
    <Accordion.Body>
    <div>{table}</div>
    </Accordion.Body>
    </Accordion.Item>;elementitos.push(elementito);beacon=result.beaconId;console.log(beacon);console.log(dataset)}else{arrayElementitos = elementitos.map((el) => <div>{el}</div>);elemento = <Accordion defaultActiveKey={['go']} alwaysOpen><Accordion.Item eventKey="what">
    <Accordion.Header>{beacon}<span class="count">{count}</span></Accordion.Header><Accordion.Body>
      {arrayElementitos}
      </Accordion.Body>
      </Accordion.Item>
  </Accordion>;beacon=result.beaconId;count=result.resultsCount;elementitos = []; last_count=result.resultsCount; total_count+=last_count;elementito =
    <Accordion.Item eventKey={dataset}><Accordion.Header>{result.id}<span class="count">{last_count}</span></Accordion.Header>
    <Accordion.Body>
    <div>{table}</div>
    </Accordion.Body>
    </Accordion.Item>;elementitos.push(elementito);console.log(beacon);console.log(dataset);aggregated_rows.push(elemento)}}});
  console.log(elementitos)
  arrayElementitos = elementitos.map((el) => <div>{el}</div>);
  elemento = <Accordion defaultActiveKey={['sure']} alwaysOpen>
    <Accordion.Item eventKey="0">
    <Accordion.Header><div class="accordion">{last_beacon}<span class="count">{count}</span></div></Accordion.Header><Accordion.Body>
      {arrayElementitos}
      </Accordion.Body>
      </Accordion.Item>
  </Accordion>;
  aggregated_rows.push(elemento)
  const arrayDataItems = aggregated_rows.map((course) => <div>{course}</div>);
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
        The query made exists as <b>{isresponse}</b> with a total number of results of <b>{total_count}</b>.
      </p>
        {arrayDataItems}</Box>}
      {!results && <p>Search using the left panel.</p>}
    </div>
    
  );
}

export default ResultList;