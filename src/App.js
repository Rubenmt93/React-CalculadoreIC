import styled from 'styled-components'
import { Formik, Form } from 'formik';
import Input from './components/Input';
import Button from './components/Button'
import Container from './components/Container';
import Section from './components/Section';

function App() {
  const handleSubmit= ()=>{}
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
