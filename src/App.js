import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import Input from './components/Input';
import Button from './components/Button'
import Container from './components/Container';
import Section from './components/Section';
import Balance from './components/Balance';
import { useState } from 'react';

const compoundInteres = (deposit, contribution, years, rate)=>{
  let total= deposit
  for(let i =0; i< years; i++){
    total=( total + contribution)*(rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US',{
  style:'currency',
  currency:'USD',
  minimumFractionDigits:2,
  maximumFractionDigits:2,
})
function App() {
  const [balance,setBalance]= useState('')
  const handleSubmit= ({deposit, contribution, years, rate})=>{
    const val= compoundInteres(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val));
  }
  return (
    <Container >
      <Section>
        <Formik
          initialValues={{
            deposit:'',
            contribution:'',
            years:'',
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Obligatorio').typeError('Debe ser un numero'),
            contribution:Yup.number().required('Obligatorio').typeError('Debe ser un numero'),
            years:Yup.number().required('Obligatorio').typeError('Debe ser un numero'),
            rate: Yup.number()
                     .required('Obligatorio')
                     .typeError('Debe ser un numero')
                     .min(0, 'El valor minimo es 0')
                     .max(1, 'El valor maximo es 1'),
          })}
        >
          <Form>
            <Input name='deposit' label='Deposito inicial'></Input>
            <Input name='contribution' label='Contribución anual'></Input>
            <Input name='years' label='Años'></Input>
            <Input name='rate' label='Interes estimado'></Input>
            <Button type='submit'> Calcular</Button>
          </Form>
        </Formik>

      {balance !== ''? <Balance>Balance Final: {balance}</Balance>:null}
      </Section>
    </Container>

  );
}

export default App;
