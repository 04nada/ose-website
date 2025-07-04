<script lang='ts'>
    import Nav from "$lib/components/Nav.svelte";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    const forms = {
        oseclearance: {
            title: 'Online Clearance Application Form',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLScFg0BzPqylk_lMs39rOCuZfoUJrf1e671Bbew7i1tA6eqOGA/viewform?embedded=true',
            publicLink: 'https://bit.ly/oseclearance'
        },
        osedocumentrequest: {
            title: 'Request for Hard Copy of Documents',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLSfjaaLJXyCxvJsoPg7xMFh8MtqhMGLg_NYiFCmtdR_YFhMPbg/viewform?embedded=true',
            publicLink: 'https://bit.ly/osedocumentrequest'
        }
    };

    let selectedForm = $state('oseclearance');
</script>

<Nav />
 
<div class="flex w-full max-w-sm flex-col gap-6">
    <Tabs.Root value="account">
        <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
        <Card.Root>
            <Card.Header>
                <Card.Title>Account</Card.Title>
                <Card.Description>
                Make changes to your account here. Click save when you&apos;re done.
                </Card.Description>
            </Card.Header>
            <Card.Content class="grid gap-6">
            <div class="grid gap-3">
                <Label for="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" value="Pedro Duarte" />
            </div>
            <div class="grid gap-3">
                <Label for="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" value="@peduarte" />
            </div>
            </Card.Content>
            <Card.Footer>
                <Button>Save changes</Button>
            </Card.Footer>
        </Card.Root>
        </Tabs.Content>
        <Tabs.Content value="password">
            <Card.Root>
                <Card.Header>
                    <Card.Title>Password</Card.Title>
                    <Card.Description>
                    Change your password here. After saving, you&apos;ll be logged out.
                    </Card.Description>
                </Card.Header>
                <Card.Content class="grid gap-6">
                <div class="grid gap-3">
                    <Label for="tabs-demo-current">Current password</Label>
                    <Input id="tabs-demo-current" type="password" />
                </div>
                <div class="grid gap-3">
                    <Label for="tabs-demo-new">New password</Label>
                    <Input id="tabs-demo-new" type="password" />
                </div>
                </Card.Content>
                <Card.Footer>
                    <Button>Save password</Button>
                </Card.Footer>
            </Card.Root>
        </Tabs.Content>
    </Tabs.Root>
</div>

<div class="flex flex-row center justify-evenly items-center">
    <div class="flex flex-col width-restriction space-y-10">
        <h1 class = "header merriweather-bold">
            Forms
        </h1>
            {#each Object.entries(forms) as [id, form]}
                    <button class="styled-buttons poppins-light" aria-current={selectedForm === id}
                        onclick={() => selectedForm = id}
                    >
                        {form.title}
                    </button>
            {/each}
    </div>
    <div>
        {#if selectedForm == 'oseclearance'}
            <iframe
                src={forms[selectedForm].embedSrc}
                width=640 height=500
                frameborder="0" marginheight="0" marginwidth="0"
                title={forms[selectedForm].title}
            >
                Loading...
            </iframe>
        {:else if selectedForm == 'osedocumentrequest'}
            <iframe
                src={forms[selectedForm].embedSrc}
                width=640 height=500
                frameborder="0" marginheight="0" marginwidth="0"
                title={forms[selectedForm].title}
            >
                Loading...
            </iframe>
        {:else}
            <p> Invalid form selected. </p>
        {/if}
    </div>
</div>