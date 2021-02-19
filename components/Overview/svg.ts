type Icon = {
  class: string;
};
type Svg = {
  width: string;
  height: string;
  viewBox: string;
  path: Path[];
};

type Path = {
  fill: string;
  d: string;
};

type Item = {
  id: string;
  image: imgType;
  title: string;
  description: string;
};

type imgType = (Icon | Svg)[];

export function isIcon(image: Icon | Svg): image is Icon {
  return (image as Icon).class !== undefined;
}
export function isSvg(image: Icon | Svg): image is Svg {
  return (image as Svg).path !== undefined;
}

export const items: Item[] = [
  {
    id: "1",
    image: [
      {
        class: "fa-js-square",
      },
    ],
    title: "JavaScript",
    description: "Esta es la descripcion de js vanilla",
  },
  {
    id: "2",
    image: [
      {
        class: "fa-angular",
      },
    ],
    title: "Angular",
    description: "Esta es la descripcion de Angular",
  },
  {
    id: "3",
    image: [
      {
        class: "fa-react",
      },
    ],
    title: "React",
    description: "Esta es la descripcion de React",
  },
  {
    id: "4",
    image: [
      {
        class: "fa-node-js",
      },
    ],
    title: "Node.js",
    description: "Esta es la descripcion de Node.js",
  },
  {
    id: "5",
    image: [
      {
        class: "fa-java",
      },
    ],
    title: "Java",
    description: "Esta es la descripcion de Java",
  },
  {
    id: "6",
    image: [
      {
        width: "28",
        height: "32",
        viewBox: "0 0 28 32",
        path: [
          {
            fill: "#5c8dbc",
            d:
              "M28.395 9.413c-0-0.537-0.115-1.011-0.347-1.418-0.228-0.4-0.569-0.736-1.027-1.001-3.781-2.18-7.565-4.353-11.344-6.535-1.019-0.588-2.007-0.567-3.018 0.030-1.505 0.887-9.039 5.204-11.284 6.504-0.925 0.535-1.374 1.354-1.375 2.419-0.001 4.384 0 8.768-0.001 13.152 0 0.525 0.11 0.99 0.332 1.391 0.228 0.412 0.574 0.757 1.043 1.028 2.245 1.3 9.78 5.616 11.284 6.504 1.012 0.597 2 0.618 3.019 0.030 3.779-2.182 7.564-4.355 11.345-6.535 0.469-0.271 0.815-0.616 1.043-1.028 0.222-0.401 0.332-0.866 0.332-1.391 0 0 0-8.765-0.001-13.149z",
          },
          {
            fill: "#1a4674",
            d:
              "M14.241 15.945l-13.91 8.009c0.228 0.412 0.574 0.757 1.043 1.028 2.245 1.3 9.78 5.616 11.284 6.504 1.012 0.597 2 0.618 3.019 0.030 3.779-2.182 7.564-4.355 11.345-6.535 0.469-0.271 0.815-0.616 1.043-1.028l-13.824-8.008z",
          },
          {
            fill: "#1a4674",
            d:
              "M10.121 18.318c0.809 1.413 2.331 2.366 4.077 2.366 1.756 0 3.287-0.965 4.092-2.393l-4.049-2.345-4.12 2.372z",
          },
          {
            fill: "#1b598e",
            d:
              "M28.395 9.413c-0-0.537-0.115-1.011-0.347-1.418l-13.807 7.95 13.824 8.008c0.222-0.401 0.332-0.866 0.332-1.391 0 0 0-8.765-0.001-13.149z",
          },
          {
            fill: "#fff",
            d:
              "M27.635 16.518h-1.080v1.080h-1.080v-1.080h-1.080v-1.080h1.080v-1.080h1.080v1.080h1.080v1.080zM23.693 16.518h-1.080v1.080h-1.080v-1.080h-1.080v-1.080h1.080v-1.080h1.080v1.080h1.080v1.080z",
          },
          {
            fill: "#fff",
            d:
              "M18.29 18.291c-0.805 1.428-2.336 2.393-4.092 2.393-1.746 0-3.267-0.953-4.077-2.366-0.389-0.668-0.619-1.469-0.619-2.325 0-0.002 0-0.003 0-0.005v0c0-2.593 2.103-4.696 4.696-4.696 1.734 0 3.248 0.941 4.061 2.34l4.105-2.364c-1.631-2.816-4.677-4.711-8.166-4.711-5.208 0-9.431 4.222-9.431 9.43 0 1.709 0.455 3.311 1.249 4.693 1.627 2.831 4.682 4.737 8.182 4.737 3.506 0 6.565-1.914 8.19-4.753l-4.098-2.375z",
          },
        ],
      },
    ],
    title: "C++",
    description: "Esta es la descripcion de C++",
  },
  {
    id: "7",
    image: [
      {
        class: "fa-html5 mr-2",
      },
      {
        class: "fa-css3-alt",
      },
    ],
    title: "HTML & CSS",
    description: "Esta es la descripcion de HTML y CSS",
  },
  {
    id: "8",
    image: [
      {
        width: "28",
        height: "32",
        viewBox: "0 0 28 32",
        path: [
          {
            fill: "#5d87a1",
            d:
              "M8.785 6.865c-0.003 0-0.006 0-0.010 0-0.276 0-0.543 0.037-0.797 0.105l0.021-0.005v0.035h0.038c0.196 0.294 0.397 0.55 0.616 0.79l-0.004-0.005c0.154 0.306 0.288 0.611 0.441 0.917 0.019-0.019 0.038-0.039 0.038-0.039 0.248-0.198 0.406-0.501 0.406-0.841 0-0.041-0.002-0.081-0.007-0.121l0 0.005c-0.073-0.11-0.149-0.241-0.219-0.376l-0.011-0.024c-0.115-0.191-0.364-0.287-0.517-0.44z",
          },
          {
            fill: "#00758f",
            d:
              "M27.78 23.553c-0.186-0.014-0.402-0.022-0.62-0.022-1.111 0-2.173 0.205-3.153 0.578l0.061-0.020c-0.287 0.115-0.745 0.115-0.785 0.478 0.154 0.153 0.172 0.4 0.307 0.613 0.271 0.454 0.602 0.839 0.988 1.161l0.007 0.006c0.4 0.306 0.8 0.611 1.225 0.879 0.745 0.461 1.588 0.728 2.314 1.187 0.422 0.268 0.842 0.612 1.264 0.9 0.21 0.153 0.343 0.4 0.611 0.5v-0.058c-0.089-0.237-0.187-0.439-0.301-0.631l0.010 0.018c-0.191-0.19-0.383-0.363-0.575-0.554-0.567-0.745-1.224-1.383-1.963-1.913l-0.027-0.019c-0.613-0.422-1.953-1-2.2-1.7l-0.039-0.039c0.501-0.072 0.946-0.18 1.375-0.324l-0.054 0.016c0.65-0.172 1.243-0.133 1.912-0.3 0.307-0.077 0.862-0.268 0.862-0.268v-0.3c-0.342-0.34-0.587-0.795-0.947-1.116-0.927-0.813-1.946-1.579-3.021-2.267l-0.101-0.061c-0.587-0.379-1.344-0.623-1.969-0.946-0.226-0.114-0.6-0.17-0.737-0.36-0.29-0.42-0.55-0.899-0.758-1.406l-0.018-0.051c-0.548-1.040-1.079-2.193-1.551-3.293-0.33-0.869-0.655-1.58-1.018-2.267l0.053 0.11c-1.78-2.991-4.261-5.395-7.225-7.034l-0.098-0.050c-0.7-0.348-1.513-0.618-2.366-0.768l-0.055-0.008c-0.474-0.020-0.946-0.057-1.419-0.075-0.326-0.215-0.61-0.434-0.877-0.671l0.008 0.007c-1.082-0.685-3.862-2.157-4.658-0.208-0.51 1.231 0.758 2.441 1.193 3.066 0.348 0.416 0.668 0.88 0.942 1.374l0.023 0.045c0.133 0.322 0.171 0.663 0.3 1 0.329 1.022 0.664 1.863 1.045 2.676l-0.058-0.138c0.227 0.452 0.459 0.836 0.719 1.199l-0.019-0.027c0.153 0.209 0.417 0.3 0.474 0.645-0.196 0.411-0.348 0.887-0.432 1.387l-0.004 0.032c-0.247 0.752-0.389 1.618-0.389 2.516 0 1.404 0.347 2.726 0.96 3.887l-0.022-0.045c0.3 0.473 1.022 1.514 1.987 1.116 0.851-0.34 0.662-1.419 0.908-2.364 0.056-0.229 0.019-0.379 0.132-0.53v0.184s0.483 1.061 0.723 1.6c0.669 1.004 1.464 1.86 2.376 2.572l0.024 0.018c0.364 0.319 0.66 0.708 0.867 1.146l0.009 0.021v0.343h0.427c-0.019-0.324-0.182-0.606-0.424-0.786l-0.003-0.002c-0.34-0.35-0.655-0.729-0.939-1.131l-0.020-0.029c-0.72-1.011-1.406-2.164-1.999-3.372l-0.065-0.147c-0.3-0.6-0.553-1.258-0.793-1.857-0.11-0.231-0.11-0.58-0.295-0.7-0.326 0.384-0.62 0.814-0.865 1.274l-0.019 0.039c-0.283 0.864-0.468 1.862-0.516 2.896l-0.001 0.025c-0.073 0.020-0.037 0-0.073 0.038-0.589-0.155-0.792-0.792-1.014-1.332-0.302-0.85-0.477-1.83-0.477-2.851 0-0.823 0.114-1.62 0.326-2.375l-0.015 0.062c0.128-0.405 0.683-1.681 0.461-2.068-0.111-0.369-0.48-0.58-0.682-0.871-0.237-0.354-0.459-0.761-0.644-1.187l-0.019-0.050c-0.439-1.076-0.661-2.276-1.139-3.36-0.292-0.57-0.598-1.058-0.94-1.516l0.019 0.027c-0.365-0.441-0.701-0.935-0.99-1.458l-0.025-0.049c-0.092-0.213-0.221-0.561-0.074-0.793 0.021-0.132 0.126-0.235 0.257-0.252l0.002-0c0.238-0.212 0.921 0.058 1.16 0.174 0.698 0.278 1.298 0.603 1.855 0.987l-0.031-0.020c0.258 0.194 0.866 0.685 0.866 0.685h0.18c0.612 0.133 1.3 0.037 1.876 0.21 1.052 0.355 1.963 0.802 2.802 1.349l-0.047-0.029c2.531 1.631 4.557 3.841 5.924 6.452l0.045 0.093c0.23 0.439 0.327 0.842 0.537 1.3 0.4 0.94 0.9 1.9 1.3 2.814 0.387 0.98 0.844 1.825 1.387 2.605l-0.027-0.041c0.286 0.4 1.435 0.612 1.952 0.822 0.543 0.188 0.979 0.369 1.403 0.57l-0.083-0.035c0.651 0.4 1.3 0.861 1.913 1.3 0.305 0.23 1.262 0.708 1.32 1.091z",
          },
        ],
      },
    ],
    title: "MySQL",
    description: "Esta es la descripcion de MySQL",
  },
];
