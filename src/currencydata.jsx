import React from 'react'
import './currency.css';
export default function CurrencyData(props){
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    
    return (
        <>
        <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      
        <select value = {selectedCurrency} onChange = {onChangeCurrency}>
            {currencyOptions.map(option => 
                <option key={option} value={option}>{option}</option>
                
                )}

        </select>
       
        </>
    )
}