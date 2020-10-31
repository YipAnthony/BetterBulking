import React from "react"
import {shallow} from 'enzyme';
import App from './App'
import PromptUserInfo from './Components/PromptUserInfo'
import {findByTestAtrr} from "../testFunctions/index"

describe('App Component', () => {

    it('Renders without errors', () => {
        const component = shallow(<App />);
        const wrapper = findByTestAtrr(component, 'App')
        expect(wrapper.length).toBe(1)
    });

    it('contains PromptUserInfo component', () => {
        const component = shallow(<App/>)
        const promptUserInfoComponent = component.find(PromptUserInfo);
        expect(promptUserInfoComponent.length).toBe(1)

    })
})

