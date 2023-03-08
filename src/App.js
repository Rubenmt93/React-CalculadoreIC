import styled from 'styled-components'
import { Formik, Form } from 'formik';
import Input from './components/Input';
import Button from './components/Button'
import Container from './components/Container';
import Section from './components/Section';

const compoundInteres = (deposit, contribution, years, rate)=>{
  let total= deposit
  for(let i =0; i< years; i++){
    total=( total + contribution)*(rate + 1)
  }

  return Math.round(total)
}
function App() {
  const handleSubmit= ({deposit, contribution, years, rate})=>{
    const val= compoundInteres(Number(deposit), Number(contribution), Number(years), Number(rate))
    console.log(val);
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
        >
          <Form>
            <Input name='deposit' label='Deposito inicial'></Input>
            <Input name='contribution' label='Contribución anual'></Input>
            <Input name='years' label='Años'></Input>
            <Input name='rate' label='Interes estimado'></Input>
            <Button> Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
