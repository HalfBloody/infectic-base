import { resolve } from 'path'

export default async function (options) {
    this.addPlugin(resolve(__dirname, 'plugins/$get.js'))
    this.addPlugin(resolve(__dirname, 'plugins/axios.js'))
    this.addPlugin(resolve(__dirname, 'plugins/moment.js'))
    this.addPlugin(resolve(__dirname, 'plugins/notifications.js'))
    this.addPlugin(resolve(__dirname, 'plugins/nuxt-client-init.js'))
    this.addPlugin(resolve(__dirname, 'plugins/numeric.js'))

    console.log(this.options.axios);

    // https://bootstrap-vue.js.org
    this.requireModule([
        'bootstrap-vue/nuxt',
        this.options.bootstrapVue || {
            bootstrapCSS: false,
            bootstrapVueCSS: false,
        }
    ])

    // https://axios.nuxtjs.org
    this.requireModule([
        '@nuxtjs/axios',
        this.options.axios || {
            baseURL: process.env.API_URL || 'http://localhost:3000/api/v1',
            credentials: true,
        }
    ])

    this.options.css.push(resolve(__dirname, 'assets/global.scss'))
}