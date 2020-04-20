/* eslint-env jest */
const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({adapter: new Adapter()});

jest.mock('../.storybook/specs');
jest.mock('react-select', ()=> ()=> <div>React Select</div>);
jest.mock('react-countup', ()=> ()=> <div>React CountUP</div>);
