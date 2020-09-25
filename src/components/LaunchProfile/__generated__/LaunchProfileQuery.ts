/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchProfileQuery
// ====================================================

export interface LaunchProfileQuery_launch_launch_site {
  __typename: "LaunchSite";
  site_name: string | null;
}

export interface LaunchProfileQuery_launch_rocket {
  __typename: "LaunchRocket";
  rocket_name: string | null;
  rocket_type: string | null;
}

export interface LaunchProfileQuery_launch_links {
  __typename: "LaunchLinks";
  flickr_images: (string | null)[] | null;
}

export interface LaunchProfileQuery_launch {
  __typename: "Launch";
  flight_number: number | null;
  mission_name: string | null;
  launch_year: number | null;
  launch_success: boolean | null;
  details: string | null;
  launch_site: LaunchProfileQuery_launch_launch_site | null;
  rocket: LaunchProfileQuery_launch_rocket | null;
  links: LaunchProfileQuery_launch_links | null;
}

export interface LaunchProfileQuery {
  launch: LaunchProfileQuery_launch | null;
}

export interface LaunchProfileQueryVariables {
  id: string;
}
