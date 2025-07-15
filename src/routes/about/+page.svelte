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

        <h3 class="merriweather-semibold mb-2">Who are we when no one is watching?</h3>
        <p class="p-paragraph">
                This simple but profound question lies at the heart of the transformation that gave birth to the Office for Student Ethics (OSE) at UP Diliman. 
                In a university that upholds honor and excellence, character is not imposed. It is chosen, owned, and nurtured. 
                The history of the OSE is more than a shift in office names, it unravels a deeper philosophical shift in how we understand discipline, 
                not as punishment, but as restorative and transformative education.
                </p>

        <h3 class="merriweather-semibold mt-8 mb-2">From Tribunals to Ethics, A Pathway Toward Restorative Justice?</h3>
        <p class="p-paragraph">
                   The origins of the Office for Student Ethics date back to 1976, with the establishment of the Student Disciplinary Tribunal (SDT). 
                   Then, student discipline in UP Diliman was litigious in nature, heavily patterned after legal procedures. 
                   The SDT was closely tied to the Diliman Legal Office and echoed the courtroom setup, with lawyers, and formal adjudications. 
                   This reflected a time when discipline was seen as an external imposition rather than an internal opportunity for growth. 
                   However, not all cases fit neatly into this adversarial model. In 2003, the University recognized the specific need for a more focused mechanism to address sexual harassment. 
                   Thus, the Office of Anti-Sexual Harassment (OASH) was created following the Anti-Sexual Harassment Code passed on December 11, 2003. 
                   OASH handled these sensitive cases with a trauma-informed approach, distinct from the broader mandate of the SDT.
                </p>
        <p class="p-paragraph mt-2">
                By 2014, a significant structural and philosophical shift occurred. The SDT evolved into the Student Disciplinary Council (SDC). 
                This change reduced the formal role of legal counsels, reflecting a desire to move away from adversarialism and toward a more educational model. 
                The SDC emphasized community norms and peer accountability, better aligning with the university’s identity as a community of scholars. 
                </p>
        <p class="p-paragraph mt-2">
                The most radical transformation came in 2019, when the UP Board of Regents renamed the SDC to the Office for Student Ethics (OSE). 
                This wasn’t just a rebranding, it was a reframing. The new office was designed to integrate research and training module development into its mandate, shifting the entire orientation from punitive measures to restorative justice and ethical development. 
                The OSE now works actively to educate and reorient students toward responsible and ethical agency.
                </p>

        <h3 class="merriweather-semibold mt-8 mb-2">A Community of Scholars, Not Sinners</h3>
        <p class="p-paragraph">
                UP Diliman is not a court of law; it is a university with a community of autonomous and thinking individuals. 
                We are not here to brand students with metaphorical scarlet letters, as in Hawthorne’s dystopic tale. 
                Instead, the OSE stands for healing, accountability, and reintegration. 
                Its restorative nature allows for Alternative Dispute Resolution (ADR) in minor cases, especially those occurring outside the jurisdiction of individual colleges. 
                This means fewer hearings and more dialogue, less litigation and more learning.
                </p>
         <p class="p-paragraph mt-2">
                Through these changes, the Office for Student Ethics affirms that discipline is not just about correcting behavior. 
                It’s about building character through ethical reflection, and championing community responsibility. 
                We hold ourselves, and each other, to a higher standard because we are scholars. 
                And scholars do not hide behind rules, they live by principles.
                </p>
        <p class="p-paragraph mt-2">
                So again, we ask: Who are we when no one is watching? At UP Diliman, the answer is clear: We are ethical agents, shaping not just our futures, 
                but the moral fabric of our university and society.
                </p>
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