<script>
    import Github from '../footer/github.svelte'
    import Linkedin from './linkedin.svelte'
	import Email from './email.svelte'
</script>

<footer class="flex w-full px-4 md:px-10 py-2 items-center gap-2 justify-between sticky top-0 z-10 text-sky-200 text-lg">
  <div class="flex gap-2">
		<a
			aria-label="github"
			href="https://github.com/vaykmuniz"
			target="_blank"
			class="opacity-50 transition-all duration-500 hover:opacity-100"
		>
			<Github/>
		</a>
		
		<a
			aria-label="linkedin"
			href="https://www.linkedin.com/in/gabrielmuniz-vayk/"
			target="_blank"
			class="opacity-50 transition-all duration-500 hover:opacity-100"
		>
			<Linkedin />
		</a>

		<a
			aria-label="my-email"
			href="mailto:gabrielrasmuniz@gmail.com?subject=Work"
			target="_blank"
			class="opacity-50 transition-all duration-500 hover:opacity-100"
		>
			<Email />
		</a>

	</div>
</footer>


<style>
@keyframes glitch {
  50% {
	transform: skew(0deg)
  }
  90% {
    transform: skew(180deg);
  }
}

.glitch {
  animation: glitch 5000ms var(--ease-elastic-in-1, ease-in-out) infinite;
}
</style>