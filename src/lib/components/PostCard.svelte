<script lang='ts'>
	import { Bookmark, CircleUser, Ellipsis, Heart, MessageCircle, Send } from "@lucide/svelte";
    import { Separator } from "$lib/components/ui/separator/index.js"
    
</script>

<div>
    <a href="/" class="mb-3 flex items-center gap-3">
        <CircleUser/>

        <div>
            <p class="text-sm font-medium">Ismail Al Agele</p>
            <p class="text-sm text-muted-foreground">alagele.ismail@gmail.com</p>
        </div>
        
        <Ellipsis/>
    </a>

    <img src="" alt="" class="h-[585px] w-full rounded bg-gray-100 object-contain"/>

    <div class="my-2 flex items-center gap-2">
        <Heart/>
        <MessageCircle/>
        <Send/>
        <Bookmark class="ml-auto"/>
    </div>

    <p class="mb-2 text-sm font-medium">100 likes</p>
    <p class="mb-2 text-sm font-medium">Ismail: <span class="font-light">This is for caption</span></p>

    <button class="mb-2 text-sm capitalize text-muted-foreground">View all comments</button>
    <input type="text" class="block border-none bg-transparent outline-none placeholder:text-sm" placeholder="Add a new comment" />

    <Separator/>
</div>