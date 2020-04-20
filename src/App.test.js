import React from 'react';
import App from '../App';
import { render, userEvent, waitFor } from "@testing-library/react";
import {fetchShow as mockFetchShow} from './api/fetchShow';
import {showData} from './testData';

jest.mock('./api/fetchShow')

test('Testing to see if App renders', async () => {
    mockFetchShow.mockResolvedValueOnce({
       data: showData
      });
    const {getByTestId} = render (<App/>);
});

