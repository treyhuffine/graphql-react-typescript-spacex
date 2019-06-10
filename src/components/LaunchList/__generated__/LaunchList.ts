/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchList
// ====================================================

export interface LaunchList_launches {
  __typename: "Launch";
  flight_number: number | null;
  mission_name: string | null;
  launch_year: number | null;
}

export interface LaunchList {
  launches: (LaunchList_launches | null)[] | null;
}
