// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import * as React from "react"
import * as ReactDOM from "react-dom"
import { render, screen } from '@testing-library/react';
import App from './App'

test ('fakeTest', () => {
    expect(true).toBe(true)
})
