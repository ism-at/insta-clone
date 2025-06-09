<script lang='ts'>
    let {children} = $props();
</script>

<!-- AUTH Layout -->
<div class="grid h-screen w-screen place-items-center">
	{@render children()} 
</div>
