<script>
	import { base } from '$app/paths';
</script>

<div class="h-4 pt-7 px-10 w-screen flex justify-between items-center absolute text-white">
	<div class="header-title"><a href="/">G.</a></div>
	<div class="header-links hidden md:flex justify-between items-center gap-7">
		<div class="about"><a href="{base}/about">About</a></div>
		<div class="contact"><a href="{base}/contact">Contact</a></div>
	</div>
	<div class="menu md:hidden">menu</div>
</div>
