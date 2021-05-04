import React, { Fragment } from 'react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

export default {
  title: 'Form/Subscription',
};

export const PrimarySubscription = () => {
  return (
    <Fragment>
      <Large />
      <Primary />
    </Fragment>
  );
};
