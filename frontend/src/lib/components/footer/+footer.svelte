<script lang="ts">
 import { t } from '$lib/i18n/translations';
 import DownloadCurricullum from './download-curricullum/download-curricullum.svelte';
 import Email from './email.svelte';
 import Github from './github.svelte';
 import Linkedin from './linkedin.svelte';
 const emailHref = $derived(`mailto:gabrielrasmuniz@gmail.com?subject=${encodeURIComponent($t('contact.work_subject'))}`);
 const linkClass = 'inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent lg:min-h-0';
</script>

<footer class="w-full bg-canvas py-8 font-inter text-xs leading-[1.55] text-footer-muted">
 <div class="site-container flex flex-col items-center justify-between gap-3 lg:flex-row lg:gap-6">
  <p>Gabriel R. A. S. Muniz</p>
  <nav aria-label={$t('footer.links')} class="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-footer-link">
   <a href="https://github.com/vaykmuniz" target="_blank" rel="noopener noreferrer" class={linkClass}><Github size={16} /><span>GitHub <span aria-hidden="true">↗</span></span></a>
   <a href="https://www.linkedin.com/in/gabrielmuniz-vayk/" target="_blank" rel="noopener noreferrer" class={linkClass}><Linkedin size={16} /><span>LinkedIn <span aria-hidden="true">↗</span></span></a>
   <a href={emailHref} class={linkClass}><Email size={16} /><span>{$t('footer.email')}</span></a>
   <DownloadCurricullum />
  </nav>
  <p class="text-[11px]">{$t('footer.signature')}</p>
 </div>
</footer>
