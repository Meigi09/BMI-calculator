'use strict';

function calc() {
  const massElement = document.getElementById('mass');
  const heightElement = document.getElementById('height');
  const resElement = document.getElementById('result');

  if (massElement && heightElement) {
    const mass = parseFloat(massElement.value);
    const height = parseFloat(heightElement.value);
    
    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      const calculate = mass / (height ** 2);
      resElement.innerHTML = calculate.toFixed(2);
    } else {
      alert('Please enter valid numbers for mass and height.');
    }
  } else {
    alert('No values entered');
  }
  const results=parseFloat(resElement.value);
  const element=document.getElementById('container')
  if(results<=16.00){
    const value=document.createElement('textarea')
    const node=document.createTextNode('Severe Thinness')
    value.appendChild(node)
    element.appendChild(value)
  }else if(results>16&&results<=17.00){
    const value=document.createElement('textarea')
    const node=document.createTextNode('Moderate Thinness')
    value.appendChild(node)
    element.appendChild(value)
  }else if(results>17.00&&results<=18.5){
    const value=document.createElement('textarea')
    const node=document.createTextNode('Mild Thinness')
    value.appendChild(node)
    element.appendChild(value)
  }else if(results>18.5&&results<=25.00){
    const value=document.createElement('textarea')
    const node=document.createTextNode('Normal')
    value.appendChild(node)
    element.appendChild(value)
  }else if(results>25.00&&results<=30.00){
    const value=document.createElement('textarea')
    const node=document.createTextNode('Overweight')
    value.appendChild(node)
    element.appendChild(value)
  }else if(results>30.00&&results<=35.00){
    const value=document.createElement('textarea')
    const node=document.createTextNode('Obese Class I')
    value.appendChild(node)
    element.appendChild(value)
  }else if(results>35.00&&results<=40.5){
    const value=document.createElement('textarea')
    const node=document.createTextNode('Obese Class II')
    value.appendChild(node)
    element.appendChild(value)
  }else {
    const value=document.createElement('textarea')
    const node=document.createTextNode('Obese Class III')
    value.appendChild(node)
    element.appendChild(value)
  }
}
