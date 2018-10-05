
import React from 'react';
import renderer from 'react-test-renderer'

import {sum} from './Main.logic'
import Main from './Main.android'



test('Should be defined', () => {
    expect(sum(2, 2)).toBe(4)
})



