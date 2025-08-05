<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";
    import { onMount } from 'svelte';
    import Footer from "$lib/components/Footer.svelte";

    let oseMap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4675525899556!2d121.07101661027964!3d14.654090985779586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7000041b7a9%3A0x8476495df1ffacb4!2sOffice%20for%20Student%20Ethics!5e1!3m2!1sen!2sph!4v1750837884069!5m2!1sen!2sph";
  
    const forms = {
        feedbackForm: {
            title: 'OSE Services Satisfaction Feedback Form',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLSf95eYshbpzuww3QqP76gvkw24vCh2Qj8V3GgKDezfYfY54Hg/viewform',
            publicLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf95eYshbpzuww3QqP76gvkw24vCh2Qj8V3GgKDezfYfY54Hg/viewform'
        }
    };

    let img1;
    let img2;
    onMount(() => {
        const h1 = img1.clientHeight;
        const h2 = img2.clientHeight;
        const minHeight = Math.min(h1, h2);

        img1.style.height = `${minHeight}px`;
        img2.style.height = `${minHeight}px`;
    });
</script>

<Nav />

<img src="/Resources/CodeOfEthics.png" alt="Code Of Ethics" class="mt-4 flex flex-row justify-center">

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 m-5">
    <div class="flex flex-col items-start p-2">
        <h1 class="text-2xl merriweather-medium text-[#7A1618]">Meet the Team</h1>
        <img src="/ContactUs/StatueGroupie.jpg" alt="The team in front of the statue of Vinzons Hall" class="flex mt-5">
    </div>
    <div class="ml-5 space-y-5">
        <div class="mt-13"></div>
        <div class="space-y-5">
            <h2 class="text-xl text-green-900">First Name, Last Name</h2>
            <p>Short Description</p>
        </div>
        
        <div class="space-y-5">
            <h2 class="text-xl text-green-900">First Name, Last Name</h2>
            <p>Short Description</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 gap-4 m-4">
            <img bind:this={img1} src="/ContactUs/OblationGroupie.jpg" alt="The team standing in front of Quezon Hall" class="flex w-auto object-contain">
            <img bind:this={img2} src="/ContactUs/Collage.jpg" alt="Collage" class="flex w-auto object-contain">
        </div>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-bggreen">
    <div class="flex flex-col items-start m-5">
        <h1 class="text-2xl merriweather-medium text-[#EDAE1A]">Feedback Forms</h1>
        <p class="text-white mb-5">The Office for Student Ethics (OSE) is committed to providing a fair and efficient process for all stakeholders/client. To help us improve our services, we would like to hear about your experience with the OSE.</p>
        <iframe
            src={forms['feedbackForm'].embedSrc}
            title={forms['feedbackForm'].title} 
            class="w-full h-150 md:h-150 rounded shadow"
        >
            Loading...
        </iframe>
    </div>
    <div class="flex flex-col items-start m-5">
        <h1 class="text-2xl font-bold mb-4 merriweather-medium text-[#EDAE1A]">Contact Us</h1>
        <ul class="space-y-2 font-display text-white mb-4">
            <li>0981 850 0450 / 89818500 loc 4509</li>
            <li>ose.upd@up.edu.ph</li>
            <li>
                Address: Room 201, Office for Student Ethics, Vinzons Hall, Diliman,
                Quezon City, Metro Manila
            </li>
        </ul>
        <iframe
            src={oseMap}
            width="500"
            height="400"
            class="rounded shadow border-3 border-white w-full h-full"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            title="A display of the location of the Office for Student Ethics (OSE) in Google Maps"
        ></iframe>
    </div>
</div>

<Footer />

<style>
</style>
<!-- I'm not sure why removing this causes the website to crash -->