import React from 'react'
import { Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'

const SearchPanel = ({tarm, handleSearch,toggleForm})=>{
 return(
    <div className='d-flex'>
        
        <Input
        placeholder='Enter Search Tarm'
        className='mr-3'
        value={tarm}
        onChange={e => handleSearch(e.target.value)}
        />
        <Button color='success' onClick={toggleForm}>New</Button>
    </div>
 )  
}
SearchPanel.propTypes={
    term: PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel

