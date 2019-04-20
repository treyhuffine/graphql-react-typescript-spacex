import * as React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import LaunchList, { OwnProps } from './LaunchList';

const LaunchListContainer = (props: OwnProps) => {
  const { data, error, loading } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} {...props} />;
};

export default LaunchListContainer;
