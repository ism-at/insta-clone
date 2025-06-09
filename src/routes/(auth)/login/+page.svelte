<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
	import { loginSchema } from "$lib/validation/index.js";
	import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
  import * as Form from '$lib/components/ui/form';
	import { Loader } from "lucide-svelte";

  let { data } = $props();
	const form = superForm(data.form, {
		validators: zodClient(loginSchema)
	});

	const { form: formData, enhance, delayed, errors } = form;
</script>

<Card.Root class="w-full max-w-sm">
  <Card.Header>
    <Card.Title class="text-2xl">Login</Card.Title>
    <Card.Description>Enter your email below to login to your account.</Card.Description>
  </Card.Header>
  <form method="POST" use:enhance>
    <Card.Content class="grid gap-4">

        <div class="grid gap-2">  
          <Form.Field {form} name="email">
            <Form.Control let:attrs>
                <Input {...attrs} placeholder="email" bind:value={$formData.email} />
            </Form.Control>
            <Form.FieldErrors />
          </Form.Field>
        </div>

        <div class="grid gap-2">
          <Form.Field {form} name="password">
            <Form.Control let:attrs>
                <Input {...attrs} placeholder="password" type='password' bind:value={$formData.password} />
            </Form.Control>
            <Form.FieldErrors />
          </Form.Field>
        </div>

        <div class="mt-2 text-center text-sm">
          Don't have an account?
          <a href="/register" class="underline"> Register </a>
        </div>
    </Card.Content>
      <Card.Footer>
        <Button type='submit' class="w-full bg-blue-500 hover:bg-blue-600">
          {#if $delayed}
					  <Loader class="size-4 animate-spin" />
          {:else}
            Sign in
          {/if}
        </Button>
      </Card.Footer>
  </form>
</Card.Root>
