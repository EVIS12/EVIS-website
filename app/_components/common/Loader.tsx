import React from 'react';
import { PropagateLoader } from 'react-spinners';

export default function Loader({ color }: { color?: string }) {
  return (
    <div className="h-screen w-full grid place-content-center">
      <PropagateLoader color={color ?? '#25BDB9'} />
    </div>
  );
}
