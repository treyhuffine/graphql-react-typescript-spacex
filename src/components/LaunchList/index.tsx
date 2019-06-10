import * as React from 'react';
import LaunchList, { OwnProps } from './LaunchList';
import { useQuery } from 'react-apollo-hooks';
import { QUERY_LAUNCH_LIST } from './query'
import { LaunchListQuery } from './__generated__/LaunchListQuery';

const LaunchListContainer = (props: OwnProps) => {
  const { data, error, loading } = useQuery<LaunchListQuery>(QUERY_LAUNCH_LIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList launches={data.launches} {...props} />;
};

export default LaunchListContainer;
