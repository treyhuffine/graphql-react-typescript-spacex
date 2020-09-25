import * as React from 'react';
import './styles.css';
import { LaunchListQuery } from './__generated__/LaunchListQuery';

export interface OwnProps {
  handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
  launches: LaunchListQuery['launches'];
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ launches, handleIdChange }) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!launches &&
        launches.map(
          (launch, i) =>
            !!launch && (
              <li
                key={i}
                className={`${className}__item`}
                onClick={() => handleIdChange(launch.flight_number!)}
              >
                {launch.mission_name} ({launch.launch_year})
              </li>
            ),
        )}
    </ol>
  </div>
);

export default LaunchList;
