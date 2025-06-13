<script>
	import { ActivitySquare, Bookmark, CircleUser, Instagram, LogOut, Menu, MonitorDot, Moon, Sun } from '@lucide/svelte';
    import Logo from "./icons/Logo.svelte";
	import Home from './icons/Home.svelte';
	import Explore from './icons/Explore.svelte';
	import Search from './icons/Search.svelte';
	import Reels from './icons/Reels.svelte';
	import Messenger from './icons/Messenger.svelte';
	import Notifications from './icons/Notifications.svelte';
	import NewPost from './icons/NewPost.svelte';
	import { cn } from '$lib/utils';
	import * as Dialog from "$lib/components/ui/dialog";
	import * as Form from "$lib/components/ui/form";
	import Media from './icons/media.svelte';
	import Button from './ui/button/button.svelte';
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu"
	import Gear from './icons/Gear.svelte';
	import { toggleMode, mode } from "mode-watcher";	
	import { LogIn } from 'lucide-svelte';
	import { UserPlus } from 'lucide-svelte';

    const sidebarItems = [
		{
			text:'Home',
			icon:Home,
			href:'/'
        },
		{
			text:'Login',
			icon:LogIn,
			href:'/login'
        },
		{
			text:'Register',
			icon:UserPlus,
			href:'/register'
        },
		{
			text:'Search',
			icon:Search,
        },
		{
			text:'Explore',
			icon:Explore,
        },
		{
			text:'Reels',
			icon:Reels,
        },
		{
			text:'Messages',
			icon:Messenger,
        },
		{
			text:'Notification',
			icon:Notifications,
        },
		{
			text:'Create',
			icon:NewPost,
        },
		{
			text:'Reels',
			icon:Reels,
        },
		{
			text:'Profile',
			icon:CircleUser,
			href:'/'
        }
	];

	// State for Dialog
	let openDialog = $state(false);


</script>

<aside class="fixed flex h-full min-h-screen w-fit flex-col border-r bg-background p-3 md:w-[244px]">
	<div class="my-8 pl-3">
        <!-- Logo-Icon: visible only on small screens -->
			<div class="hidden w-fit md:inline-block">
				<Logo/>
			</div>
        <!-- Instagram: visible only on large screens -->
		<Instagram class="md:hidden"/>
	</div>

	<!-- Iterate and dynamic rendering sidebarItems -->
    <div class="flex flex-1 flex-col gap-2">
		{#each sidebarItems as {text, icon, href}}
			<svelte:element this={href ? 'a' : text === 'Create' ? 'button' : 'div'} {href} role="none" 
				class="flex cursor-pointer items-center gap-1 rounded-md p-3 text-sm capitalize hover:bg-muted"

				onclick={() => {
					if(text === 'Create'){
						openDialog = true;
					}
				}}
			>

			<svelte:component this={icon}/>
				<div class={cn('ml-4 hidden md:inline-block', {'font-bold': text === 'Home'})}>
					{text}
				</div>
			</svelte:element>

		{/each}
    </div>

	<!-- Dropdown for Dark Toggle https://www.shadcn-svelte.com/docs/dark-mode/svelte -->	
	 <DropdownMenu.Root>

	   <DropdownMenu.Trigger 
	   class="flex cursor-pointer items-center gap-1 rounded-md p-3 text-sm capitalize hover:bg-muted">
			<Menu/>
			<!-- Hide MORE on small Screen -->
			<div class="ml-4 hidden md:inline-block">
				MORE
			</div>
	   </DropdownMenu.Trigger>

			<DropdownMenu.Content class="w-[300px] rounded-xl p-3">
			<DropdownMenu.Group>
				<DropdownMenu.Item onclick={toggleMode} class="flex cursor-pointer items-center gap-2 p-3">
				{#if $mode === 'dark'}
					<Sun /> Light Mood
				{:else if $mode === 'light'}
					<Moon /> Dark Mood
				{/if}
				</DropdownMenu.Item>

				<DropdownMenu.Item asChild>
				<a href='/' class="flex cursor-pointer items-center gap-2 p-3">
					<Gear /> Settings
				</a>
				</DropdownMenu.Item>

				<DropdownMenu.Item asChild>
				<a href='/' class="flex cursor-pointer items-center gap-2 p-3">
					<ActivitySquare /> Activity
				</a>
				</DropdownMenu.Item>

				<DropdownMenu.Item asChild>
				<a href='/' class="flex cursor-pointer items-center gap-2 p-3">
					<Bookmark /> Save
				</a>
				</DropdownMenu.Item>

				<DropdownMenu.Item asChild class="p-0">
				<form method="POST" action="/logout" class="w-full flex items-center gap-2 p-3 cursor-pointer">
					<LogOut />
					<button type="submit" class="capitalize">Logout</button>
				</form>
				</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>


	</DropdownMenu.Root>

</aside>


<!-- Dialog -->
<Dialog.Root bind:open={openDialog}>
  <Dialog.Content class="max-w-[400px]">
	<Dialog.Header>
	  <Dialog.Title>Create a New Post</Dialog.Title>
	  	<form action="/?/createPost" enctype="multipart/form-data">

			<div class="grid h-fit place-items-center">
				<div class="absolute space-y-3 text-center">
					<div class="mx-auto w-fit">
						<Media/>
					</div>
					<p>Drag Photos & Videos</p>
					<Button size="sm" class='bg-blue-500'>Select From Your Device</Button>
				</div>
				<input type="file" accept="image/*" name="magePath" class="h-[350px] w-full file:hidden bg-transparent text-transparent border border-blue-200"/>
			</div>

			<!--BY ERROR -->
			  	<div class="flex justify-center mt-4">
			  		<Form.Button class="bg-blue-500">Submit</Form.Button>
				</div>
		</form>
	</Dialog.Header>
  </Dialog.Content>
</Dialog.Root>