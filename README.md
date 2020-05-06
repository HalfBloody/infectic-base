# infectic-base

This is a Nuxt.js module with shared functionality for Infectic Influencer & Advertiser websites.

You have to register this module in `nuxt-config.js`:

```js
export default {
  ...
  modules: [
    'infectic-base'
  ],
  ...
}
```

## Development

- Download `infectic-base`, `infectic-influencer`, `infectic-frontend` repos locally.
- Run `npm link` in `infectic-base`
- In `infectic-influencer` (or `infectic-frontend`) run `npm link infectic-base`

```bash
cd infectic-base
npm link
cd ../infectic-influencer
npm install
npm link infectic-base
```
