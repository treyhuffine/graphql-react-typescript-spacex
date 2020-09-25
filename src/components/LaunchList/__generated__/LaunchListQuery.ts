/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchListQuery
// ====================================================

export interface LaunchListQuery_launches {
  __typename: "Launch";
  flight_number: number | null;
  mission_name: string | null;
  launch_year: number | null;
}

export interface LaunchListQuery {
  launches: (LaunchListQuery_launches | null)[] | null;
}
