import { Variables } from 'react-relay';
import { RequestParameters } from 'relay-runtime';

export const GRAPHQL_URL = 'https://countries.trevorblades.com/';

const fetchQuery = async (request: RequestParameters, variables: Variables) => {
  const body = JSON.stringify({
    name: request.name, // used by graphql mock on tests
    query: request.text, // GraphQL text from input
    variables
  });
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json"
  };

  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers,
    body
  });

  return await response.json();
};

export default fetchQuery;
