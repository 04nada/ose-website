<script lang='ts'>
    import Nav from "$lib/components/Nav.svelte";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    const forms = {
        oseclearance: {
            title: 'Softcopy of OSE Clearance Application',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLScFg0BzPqylk_lMs39rOCuZfoUJrf1e671Bbew7i1tA6eqOGA/viewform?embedded=true',
            publicLink: 'https://bit.ly/oseclearance'
        },
        osedocumentrequest: {
            title: 'Hardcopy Request of Other Documents',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLSfjaaLJXyCxvJsoPg7xMFh8MtqhMGLg_NYiFCmtdR_YFhMPbg/viewform?embedded=true',
            publicLink: 'https://bit.ly/osedocumentrequest'
        }
    };

    let selectedForm = $state('clearanceApplicationForm');
</script>

<Nav />

<!-- <h1 class="text-3xl merriweather-bold mt-5 ml-30 text-white"> Forms </h1> -->

<div class="hidden sm:block">
    <div class="flex justify-center mt-8">
    <img
        src={
        selectedForm === "clearanceApplicationForm"
            ? "/Forms/ose-clearance.png"
            : "/Forms/ose-HardCopy.png"
        }
        alt="Form Preview"
        class="mt-4 flex flex-row justify-center"
    />
    </div>

    <div class="p-5 bg-bggreen">
        <div class="flex w-[720px] flex-col gap-6 mx-auto mt-5 font-display">
            <Tabs.Root bind:value={selectedForm}>
                <Tabs.List class="mx-auto">
                    <Tabs.Trigger value="clearanceApplicationForm">Softcopy of OSE Clearance Application</Tabs.Trigger>
                    <Tabs.Trigger value="hardCopyOfDocuments">Hardcopy Request of Other Documents</Tabs.Trigger>
                </Tabs.List>
                
                <Tabs.Content value="clearanceApplicationForm">
                    <Card.Root class="flex w-auto">
                        <Card.Header>
                            <Card.Title>Softcopy of OSE Clearance Application</Card.Title>
                        </Card.Header>

                        <Card.Content class="grid gap-6">
                            <div>
                                <iframe
                                src={forms['oseclearance'].embedSrc}
                                width=640 height=500 
                                frameborder="0" marginheight="0" marginwidth="0"
                                title={forms['oseclearance'].title} 
                            >
                                Loading...
                            </iframe>
                            </div>
                        </Card.Content>

                        <!-- <Card.Footer>
                            Optional Footer of form
                        </Card.Footer> -->
                    </Card.Root>
                </Tabs.Content>
                
                <Tabs.Content value="hardCopyOfDocuments">
                    <Card.Root>
                        <Card.Header>
                            <Card.Title>Hardcopy Request of Other Documents</Card.Title>

                            <!--<Card.Description>
                                Optional description of Form
                            </Card.Description>-->
                        </Card.Header>

                        <Card.Content class="grid gap-6">
                            <div>
                                <iframe
                                    src={forms['osedocumentrequest'].embedSrc}
                                    width=640 height=500
                                    frameborder="0" marginheight="0" marginwidth="0"
                                    title={forms['osedocumentrequest'].title}
                                >
                                    Loading...
                                </iframe>
                            </div>
                        </Card.Content>

                        <!-- <Card.Footer>
                            Optional Footer of form
                        </Card.Footer> -->
                    </Card.Root>
                </Tabs.Content>
            </Tabs.Root>
        </div>
    </div>
</div>

<div class="block flex sm:hidden lex-row center justify-evenly items-center">
    <div class="flex flex-col width-restriction space-y-10">
        <h1 class = "header merriweather-bold">
            Forms
        </h1>

        {#each Object.entries(forms) as [id, form]}
            <button class="styled-buttons poppins-light m-4" 
                onclick={() => window.open(form.embedSrc.replace('?embedded=true', ''), '_blank')}
            >
                {form.title}
            </button>
        {/each}
    </div>
</div>