import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit"

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: "theme-ui",
		configKey: "themeui",
	},
	setup(options, nuxt) {
		const { resolve } = createResolver(import.meta.url)

		addPlugin(resolve("./runtime/plugins/ripple/ripple.ts"))
		nuxt.options.css.push(resolve("./runtime/plugins/ripple/ripple.css"))
	},
})
