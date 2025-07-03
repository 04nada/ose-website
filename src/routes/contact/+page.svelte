<script lang=ts>
    import Nav from "$lib/components/Nav.svelte";

    let oseMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4675525899556!2d121.07101661027964!3d14.654090985779586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7000041b7a9%3A0x8476495df1ffacb4!2sOffice%20for%20Student%20Ethics!5e1!3m2!1sen!2sph!4v1750837884069!5m2!1sen!2sph"
</script>

<Nav />

<div>
    <div>
        <!--
        <img alt=A photosrc={} />
        -->

        <h1> Meet the Team </h1>
    </div>
    <div>
        <h1> Contact Us </h1>
        <ul>
            <li> 0981 850 0450 / 89818500 loc 4509 </li>
            <li> ose.upd@up.edu.ph </li>
            <li> Address: Room 201, Office for Student Ethics, Vinzons Hall, Diliman, Quezon City, Metro Manila </li>
        </ul>

        <iframe
            src={oseMap}
            width="600" height="450"
            style="border:0;" allow="fullscreen" loading="lazy"
            title="A display of the location of the Office for Student Ethics (OSE) in Google Maps">  
        </iframe>
    </div>
</div>


<style>
    
</style>