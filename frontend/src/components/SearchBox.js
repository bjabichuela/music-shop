import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} className='pe-2 ml-2 d-flex'>
      <Form.Control
        type='text'
        size='sm'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='me-sm-2 ml-3 px-5 my-3 my-sm-0'
      ></Form.Control>
      <Button bg="secondary" type='submit' variant='outline-light' className='mr-2-sm-2 my-3 my-sm-0'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
