import * as React from 'react';
import './styles.css';
import { LaunchProfileQuery } from './__generated__/LaunchProfileQuery';

interface Props {
  launch: LaunchProfileQuery['launch'];
}

const className = 'LaunchProfile';

const LaunchProfile: React.FC<Props> = ({ launch }) => {
  if (!launch) {
    return <div>No launch available</div>;
  }

  return (
    <div className={className}>
      <div className={`${className}__status`}>
        <span>Flight {launch.flight_number}: </span>
        {launch.launch_success ? (
          <span className={`${className}__success`}>Success</span>
        ) : (
          <span className={`${className}__failed`}>Failed</span>
        )}
      </div>
      <h1 className={`${className}__title`}>
        {launch.mission_name}
        {launch.rocket &&
          ` (${launch.rocket.rocket_name} | ${launch.rocket.rocket_type})`}
      </h1>
      <p className={`${className}__description`}>{launch.details}</p>
      {!!launch.links && !!launch.links.flickr_images && (
        <div className={`${className}__image-list`}>
          {launch.links.flickr_images.map(image =>
            image ? <img src={image} className={`${className}__image`} key={image} /> : null,
          )}
        </div>
      )}
    </div>
  );
};

export default LaunchProfile;
