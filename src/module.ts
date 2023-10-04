import { defineNuxtModule, addPlugin, createResolver, addComponent } from "@nuxt/kit"

export interface ModuleOptions {}

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
	},
})
