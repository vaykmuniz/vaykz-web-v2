<script>
  import { t, locale, locales } from "$lib/i18n/translations";
</script>


<div class="w-full bg-slate-700 p-5">
	<section class="flex flex-col gap-2">
		<h2 class="font-serif text-2xl">{$t("home.engineer.title")}</h2>
		<p class="mt-2 italic">
			{$t("home.engineer.paragraph_1")} <a
				href="https://www.utfpr.edu.br/"
				target="_blank"
				rel="noopener noreferrer"
			>
				{$t("home.engineer.paragraph_1_link")}</a
			>.
		</p>

		<div class="ml-5 mt-5 flex flex-col gap-3">
			<h4 class="text-xl">{$t("home.engineer.bachelors.title")}</h4>
			<p class="italic">
				{$t("home.engineer.paragraph_2")}
			</p>

			<h4 class="text-xl">{$t("home.engineer.internship.title")}</h4>
			<p class="italic">
				{$t("home.engineer.internship.description")}
			</p>
		</div>
	</section>
</div>
