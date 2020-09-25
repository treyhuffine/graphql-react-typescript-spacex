import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query LaunchListQuery {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;
