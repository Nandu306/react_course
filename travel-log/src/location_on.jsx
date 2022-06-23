function LocationOn(props) {
  const title = props.title || "location on";

  return (
    <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>{title}</title>
  <g fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" fill="#F55A5A"/>
    <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="#F55A5A"/>
  </g>
</svg>
  );
};

export default LocationOn;
