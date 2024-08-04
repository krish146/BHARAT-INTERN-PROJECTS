import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../../styles/Layout'
import { useGlobalContext } from '../../context/globalContext'
import Form from '../forms/Form'
const BoardIncome = () => {
  const {addIncome} =useGlobalContext();


  return (
    <IncomeStyled>
      <InnerLayout>
      <div className="income-content">
        <h1 className="heading">Incomes</h1>
              <div className="form-container">
              <Form></Form>
              </div>
              <div className="incomes">
               
              </div>
      </div>
      </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`
`;

export default BoardIncome
