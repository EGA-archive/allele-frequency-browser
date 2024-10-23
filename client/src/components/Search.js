// client/src/components/Search.js

import React from 'react';

import { Formik } from 'formik';
import { Col, Form, Row, InputGroup } from 'react-bootstrap';



function Search ({ search }) { // changed
    const onSubmit = async (values, actions) => {
        await search(
          values.cohort,
          values.variant,
          values.genome
        );
      };
      
  
    return (
      <Formik
        initialValues={{
          cohort: '',
          variant: '',
          genome: ''
        }}
        onSubmit={onSubmit}
      >
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        values
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          
            <Form.Group controlId="country">
            <Row>
                
                <Col lg={5} class="variant">
                <Form.Label><b>Variant</b></Form.Label>
                    <Form.Control
                    type="search"
                    name="variant"
                    className="shadow-none"
                    placeholder="Search for a variant (e.g. 13-32398489-A-T)"
                    value={values.genres}
                    onChange={handleChange}
                    />
                    
                </Col>
                
                <Col class="refgenome">
                <Form.Label htmlFor="points"><b>Ref Genome</b></Form.Label>
                
                <Form.Select
                    name='genome'
                    onChange={handleChange}
                    className="shadow-none"
                    value={values.genome}
                  >
                    <option value='hg37'>hg37</option>
                  </Form.Select>
                    </Col>
                    <Col class="cohort">
                    <Form.Label><b>Cohort</b></Form.Label>
            
                    <Form.Select 
                    name='cohort'
                    className="shadow-none"
                    onChange={handleChange}
                    value={values.cohort}>
                      <option value="GoE">GoE</option>
                      </Form.Select>
                    </Col>
                    <Col>
              <button className="button1" type='submit' variant='primary'><div class='lupared'></div>Search</button>
              {/*<button className="button2 mt-3 ms-2" type='submit' variant='primary' onClick={() => {window.location.href="/"}}>
      Reset
    </button>*/}
            </Col>
                    </Row>


          </Form.Group>
          <Form.Group as={Row}>

          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default Search;