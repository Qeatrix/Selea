import React from 'react';

const Error_Icon = ({ fillColor, strokeColor, className }) => (
    <svg className={className} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path fill={fillColor} stroke={strokeColor} d="M 249.98 5.021 C 185.02 5.021 122.721 30.827 76.786 76.763 C 30.854 122.697 5.047 185.003 5.047 249.956 C 5.047 314.909 30.852 377.213 76.786 423.15 C 122.721 469.081 185.026 494.889 249.98 494.889 C 314.932 494.889 377.236 469.083 423.173 423.15 C 469.105 377.213 494.91 314.909 494.91 249.956 C 494.841 185.016 469.018 122.758 423.093 76.844 C 377.178 30.919 314.913 5.094 249.983 5.024 L 249.98 5.021 Z M 249.98 459.902 C 194.299 459.902 140.898 437.78 101.53 398.409 C 62.155 359.038 40.037 305.638 40.037 249.96 C 40.037 194.281 62.155 140.879 101.53 101.508 C 140.901 62.138 194.302 40.017 249.98 40.017 C 305.657 40.017 359.059 62.138 398.43 101.508 C 437.802 140.882 459.921 194.281 459.921 249.96 C 459.862 305.621 437.724 358.981 398.363 398.35 C 359.003 437.71 305.638 459.852 249.974 459.908 L 249.98 459.902 Z"/>
        <path fill={fillColor} stroke={strokeColor} d="M 349.556 151.47 C 346.29 148.204 341.863 146.369 337.245 146.369 C 332.626 146.369 328.197 148.204 324.932 151.47 L 251.028 225.368 L 177.123 151.466 L 177.123 151.47 C 172.699 147.197 166.351 145.572 160.419 147.197 C 154.488 148.827 149.855 153.46 148.226 159.388 C 146.602 165.32 148.226 171.671 152.499 176.094 L 226.398 249.998 L 152.494 323.902 L 152.499 323.902 C 149.136 327.145 147.223 331.607 147.181 336.278 C 147.141 340.95 148.977 345.442 152.279 348.744 C 155.586 352.051 160.076 353.884 164.748 353.847 C 169.419 353.804 173.881 351.892 177.123 348.528 L 251.028 274.629 L 324.932 348.531 L 324.932 348.528 C 329.356 352.801 335.705 354.426 341.637 352.801 C 347.568 351.17 352.2 346.538 353.829 340.609 C 355.454 334.676 353.829 328.326 349.556 323.902 L 275.657 249.998 L 349.561 176.094 L 349.556 176.094 C 352.823 172.83 354.656 168.402 354.656 163.784 C 354.656 159.165 352.823 154.736 349.556 151.47 Z"/>
    </svg>
)

export default Error_Icon;