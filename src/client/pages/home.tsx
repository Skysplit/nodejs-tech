import React, { PureComponent, Fragment } from 'react';
import Link from '@next/link';

export default class HomePage extends PureComponent<{}> {
  render() {
    return (
      <Fragment>
        <h1>Hello world</h1>

        <Link route="test">
          <a>Go to some page</a>
        </Link>
      </Fragment>
    );
  }
}
