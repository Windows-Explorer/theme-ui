import { defineNuxtPlugin } from "nuxt/app"

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("ripple", {
		mounted: async (element: HTMLElement, binding) => {
			element.addEventListener("click", async (event) => {
				const timeOut = Number(binding.value) || 2000
				const diameter = Math.max(element.clientWidth, element.clientHeight)
				const radius = diameter / 2
				const leftOffset = event.pageX - (element.getBoundingClientRect().left + scrollX) - radius
				const topOffset = event.pageY - (element.getBoundingClientRect().top + scrollY) - radius

				const rippleNode = document.createElement("div")
				rippleNode.style.width = rippleNode.style.height = `${diameter}px`
				rippleNode.style.left = `${leftOffset}px`
				rippleNode.style.top = `${topOffset}px`
				rippleNode.style.animationDuration = `${timeOut}ms`
				rippleNode.className = "ripple"

				element.style.position = "relative"
				element.append(rippleNode)

				setTimeout(async () => {
					rippleNode.remove()
				}, timeOut)
			})
		},
	})
})
