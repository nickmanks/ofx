import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'react-grid-system';
import {useForm, Controller} from 'react-hook-form';
import Input from '#src/components/Input';
import Select from '#src/components/Select';
import Phone from '#src/components/Phone';
import {fetchQuote} from '#src/exchange/actions';
import {setFirst, setLast, setEmail, setPhone} from '#src/user/actions';
import {goTo} from '#src/history';
import styles from './index.scss';

const options = [
  {value: 'AUD', label: 'Australian Dollar (AUD)'},
  {value: 'USD', label: 'American Dollar (USD)'},
  {value: 'GBP', label: 'British Pounds (GBP)'}
];

const Quote = ({
  first,
  last,
  email,
  phone,
  onSubmit,
  onUpdateFirstName,
  onUpdateLastName,
  onUpdateEmail,
  onUpdatePhone
})=> {
  const {handleSubmit, register, errors, control, setValue} = useForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Quick Quote</h1>
      <div className={styles.containerTop}>
        <Container>
          <Row>
            <Col md={6}>
              <Input
                name={'first'}
                type={'text'}
                placeholder={'First Name'}
                label={'First Name'}
                value={first || ''}
                ref={register({required: 'Required'})}
                error={errors.first}
                onChange={(value)=> onUpdateFirstName(value)}
              />
            </Col>
            <Col md={6}>
              <Input
                name={'last'}
                type={'text'}
                placeholder={'Last Name'}
                label={'Last Name'}
                value={last || ''}
                ref={register({required: 'Required'})}
                error={errors.last}
                onChange={(value)=> onUpdateLastName(value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Input
                name={'email'}
                type={'email'}
                placeholder={'Email'}
                label={'Email'}
                value={email || ''}
                ref={register({
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address'
                  }
                })}
                error={errors.email}
                onChange={(value)=> onUpdateEmail(value)}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Phone
                id={'phone'}
                name={'phone'}
                value={phone || ''}
                ref={register({name: 'phone', type: 'custom'})}
                label={'Telephone / Mobile'}
                onChange={(value)=> {
                  setValue('phone', value);
                  onUpdatePhone(value);
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.containerBottom}>
        <Container>
          <Row>
            <Col md={6} className={styles.column}>
              <label htmlFor={'from'}>From Currency</label>
              <Controller
                id={'from'}
                name={'from'}
                as={
                  <Select
                    placeholder={'From Currency'}
                    options={options}
                    error={errors.from}
                    zIndex={4}
                  />
                }
                control={control}
                rules={{required: 'Required'}}
              />
            </Col>
            <Col md={6} className={styles.column}>
              <label htmlFor={'to'}>To Currency</label>
              <Controller
                id={'to'}
                name={'to'}
                as={
                  <Select
                    placeholder={'To Currency'}
                    options={options}
                    error={errors.to}
                    zIndex={3}
                  />
                }
                control={control}
                rules={{required: 'Required'}}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Input
                id={'amount'}
                name={'amount'}
                type={'amount'}
                placeholder={'Amount'}
                label={'Amount'}
                ref={register({required: 'Required'})}
                error={errors.amount}
              />
            </Col>
          </Row>
        </Container>
        <button className={styles.submit} type={'submit'}>
          Get Quote
        </button>
      </div>
    </form>
  );
};
Quote.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  onUpdateFirstName: PropTypes.func,
  onUpdateLastName: PropTypes.func,
  onUpdateEmail: PropTypes.func,
  onUpdatePhone: PropTypes.func,
  onSubmit: PropTypes.func
};

const mapStateToProps = ({user})=> ({
  first: user.first,
  last: user.last,
  email: user.email,
  phone: user.phone
});

const mapDispatchToProps = (dispatch)=> ({
  onSubmit: ({from, to, amount})=> {
    dispatch(fetchQuote(from, to, amount));
    goTo('/result');
  },

  onUpdateFirstName: (value)=> {
    dispatch(setFirst(value));
  },

  onUpdateLastName: (value)=> {
    dispatch(setLast(value));
  },

  onUpdateEmail: (value)=> {
    dispatch(setEmail(value));
  },

  onUpdatePhone: (value)=> {
    dispatch(setPhone(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);
