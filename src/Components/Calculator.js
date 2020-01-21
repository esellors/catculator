import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor() {
        super();
        this.state ={
            num1: '',
            num2: '',
            operation: 'select operation',
            solution: null
        }
        this.handleInput = this.handleInput.bind(this);
        this.selectOperation = this.selectOperation.bind(this);
        this.doTheMath = this.doTheMath.bind(this);
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    selectOperation(e) {
        const operation = e.target.name;
        this.setState({ operation });
    }

    doTheMath() {
        const { num1, num2, operation } = this.state;
        const howManyCats = eval(num1 + operation + num2);
        
        this.setState({ solution: howManyCats });
    }

    render() {
        return (
            <main>
                <section>
                    <input
                        name='num1'
                        onChange={this.handleInput} 
                    />
                    <input
                        name='num2'
                        onChange={this.handleInput} 
                    />
                </section>
                <section>
          <button
            name='+'
            onClick={this.selectOperation}
          >ADD</button>
          <button
            name='-'
            onClick={this.selectOperation}
          >SUBTRACT</button>
          <button
            name='*'
            onClick={this.selectOperation}
          >MULTIPY</button>
          <button
            name='/'
            onClick={this.selectOperation}
          >DIVIDE</button>
          <button
            onClick={this.doTheMath}
          >SUBMIT</button>
        </section>
                <section>
                    {
                        '🐈'.repeat(this.state.solution) || <img src='http://i717.photobucket.com/albums/ww173/prestonjjrtr/Funny/cats38.gif' alt='Cat.' />
                    }
                    
                </section>
            </main>
        )
    }
}