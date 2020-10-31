import React from "react"
import {shallow, mount} from 'enzyme';
import PromptUserInfo from './PromptUserInfo'


// import {findByTestAtrr} from "../../testFunctions/index"
// import App from "../App"

describe('Prompt User Info Component', () => {
    const setDailyCal = jest.fn();
    const setUserDiet = jest.fn();
    const setInitialInput = jest.fn();
    const transition = jest.fn();

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <PromptUserInfo 
                setDailyCal={setDailyCal}
                setUserDiet={setUserDiet}
                setInitialInput={setInitialInput}
            />
        )
    })

    it ('Renders nomrally', () => {
        wrapper = shallow(<PromptUserInfo/>)
    })
    
    it ('checks if submitting calories transitions to prompting diet selection', () => {
        wrapper = mount(<PromptUserInfo
                setDailyCal= {setDailyCal}
                setUserDiet={{}}
                setInitialInput={{}}
        />)
        let input = wrapper.find('input')
        input.invoke('onChange')({target: {value: 9}})
        let button = wrapper.find('.btn')
        expect(button.length).toBe(1)
        button.invoke('onClick')();
        let label = wrapper.find('label')
        expect(label.html()).toContain('dietary preference')
    })


})