<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Card from "$lib/components/ui/card/index.js";

    const resources = {
        studentconduct2012: {
            title: '2012 Code of Student Conduct',
            embedSrc: 'https://drive.google.com/file/d/1jAakJ1bnbZ1f-CMwKdkGak-SwC4tpl0S/preview',
            publicLink: 'https://rb.gy/iaod51'
        },
    };

    let selectedResource = $state('studentconduct2012');
</script>

<Nav />

<div class="flex w-[720px] flex-col gap-6 mx-auto mt-5 font-display">
    <Tabs.Root value="codeOfStudentConduct">
        <Tabs.List class="mx-auto">
            <Tabs.Trigger value="codeOfStudentConduct">2012 Code of Student Conduct</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="codeOfStudentConduct">
            <Card.Root class="flex-auto">
                <Card.Header>
                    <Card.Title>2012 Code of Student Conduct</Card.Title>

                    <Card.Description>
                        OSE 太好了！
                    </Card.Description>
                </Card.Header>

                <Card.Content class="grid justify-center gap-6">
                    <div>
                        <iframe
                            src={resources['studentconduct2012'].embedSrc}
                            width=640 height=820 
                            frameborder="0" marginheight="0" marginwidth="0"
                            title={resources['studentconduct2012'].title} 
                        >
                            Loading...
                        </iframe>
                    </div>
                </Card.Content>
            </Card.Root>
        </Tabs.Content>
    </Tabs.Root>
</div>
