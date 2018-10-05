import React from 'react';
import { shallow, mount, render } from 'enzyme';

const {sum} = require('./Main.logic')
const Main = require('./Main.android')



test('Should be defined', () => {
    expect(sum(2, 2)).toBe(4)
})

test('testing component', () => {
    const wrapper = shallow(</Main>)
})