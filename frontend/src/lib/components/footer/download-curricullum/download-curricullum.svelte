<script lang="ts">
 import { t } from '$lib/i18n/translations';
 import curriculumHref from './Gabriel R A S Muniz - 2026.pdf?url';
</script>

<a aria-label={$t('a11y.download_curriculum')} href={curriculumHref} download="Gabriel R A S Muniz - 2026.pdf" class="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent lg:min-h-0">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
  <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
 </svg>
 <span>{$t('footer.resume')} <span aria-hidden="true">↓</span></span>
</a>
