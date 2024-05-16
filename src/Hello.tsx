import React, { FC, useState } from 'react';
import './Hello.pcss';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  const [value, setValue] = useState<string | undefined>()
  console.log("### re-rendered" + new Date());

  return <div className={'Hello'}>
    <h1>Hello React</h1>
    <button onClick={() => { setValue('abc') }} >Set value</button>
  </div>;
}
