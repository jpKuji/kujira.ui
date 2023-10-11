// Light

export const Chart = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}>
    <path
      d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V400c0 44.2 35.8 80 80 80H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48V48zm288 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V96c0 .3 0 .5 0 .8c-18.3 3.7-32 19.8-32 39.2v80c0 19.4 13.8 35.5 32 39.2c0 .3 0 .5 0 .8v48c0 8.8 7.2 16 16 16s16-7.2 16-16V256c0-.3 0-.5 0-.8c18.3-3.7 32-19.8 32-39.2V136c0-19.4-13.8-35.5-32-39.2c0-.3 0-.5 0-.8V48zM176 64c-8.8 0-16 7.2-16 16v48c0 .3 0 .5 0 .8c-18.3 3.7-32 19.8-32 39.2V280c0 19.4 13.8 35.5 32 39.2c0 .3 0 .5 0 .8v48c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-.3 0-.5 0-.8c18.3-3.7 32-19.8 32-39.2V168c0-19.4-13.8-35.5-32-39.2c0-.3 0-.5 0-.8V80c0-8.8-7.2-16-16-16zm144 72v80c0 4.4-3.6 8-8 8H296c-4.4 0-8-3.6-8-8V136c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8zm104 88h16c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H424c-4.4 0-8-3.6-8-8V232c0-4.4 3.6-8 8-8zm-8-32c0 .3 0 .5 0 .8c-18.3 3.7-32 19.8-32 39.2v48c0 19.4 13.8 35.5 32 39.2c0 .3 0 .5 0 .8v48c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-.3 0-.5 0-.8c18.3-3.7 32-19.8 32-39.2V232c0-19.4-13.8-35.5-32-39.2c0-.3 0-.5 0-.8V144c0-8.8-7.2-16-16-16s-16 7.2-16 16v48zM184 160c4.4 0 8 3.6 8 8V280c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8h16z"
      fill="currentColor"
    />
  </svg>
);

export const ChartUp = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}>
    <path
      d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48V400c0 44.2 35.8 80 80 80H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48V48zm288 96c0 8.8 7.2 16 16 16h89.4L320 265.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 214.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0L448 182.6V272c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
      fill="currentColor"
    />
  </svg>
);

export const Plug = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 90 90"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M77.443 6.104a6.043 6.043 0 0 0-7.384.897l-1.041 1.04a24.28 24.28 0 0 0-26.6 5.2l-4.659 4.658a2.17 2.17 0 0 0 0 3.07l3.638 3.638-9.35 9.349a3.31 3.31 0 0 0 4.683 4.682l9.35-9.35L60.71 43.922l-9.349 9.349a3.31 3.31 0 0 0 4.682 4.682l9.35-9.349 3.637 3.638a2.17 2.17 0 0 0 3.07 0l4.658-4.659a24.28 24.28 0 0 0 5.2-26.6l1.04-1.04a6.043 6.043 0 0 0 .897-7.385L90 6.453 83.547 0l-6.104 6.104ZM6.453 90l6.104-6.104a6.043 6.043 0 0 0 7.384-.897l1.041-1.04a24.28 24.28 0 0 0 26.6-5.2l4.659-4.658a2.17 2.17 0 0 0 0-3.07L20.969 37.76a2.17 2.17 0 0 0-3.07 0l-4.658 4.659a24.28 24.28 0 0 0-5.2 26.6l-1.04 1.04a6.043 6.043 0 0 0-.897 7.385L0 83.547 6.453 90Z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export const Robot = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 640 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M320 0c8.8 0 16 7.2 16 16V96H448c53 0 96 43 96 96V416c0 53-43 96-96 96H192c-53 0-96-43-96-96V192c0-53 43-96 96-96H304V16c0-8.8 7.2-16 16-16zM192 128c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H320 192zm16 256h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H208c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H400c-8.8 0-16-7.2-16-16s7.2-16 16-16zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM48 224H64v32H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16H64v32H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zM592 384c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H576V224h16c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V384h16z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export const Swap = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M427.3 36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 112H400 344c-20.1 0-39.1 9.5-51.2 25.6L244 202.7l20 26.7 54.4-72.5c6-8.1 15.5-12.8 25.6-12.8h56 57.4l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80zM124.8 361.6c-3 4-7.8 6.4-12.8 6.4H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c15.1 0 29.3-7.1 38.4-19.2L204 309.3l-20-26.7-59.2 78.9zM404.7 475.3c6.2 6.2 16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 368H400 344c-10.1 0-19.6-4.7-25.6-12.8l-168-224C141.3 119.1 127.1 112 112 112H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c5 0 9.8 2.4 12.8 6.4l168 224C304.9 390.5 323.9 400 344 400h56 57.4l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);
