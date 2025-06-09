<!-- <script lang='ts'>
    import '../app.css';
    // Supports weights 100-900
    import '@fontsource-variable/inter';
    import { ModeWatcher } from "mode-watcher";
    let {children} = $props();
</script> -->

<!-- NOTE: Rendering the children is equivalence to SLOT -->
<!-- {@render children()} 

<ModeWatcher/> -->

<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import { ModeWatcher } from 'mode-watcher';
</script>

<slot />
<ModeWatcher />




