<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { registerSchema } from '$lib/validation/index.js';
	import { Loader } from 'lucide-svelte';
  
	let { data } = $props();
	const form = superForm(data.form, {
		validators: zodClient(registerSchema)
	});

	const { form: formData, enhance, delayed, errors } = form;
</script>

<Card.Root class="mx-auto max-w-sm">

	<Card.Header>
    <Card.Title class="text-xl">Sign  Up</Card.Title>
    <Card.Description>Enter your information to create an account</Card.Description>
  </Card.Header>

	<Card.Content>

		<form method="POST" use:enhance class="grid gap-4">
			<div class="grid grid-cols-2 gap-4">

				<Form.Field {form} name="firstName">
					<Form.Control let:attrs>
						<Input {...attrs} placeholder="First Name" bind:value={$formData.firstName} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

				<Form.Field {form} name="lastName">
					<Form.Control let:attrs>
						<Input {...attrs} placeholder="Last Name" bind:value={$formData.lastName} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>

			</div>

			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Input {...attrs} placeholder="Email" bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Input {...attrs} type="password" placeholder="Password" bind:value={$formData.password}/>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Button type="submit" class="w-full bg-blue-500 hover:bg-blue-600">
				{#if $delayed}
					<Loader class="size-4 animate-spin" />
				{:else}
					Create an account
				{/if}
			</Button>

		</form>

		<div class="mt-2 text-center text-sm">
			Already have an account?
			<a href="/login" class="underline"> Sign in </a>
		</div>

	</Card.Content>

</Card.Root>
