import React from 'react';
import { useQuery, graphql } from 'relay-hooks';
import { ContinentQuery } from './__generated__/ContinentQuery.graphql';

const query = graphql`
  query ContinentQuery($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
        capital
        languages {
          code
          name
          native
        }
      }
    }
  }
`;

const variables = { code: "SA" };

const Continent = () => {
  const { props, error } = useQuery<ContinentQuery>(query, variables);

  if(error) return <div>Erro</div>;
  if(props) {
    return (
      <>
        <div>
          Continent:
          <li>code: {props.continent.code}</li>
          <li>name: {props.continent.name}</li>
        </div>

        <div>
          Countries:
          {props.continent.countries && props.continent.countries.map(country => {
            return (
              <ul key={country.code}>
                <li>code: {country.code}</li>
                <li>name: {country.name}</li>
                <li>capital: {country.capital}</li>

                <div>
                  Languages:
                  {country.languages && country.languages.map((language, index) => {
                    return (
                      <ul key={language.code}>
                        {index + 1}
                        <li>code: {language.code}</li>
                        <li>name: {language.name}</li>
                        <li>native: {language.native}</li>
                      </ul>
                    )
                  })}
                </div>
              </ul>
              )
          })}
        </div>
      </>
    )
  }

  return <div>Loading...</div>;
};

export default Continent;