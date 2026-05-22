<script>
	import { t } from "$lib/i18n/translations";
	import DownloadCurricullum from "./download-curricullum/download-curricullum.svelte";
	import Email from "./email.svelte";
	import Github from "./github.svelte";
	import Linkedin from "./linkedin.svelte";

	$: emailHref = `mailto:gabrielrasmuniz@gmail.com?subject=${encodeURIComponent($t("contact.work_subject"))}`;
</script>

<footer class="flex w-full items-center justify-between gap-2 bg-black px-4 py-2 text-lg text-sky-200 md:px-10">
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
			aria-label={$t("a11y.my_email")}
			href={emailHref}
			target="_blank"
			class="opacity-50 transition-all duration-500 hover:opacity-100"
		>
			<Email />
		</a>

		<DownloadCurricullum />
	</div>
</footer>
