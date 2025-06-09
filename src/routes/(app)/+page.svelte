<script>
	import PostCard from "$lib/components/PostCard.svelte";
	import Stories from "$lib/components/Stories.svelte";
    import { CircleUser } from "@lucide/svelte";
</script>

<div class="flex gap-5">

    <div class="flex-1 flex-shrink">
        <div class="mx-auto w-full max-w-[630px]">
            <!-- STORIES -->
            <Stories/>

            <div class="m-5 space-y-5 px-10 md:pxx-20">
                <!-- POST CARDS -->
                <PostCard/>
            </div>
        </div>
    </div>

    <div class="m-16 hidden w-[320px] px-3 text-sm xl:inline-block">
        <div class="flex items-center gap-3">
            <CircleUser class="size-11" />
            <div>
                <p class="font-medium">Ismail Al Agele</p>
                <p class="text-muted-foreground">alagele.ismail@gmail.com</p>
            </div>
        </div>

        <div class="mb-3 mt-8 flex items-center justify-between">
            <p class="capitalize text-muted-foreground">Suggestions</p>
            <p class="text-xs font-medium">See all</p>
        </div>

        <div>
            {#each {length:5} as _}
                <div class="flex items-center gap-3">
                    <CircleUser class="size-11"/>
                    <div>
                        <p class="font-medium">Ismail Al Agele</p>
                        <p class="text-muted-foreground">alagele.ismail@gmail.com</p>
                    </div>
                    <a href="/" class="ml-auto text-xs text-blue-500">Follow</a>
                </div>
            {/each}
        </div>
    </div>


</div>