<script lang=ts>
    import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />

<div id='main_text'>
    <p id='ose_intro' class="p-paragraph text-black">
        The Office for Student Ethics is a disciplinary body formed to help promote ethical
        student behavior and the values of Honor and Integrity as necessary complements
        to the pursuit of Academic Excellence, Social Responsibility, and Personal Development.

        Formerly the Student Disciplinary Council (SDC) formed by the Chancellor under the
        administrative supervision of the Vice Chancellor for Student Affairs,the OSE is the
        disciplinary arm of the University, as per the 2012 UP Diliman Code of Student Conduct.
    </p>
    
    <div id='services'>
        <h2 class="merriweather-medium"> Services </h2>
        <ul class="p-paragraph">
            <li> Receive copies of all complaints and case reports involving student misconduct </li>
            <li> Facilitate alternative dispute resolution (ADR) methods in cases involving less serious misconduct committed outside the jurisdiction of a college. </li>
            <li> Form ad hoc committees that will hear and resolve cases involving serious misconduct, except intellectual dishonesty, and less serious misconduct involving more than one college. </li>
            <li> Monitor the progress and resolution of all cases, including enforcement of corrective measures, and submit status reports to the Chancellor. </li>
            <li> Accept and process requests for student disciplinary clearance. </li>
        </ul>
    </div>

    <div id='history'>
        <h2 class="merriweather-medium"> History </h2>
        <div>
            <p>(Todo)</p>
        </div>
    </div>

    <div>
        <div id='vision_mission'>
            <div id='vision'>
                <h2 class="merriweather-medium"> Vision </h2>
                <p class="p-paragraph">
                    A safe and nurturing University environment where students learn civility, veer away
                    from destructive behavior, develop nationalism and social responsibility, and thrive
                    in a community of scholars that uphold the highest standards of honor and excellence.
                </p>
            </div>
            <div id='mission'>
                <h2 class="merriweather-medium"> Mission </h2>
                <ul class="p-paragraph">
                    <li> Orient faculty and students about the relevance of ethical conduct to academic and personal life. </li>
                    <li> Ensure fair, just, and effective promotion of ethical behavior, moral consciousness, peaceful management of conflicts, and enforcement of principled discipline. </li>
                    <li> nitiate review of the Code as a living document. </li>
                    <li> Facilitate the development of students' social and behavioral skills that would help them excel in a globally competitive environment. </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style>
    * {
        color: white;
    }

    /* :global(body) {
        margin-left: 10rem; 
        margin-right: 1rem;
    } 
        
    Do not do this. It will apply a margin for the whole page.
    Meaning it will also apply a margin to the navbar and header
    */

    #main_text {
        margin-left: 10rem;
        margin-right: 10rem;
        /* margin-bottom: 10rem; There is a green shadow here that needs to be resolved.*/
    }

    :global(h2) {
        font-size: 2rem;
        font-family: 'Times New Roman', 'Times New Roman', Times, serif;
    }

    #ose_intro {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    #history, #vision, #mission, #services{
        border-left: 0.1rem solid #EDAE1A;
        margin-bottom: 1rem;
        padding: 1rem;
    }

    #mission {
        margin-bottom: 0rem;
    }
</style>