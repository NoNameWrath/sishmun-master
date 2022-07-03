<script>
	import Navbar from '../Navbar.svelte';
	import Footer from '../Footer.svelte';
	import Formal from '../Formal.svelte';
</script>

<Navbar />
<div class="flex items-center justify-center">
	<img src="mun.svg" alt="" class="h-50 w-50" />
</div>
<div class="text-center">
	<br />
	<p class="text-5xl text-warning">Sishmun 2022</p>
	<p class="text-5xl text-warning">September 1st & 2nd</p>
</div>

<div class=" mt-10 text-warning flex items-center justify-center gap-5">
	<div class="flex gap-5">
		<div>
			<span class="countdown font-mono text-4xl">
				<span style="--value:15;" />
			</span>
			days
		</div>
		<div>
			<span class="countdown font-mono text-4xl">
				<span style="--value:10;" />
			</span>
			hours
		</div>
		<div>
			<span class="countdown font-mono text-4xl">
				<span style="--value:24;" />
			</span>
			min
		</div>
		<div>
			<span class="countdown font-mono text-4xl">
				<span style="--value:7;" />
			</span>
			sec
		</div>
	</div>
</div>
<div class=" mt-10 text-warning flex items-center justify-center gap-5">
	<button class="btn">Join us</button>
</div>

<Formal />
<Footer />
