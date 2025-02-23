export interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
  }
  
  import React from "react";
  
  
  export const FacebookIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="16px"
    height="16px"
    enableBackground= "new 0 0 512 512"
    viewBox="0 0 100 100"
    className={className}
    {...rest}
  >
    <path
      fill="#FFFFFF"
      d="M40.4 55.2h-9.9c-1.6 0-2.1-.6-2.1-2.1V41c0-1.6.6-2.1 2.1-2.1h9.9v-8.8c0-4 .7-7.8 2.7-11.3 2.1-3.6 5.1-6 8.9-7.4 2.5-.9 5-1.3 7.7-1.3h9.8c1.4 0 2 .6 2 2v11.4c0 1.4-.6 2-2 2-2.7 0-5.4 0-8.1.1-2.7 0-4.1 1.3-4.1 4.1-.1 3 0 5.9 0 9h11.6c1.6 0 2.2.6 2.2 2.2V53c0 1.6-.5 2.1-2.2 2.1H57.3v32.6c0 1.7-.5 2.3-2.3 2.3H42.5c-1.5 0-2.1-.6-2.1-2.1V55.2z"
      data-original="#000000"
    />
  </svg>
  );
  
  export const InstaIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="18px"
    height="18px"
    enableBackground ="new 0 0 512 512"
    viewBox="0 0 512 512"
    className={className}
    {...rest}
  >
    <g fill="#110f0f">
      <path
        d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.934 130.934 0 0 0 74.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5zm-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0"
        data-original="#000000"
      />
      <path
        d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5zm0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3zm167.402-222c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699zm0 0"
        data-original="#000000"
      />
    </g>
  </svg>
  
  );
  
  export const LinkedInIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="18px"
    height="18px"
    enableBackground= "new 0 0 512 512"
    viewBox="0 0 510 510"
    className={className}
    {...rest}
  >
    <path
      d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"
      data-original="#000000"
    />
  </svg>
  );
  
  export const TwitterIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="16px"
    height="16px"
    enableBackground="new 0 0 512 512"
    viewBox="0 0 510 510"
    className={className}
    {...rest}
  >
    <path
      d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
      data-original="#000000"
    />
  </svg>
  );

  export const VectorIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={24}
    height={24}
    enableBackground="new 0 0 512 512"
    viewBox="0 0 24 24"
    className={className}
    {...rest}
  >
    <path
      d="m6.336 9.768 1.414-1.41 5.293 5.288 5.293-5.289 1.414 1.415-5.293 5.285a2 2 0 0 1-2.828 0Z"
      data-original="#000000"
    />
  </svg>
  );

 export const SearchIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={18}
    height={18}
    enableBackground="new 0 0 512 512"
    viewBox="0 0 24 24"
    className={className}
    {...rest}
  >
    <path
      fill="#928e8e"
      d="m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"
      data-original="#000000"
    />
  </svg>
  );

  export const CartIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={25}
    height={25}
    enableBackground="new 0 0 512 512"
    viewBox="0 0 24 24"
    className={className}
    {...rest}
  >
    <path fill="#bac8d3" d="M12 12z" />
    <g transform="matrix(.7 0 0 .7 3.596 3.6)">
      <circle cx={7} cy={22} r={2} data-original="#000000" />
      <circle cx={17} cy={22} r={2} data-original="#000000" />
      <path
        d="m5.654 5-.263-2.062A3.328 3.328 0 0 0 2.087 0H0v3h2.087a.331.331 0 0 1 .326.3l1.5 11.759A3.327 3.327 0 0 0 7.217 18H20.4l3.574-13Zm12.458 10H7.217a.329.329 0 0 1-.325-.3L6.037 8h14Z"
        data-original="#000000"
      />
    </g>
  </svg>
  );

  export const ProfileIcon: React.FC<IconProps> = ({ className, ...rest }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={19}
    height={19}
    enableBackground= "new 0 0 512 512"
    viewBox="0 0 512 512"
    className={className}
    {...rest}
  >
    <path
      fill="#0c0b0b"
      d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-60.844 0-116.142-24.177-156.812-63.419C121.212 351.287 184.487 305 256 305s134.788 46.287 156.813 113.582C372.142 457.823 316.844 482 256 482zm-75-282c0-41.355 33.645-75 75-75s75 33.645 75 75-33.645 75-75 75-75-33.645-75-75zm254.34 193.354c-22.07-51.635-65.404-90.869-117.777-108.35C343.863 265.904 361 234.918 361 200c0-57.897-47.103-105-105-105s-105 47.103-105 105c0 34.918 17.137 65.904 43.438 85.004-52.374 17.481-95.708 56.715-117.778 108.35C47.414 355.259 30 307.628 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 51.628-17.414 99.259-46.66 137.354z"
      data-original="#000000"
    />
  </svg>
);

export const ListIcon: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width={22}
  height={22}
  enableBackground= "new 0 0 512 512"
  viewBox="0 0 512 512"
  className={className}
  {...rest}
>
<path
      fill="#100b0b"
      d="M480 224H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h448c17.673 0 32-14.327 32-32s-14.327-32-32-32zM32 138.667h448c17.673 0 32-14.327 32-32s-14.327-32-32-32H32c-17.673 0-32 14.327-32 32s14.327 32 32 32zm448 234.666H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h448c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
      data-original="#000000"
    />
  </svg>
);

export const SearchIcon2: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width={18}
  height={18}
  enableBackground="new 0 0 512 512"
  viewBox="0 0 24 24"
  className={className}
  {...rest}
>
  <path
    fill="#000000"
    d="m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414ZM10 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8Z"
    data-original="#000000"
  />
</svg>
);


export const InboxIcon: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={28}
    height={28}
    enableBackground= "new 0 0 512 512"
     viewBox="0 0 512 512"
     className={className}
    {...rest}
  >
    <path
      fill="#909090"
      d="M75 128v256h362V128zm343.09 10L256 276.86 93.91 138zM85 143.53l114.71 98.27L85 367.22zM92.34 374 207.3 248.3l48.7 41.72 48.7-41.72L419.66 374zM427 367.22 312.29 241.8 427 143.53z"
      data-original="#000000"
    />
  </svg>
);

export const ShineIcon: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={230}
    height={230}
    enableBackground= "new 0 0 512 512"
     viewBox="0 0 512 512"
     className={className}
    {...rest}
  >
    <path
      fill="#000"
      d="M52 0c1.765 27.955 24.045 50.235 52 52-27.955 1.765-50.235 24.045-52 52-1.765-27.955-24.045-50.235-52-52 27.955-1.765 50.235-24.045 52-52Z"
    />
  </svg>
);

export const ShineIcon2: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width={700}
  height={700}
  enableBackground= "new 0 0 812 812"
   viewBox="0 0 812 812"
   className={className}
  {...rest}
>
  <path
    fill="#000"
    d="M52 0c1.765 27.955 24.045 50.235 52 52-27.955 1.765-50.235 24.045-52 52-1.765-27.955-24.045-50.235-52-52 27.955-1.765 50.235-24.045 52-52Z"
  />
</svg>
);

export const Left: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width="25px"
  height="25px"
  fillRule="evenodd"
  enableBackground= "new 0 0 512 512"
  viewBox="0 0 105 105"
  className={className}
  {...rest}
>
  <path
    fill="#0c0b0b"
    fillRule="nonzero"
    d="M97.914 47.917H16.306l26.221-26.221a4.162 4.162 0 0 0 0-5.891 4.163 4.163 0 0 0-5.892 0L3.302 49.134c-.384.387-.688.85-.9 1.358a4.171 4.171 0 0 0 0 3.184c.212.508.516.97.9 1.358l33.333 33.329a4.152 4.152 0 0 0 2.946 1.221 4.156 4.156 0 0 0 2.946-1.221 4.163 4.163 0 0 0 0-5.892l-26.221-26.22h81.608c2.3 0 4.167-1.867 4.167-4.167s-1.867-4.167-4.167-4.167z"
    data-original="#000000"
  />
</svg>
);

export const Right: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width="25px"
  height="25px"
  enableBackground="new 0 0 512 512"
  viewBox="0 0 24 24"
  className={className}
  {...rest}
>
  <path
    fill="#060505"
    d="m23.854 11.646-7.5-7.5a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707L20.379 11H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h19.879l-5.44 5.44a.5.5 0 0 0 0 .706l.707.707a.5.5 0 0 0 .707 0l7.5-7.5a.5.5 0 0 0 0-.707z"
    data-original="#000000"
  />
</svg>
);

export const Tick: React.FC<IconProps> = ({ className, ...rest }) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={17}
    height={17}
    fillRule="evenodd"
    enableBackground="new 0 0 512 512"
    viewBox="0 0 2.54 2.54"
    className={className}
    {...rest}
  >
    <circle
      cx={1.27}
      cy={1.27}
      r={1.27}
      fill="#00b400"
      data-original="#00ba00"
    />
    <path
      fill="#fff"
      d="M.873 1.89.41 1.391a.17.17 0 0 1 .008-.24.17.17 0 0 1 .24.009l.358.383.567-.53A.17.17 0 0 1 1.599 1l.266-.249a.17.17 0 0 1 .24.008.17.17 0 0 1-.008.24l-.815.76-.283.263-.125-.134z"
      data-original="#ffffff"
    />
  </svg>
);

