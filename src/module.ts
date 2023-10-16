import { defineNuxtModule, addPlugin, createResolver, addComponent, addTypeTemplate } from "@nuxt/kit"

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
	setup(options, nuxt) {
		const { resolve } = createResolver(import.meta.url)

		addPlugin(resolve("./runtime/plugins/ripple/ripple.ts"))
		nuxt.options.css.push(resolve("./runtime/plugins/ripple/ripple.css"))

		addComponent({
			name: "t-button",
			filePath: resolve("./runtime/components/t-button.vue"),
		})
		addComponent({
			name: "t-loader",
			filePath: resolve("./runtime/components/t-loader.vue"),
		})
		// addTypeTemplate({
		// 	filename: 'types/themeui.d.ts',
		// 	getContents: () => [
		// 		`declare module 'themeui' {
		// 			const THEME_DEFAULTS: typeof import('${resolve("./runtime/constants/defaults.ts")}').THEME_DEFAULTS,
		// 			const THEME_IMPORTANCES: typeof import('${resolve("./runtime/constants/defaults.ts")}').THEME_IMPORTANCES,	
		// 		}`
		// 	].join("\n")
		// })
		// nuxt.hook("prepare:types", (options) => {
		// 	options.references.push({ path: resolve(nuxt.options.buildDir, "types/themeui.d.ts")})
		// })
	}
})
