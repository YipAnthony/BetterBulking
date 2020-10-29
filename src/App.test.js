import React from "react"
import {shallow} from 'enzyme';
import App from './App'
import "../src/setupTests"
import {findByTestAtrr} from "../testFunctions/index"

describe('App Component', () => {

    it('Renders without errors', () => {
        const component = shallow(<App />);
        console.log(component.debug())
        const wrapper = findByTestAtrr(component, 'App')
        expect(wrapper.length).toBe(1)
    });

    // it('Should')
})

