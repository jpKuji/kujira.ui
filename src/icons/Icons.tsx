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

export const LendBorrow = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className={className}>
    <path
      d="M548.7 27.3L585.4 64l-45.3 0H524.6L384 64l-.3 0H96c-35.3 0-64 28.7-64 64V348.1l14.1-14.1L64 316.1V192c53 0 96-43 96-96H524.3h15.8l45.3 0-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c3-3 4.7-7.1 4.7-11.3s-1.7-8.3-4.7-11.3l-64-64c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zM128 96c0 35.3-28.7 64-64 64V128c0-17.7 14.3-32 32-32h32zM54.6 448l45.3 0 0 0H544c35.3 0 64-28.7 64-64V163.9l-14.1 14.1L576 195.9V320h0c-53 0-96 43-96 96H256.4l-.4 0L54.6 416l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 448zM576 352h0v32c0 17.7-14.3 32-32 32H512c0-35.3 28.7-64 64-64zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm160 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z"
      fill="currentColor"
    />
  </svg>
);

export const Orca = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 43.819 46"
    className={className}>
    <path
      d="M35.544.069c2.523-.25 4.931.18 7.219 1.265.82.388 1.09 1.1 1.052 1.966-.087 1.996-.735 3.836-1.598 5.604-1.65 3.378-3.848 6.34-6.765 8.742-.124.102-.261.298-.25.438.175 2.227-.377 4.33-1.095 6.397-.9 2.592-2.04 5.072-3.757 7.24-.317.402-.696.773-1.107 1.075-.759.556-1.447.343-1.62-.577-.182-.97-.298-1.988-.21-2.964.185-2.057.522-4.099.797-6.148l.008-.067.013-.167c-1.09.708-2.13 1.48-3.256 2.094-2.327 1.27-4.896 1.705-7.494 2.011-1.357.16-2.72.3-4.06.553-2.676.503-3.669 2-3.199 4.767.15-.1.28-.18.403-.268l.248-.175c2.324-1.595 4.879-2.014 7.634-1.337.404.1.8.286 1.16.501.174.105.366.382.346.556-.02.174-.271.378-.467.463-.844.366-1.735.637-2.554 1.048-1.525.765-2.698 1.884-3.133 3.605-.331 1.313-.135 2.612.24 3.882.288.972.639 1.925.954 2.89.11.333.225.668.282 1.011.071.432.194.915-.225 1.24-.45.35-1.026.377-1.465.091-.953-.621-1.935-1.249-2.74-2.042C7.45 40.35 5.579 36.202 5.36 31.327c-.158-3.544.657-6.886 2.038-10.119.553-1.294 1.548-2.126 2.774-2.742a70.765 70.765 0 0 0 2.889-1.525c.865-.487 1.594-1.14 2.1-2.007.157-.268.295-.558.377-.856.2-.724-.216-1.238-.938-1.043a7.406 7.406 0 0 0-2.104.922c-.75.49-1.388 1.147-2.128 1.776l.169-.629c.305-1.159.011-2.12-1-2.748-.697-.432-1.488-.726-2.256-1.028l-1.393-.537c-1.394-.53-2.793-1.049-4.173-1.614C1.217 8.973.763 8.6.368 8.222c-.57-.546-.466-1.103.233-1.47.924-.483 1.93-.626 2.943-.703l.553-.038c3.387-.213 6.764 0 10.114.472 2.81.394 5.45-.092 7.99-1.216 2.175-.964 4.3-2.043 6.451-3.06C30.848 1.17 33.102.31 35.544.07Zm2.931 8.173c.06-.626-.27-.857-.848-.624-.17.069-.334.16-.483.264-1.224.848-2.156 1.945-2.766 3.304-.058.127-.1.26-.134.386l-.104.415c-.01.757.289.968.844.74.17-.069.331-.16.479-.27 1.183-.887 2.141-1.967 2.766-3.317.13-.284.214-.587.246-.898Z"
      fill="currentColor"
    />
  </svg>
);
export const Pilot = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}>
    <path
      d="M219.3 292.7c-10-10-21.4-18.1-33.8-24.1C215.6 146.3 269 86.7 321.1 58.1c53.5-29.4 111.4-29.4 154.6-21.8c7.6 43.2 7.7 101.1-21.8 154.6C425.3 243 365.7 296.4 243.4 326.5c-6-12.4-14.1-23.9-24.1-33.8zM256 381.3c0-8.2-.8-16.3-2.4-24.3c37.8-9.5 70.4-21.3 98.4-34.7v80.1c0 12.1-6.8 23.2-17.7 28.6L256 470.1l0-88.9zm128 21.1l0-97.4C515.7 225.1 520.5 102.5 506.7 28.1c-2.2-11.6-11.2-20.7-22.8-22.8C409.5-8.5 286.9-3.7 207 128l-97.4 0c-24.2 0-46.4 13.7-57.2 35.4L1.7 264.8c-2.5 5-2.2 10.9 .7 15.6s8.1 7.6 13.6 7.6H130.7c24.7 0 48.5 9.8 65.9 27.3s27.3 41.2 27.3 65.9V496c0 5.5 2.9 10.7 7.6 13.6s10.6 3.2 15.6 .7l101.5-50.7c21.7-10.8 35.4-33 35.4-57.2zm-229-144c-7.9-1.6-16.1-2.4-24.3-2.4H41.9L81 177.7c5.4-10.8 16.5-17.7 28.6-17.7h80.1c-13.5 28-25.2 60.5-34.7 98.4zm-11.2 189c-11 11-29.4 19.4-52.6 24.9c-20.6 4.9-42.1 6.8-59 7.4c.6-17 2.5-38.4 7.4-59c5.5-23.2 13.9-41.6 24.9-52.6c21.9-21.9 57.4-21.9 79.3 0s21.9 57.4 0 79.3zM166.5 470c34.4-34.4 34.4-90.1 0-124.5s-90.1-34.4-124.5 0C7.7 379.7 1 446 .1 483.7c-.4 16 12.2 28.6 28.2 28.2C66 511 132.3 504.3 166.5 470zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM368 88a56 56 0 1 0 0 112 56 56 0 1 0 0-112z"
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

export const Provide = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 512 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M263.9 2.1C259-.7 253-.7 248.1 2.1L15.8 133.7C6 139.3 0 149.6 0 160.8C0 178 14 192 31.2 192H256 480.8c17.2 0 31.2-14 31.2-31.2c0-11.2-6-21.6-15.8-27.1L263.9 2.1zM306.6 160c3.5-7.3 5.4-15.4 5.4-24c0-30.9-25.1-56-56-56s-56 25.1-56 56c0 8.6 1.9 16.7 5.4 24H34.3L256 34.4 477.7 160H306.6zM256 112a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM64 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H448c8.8 0 16-7.2 16-16s-7.2-16-16-16V224H416V352H336V224H304V352H208V224H176V352H96V224H64V352zM40 416c-8.8 0-16 7.2-16 16s7.2 16 16 16H472c8.8 0 16-7.2 16-16s-7.2-16-16-16H40zM16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H16z"
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

export const Stake = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 576 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <path
      d="M266.2 4.7C273 1.6 280.5 0 288 0s15 1.6 21.8 4.7l217.4 97.5c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9L309.8 251.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 153.9C38.6 149.3 32 139.2 32 128s6.6-21.3 16.8-25.9L266.2 4.7zM288 32c-3 0-6 .6-8.8 1.9L69.3 128l210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-210-94.1C294 32.6 291 32 288 32zM48.8 358.1l45.9-20.6 39.1 17.5L69.3 384l210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-64.5-28.9 39.1-17.5 45.9 20.6c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9L309.8 507.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 409.9C38.6 405.3 32 395.2 32 384s6.6-21.3 16.8-25.9zM94.7 209.5l39.1 17.5L69.3 256l210 94.1c2.8 1.2 5.7 1.9 8.8 1.9s6-.6 8.8-1.9l210-94.1-64.5-28.9 39.1-17.5 45.9 20.6c10.2 4.6 16.8 14.7 16.8 25.9s-6.6 21.3-16.8 25.9L309.8 379.3c-6.9 3.1-14.3 4.7-21.8 4.7s-15-1.6-21.8-4.7L48.8 281.9C38.6 277.3 32 267.2 32 256s6.6-21.3 16.8-25.9l45.9-20.6z"
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
