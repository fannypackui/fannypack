import React from 'react';

const SvgComponent = props => (
  <svg width={62} height={51} fill="none" {...props}>
    <path
      d="M47.292 1H14.204c-.61 0-1.103.684-1.103 1.528v9.55c0 .843.494 1.527 1.103 1.527h33.088c.61 0 1.103-.684 1.103-1.528v-9.55C48.395 1.685 47.9 1 47.292 1z"
      fill="#3926A5"
      stroke="#08175D"
    />
    <path d="M39.824 6.546h-22.69v2.017h22.69V6.546zM42.849 8.563l-1.747-1.89h3.493l-1.746 1.89z" fill="#fff" />
    <path
      d="M58.983 18.143H3.017C1.903 18.143 1 19.12 1 20.328v27.857c0 1.206.903 2.185 2.017 2.185h55.966c1.114 0 2.017-.978 2.017-2.185V20.328c0-1.207-.903-2.185-2.017-2.185z"
      fill="#fff"
      stroke="#08175D"
    />
    <path
      d="M55.958 30.244H5.538v2.73h50.42v-2.73zM30.748 35.979H5.538v2.731h25.21V35.98z"
      fill="#3926A5"
      fillOpacity={0.12}
    />
  </svg>
);

export default SvgComponent;
