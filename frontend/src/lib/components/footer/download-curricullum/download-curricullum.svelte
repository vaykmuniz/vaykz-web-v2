<script>
	import { t } from "$lib/i18n/translations";
	import curriculumHref from "./Gabriel R A S Muniz - 2026.pdf?url";
	import downloadIconHref from "./download.svg?url";
</script>

<a
	aria-label={$t("a11y.download_curriculum")}
	href={curriculumHref}
	download="Gabriel R A S Muniz - 2026.pdf"
	class="inline-flex h-[35px] w-[35px] items-center justify-center opacity-50 transition-all duration-500 hover:opacity-100"
>
	<img
        alt='download-icon'
		class="h-8 w-8 bg-current rounded-md"
        src={downloadIconHref}
	/>
</a>
