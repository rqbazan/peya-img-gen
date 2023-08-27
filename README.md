# peya-img-gen 🖼

- **Framework**: [Next.js](https://nextjs.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

# Usage

<details>
 <summary><code>GET</code> <code><b>/repository-cover</b></code> <code>(get image for repositories cover)</code></summary>

##### Query Parameters

> | name       | type     | data type |
> | ---------- | -------- | --------- |
> | `title`    | required | string    |
> | `subtitle` | required | string    |

##### Responses

> | http code | content-type | response        |
> | --------- | ------------ | --------------- |
> | `200`     | `image/png`  | generated image |

##### Example URL

- https://peya-img-gen.vercel.app/repository-cover?title=React%20OCTA&subtitle=Q-Commerce%20Tribe

</details>

<details>
 <summary><code>GET</code> <code><b>/storybook-logo</b></code> <code>(get logo for storybook apps)</code></summary>

##### Query Parameters

> | name        | type     | data type |
> | ----------- | -------- | --------- |
> | `undertext` | required | string    |
> | `fontSize`  | optional | number    |
> | `width`     | optional | number    |
> | `height`    | optional | number    |

##### Responses

> | http code | content-type | response        |
> | --------- | ------------ | --------------- |
> | `200`     | `image/png`  | generated image |

##### Example URL

- https://peya-img-gen.vercel.app/storybook-logo?undertext=groceries-react-app-layout

</details>
