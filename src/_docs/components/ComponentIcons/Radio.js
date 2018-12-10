import React from 'react';

const SvgComponent = props => (
  <svg width={71} height={49} fill="none" {...props}>
    <path d="M71 8H27v5h44V8zM71 37H27v5h44v-5z" fill="#3926A5" fillOpacity={0.12} />
    <circle cx={10} cy={10} r={9.5} stroke="#3926A5" />
    <circle cx={10} cy={39} r={9.5} stroke="#000" />
    <circle cx={10} cy={10} r={5} fill="#3926A5" />
  </svg>
);

export default SvgComponent;
