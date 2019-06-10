import * as React from 'react';
import LaunchProfile from './LaunchProfile';
import { useQuery } from 'react-apollo-hooks';
import { LaunchProfileQuery, LaunchProfileQueryVariables } from './__generated__/LaunchProfileQuery';
import { QUERY_LAUNCH_PROFILE } from './query';

interface OwnProps {
  id: number;
}

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { data, error, loading, refetch } = useQuery<LaunchProfileQuery, LaunchProfileQueryVariables>(QUERY_LAUNCH_PROFILE, {
    variables: { id: String(id) },
  });

  React.useEffect(() => {
    refetch();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <LaunchProfile launch={data.launch} />;
};

export default LaunchProfileContainer;
