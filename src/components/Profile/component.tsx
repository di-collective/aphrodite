import React, {useMemo} from 'react';
import clsx from 'clsx';

import ProfileProps from './props';

export const Profile: React.FC<ProfileProps> = (props) => {
  const {children, photo, name, href, location} = props;

  const rootClass = useMemo(
    () => clsx('text-base p-2', 'border rounded shadow', 'flex items-center gap-2'),
    [],
  );
  const imgClass = useMemo(() => clsx('rounded-full w-12 h-12'), []);

  return (
    <div className={rootClass}>
      <img className={imgClass} src={photo} />
      <span>
        <a href={href} className="underline">
          <strong>{name}</strong>
        </a>
        <p>{location}</p>
      </span>
      {children}
    </div>
  );
};

export default Profile;
