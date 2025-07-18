<script lang="ts">
    import Nav from "$lib/components/Nav.svelte";

    let oseMap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4675525899556!2d121.07101661027964!3d14.654090985779586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7000041b7a9%3A0x8476495df1ffacb4!2sOffice%20for%20Student%20Ethics!5e1!3m2!1sen!2sph!4v1750837884069!5m2!1sen!2sph";
  
    const forms = {
        feedbackForm: {
            title: 'OSE Services Satisfaction Feedback Form',
            embedSrc: 'https://docs.google.com/forms/d/e/1FAIpQLSf95eYshbpzuww3QqP76gvkw24vCh2Qj8V3GgKDezfYfY54Hg/viewform',
            publicLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf95eYshbpzuww3QqP76gvkw24vCh2Qj8V3GgKDezfYfY54Hg/viewform'
        }
    };
</script>

<Nav />

<div id="main_text">
    <div class="flex flex-row justify-between items-start w-[90%] mx-auto mt-10">
        <div class="flex-shrink-0">
            <div>
                <h1 class="text-2xl merriweather-medium">Meet the Team</h1>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <div>
                <h1 class="text-2xl font-bold mb-4 merriweather-medium">Contact Us</h1>
                <ul class="space-y-2 font-display">
                    <li>0981 850 0450 / 89818500 loc 4509</li>
                    <li>ose.upd@up.edu.ph</li>
                    <li>
                        Address: Room 201, Office for Student Ethics, Vinzons Hall, Diliman,
                        Quezon City, Metro Manila
                    </li>
                </ul>
            </div>

            <iframe
                src={oseMap}
                width="500"
                height="400"
                class="rounded shadow border-3 border-white"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                title="A display of the location of the Office for Student Ethics (OSE) in Google Maps"
            ></iframe>
        </div>
    </div>

    <div class="pb-10">
        <h1 class="text-2xl merriweather-medium m-10">Feedback Form</h1>
        <p class = "m-10">
            The Office for Student Ethics (OSE) is committed to providing a fair and efficient process for all stakeholders/client. To help us improve our services, we would like to hear about your experience with the OSE.
        </p>

        <div class="flex flex-row justify-evenly items-start w-[90%] mx-auto mt-10">
            <iframe
                src={forms['feedbackForm'].embedSrc}
                width=640 height=720 
                frameborder="0" marginheight="0" marginwidth="0"
                title={forms['feedbackForm'].title} 
            >
                Loading...
            </iframe>
        </div>
    </div>
</div>

<style>
    * {
        color: white;
        /* font-family: 'Times New Roman', 'Times New Roman', Times, serif; */
    }

    #main_text {
        margin-right: 5rem;
        margin-left: 5rem;
    }
</style>