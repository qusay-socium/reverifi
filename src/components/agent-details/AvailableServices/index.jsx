import React from 'react';
import { BodyContainers, IconGroup } from './available-services.style';
import data from './data';

function AvailableServices() {
  return (
    <BodyContainers>
      {data.map(({ Icon, quantity, id }) => (
        <IconGroup key={id}>
          <span>{quantity}</span>
          <Icon />
        </IconGroup>
      ))}
    </BodyContainers>
  );
}

export default AvailableServices;
