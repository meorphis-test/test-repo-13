// File generated from our OpenAPI spec by Stainless.

import MeorphisTest26S7v7t1 from 'meorphis-test-26-s7v7t1';
import { Response } from 'node-fetch';

const meorphisTest26S7v7t1 = new MeorphisTest26S7v7t1({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource financialTransactions', () => {
  test('retrieve', async () => {
    const responsePromise = meorphisTest26S7v7t1.cards.financialTransactions.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      meorphisTest26S7v7t1.cards.financialTransactions.retrieve(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MeorphisTest26S7v7t1.NotFoundError);
  });
});