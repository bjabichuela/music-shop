import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import Swal from 'sweetalert2'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      Swal.fire({
        text: 'You are now logged in.',
        icon: 'success'
      })
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1 className='text-center mt-4'>Sign In</h1>
      {error && <Message variant='light'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group className='py-1' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label className='mt-3'>Password</Form.Label>
          <Form.Control
            className="py-2"
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='text-center pt-4 d-grid gap-2'>
        <Button className="py-2" type='submit' variant='secondary'>
          Sign in
        </Button>
        </Form.Group>
      </Form>

      <Row className='text-center'>
        <Col className='py-4'>
          No account?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
        </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
