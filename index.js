let timeline = [];

// let irb = {
//     type: 'html-button-response',
//     stimulus: '<div class ="irb"><img src="../../imgs/SUSig_2color_Stree_Stacked_Left.png" alt="Stanford University Logo" class="logo"><p id="legal"><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p></div>',
//     choices: ['Continue']
// };

// timeline.push(irb);

let general_instructions = {
    type: 'html-button-response',
    stimulus: `<div class="gen_ins"><p>In this experiment, you will hear recordings and will make decisions about them.<br><br>IMPORTANT: Please only accept this task if you are listening through headphones and working in a quiet environment.<br><br></p></div>`,
    choices: ['Continue']
};

timeline.push(general_instructions);

// let audio_check_instructions = {
//     type: 'html-keyboard-response',
//     stimulus: `<div class="gen_ins"><p>Before the experiment begins, we'd like to do a quick audio check. During the audio check, you'll hear someone say a word, and you just have to type that word in the box. Once you type the correct word, you will be directed to the study.<br><br>When you're ready, press the space bar to begin the audio check.</p></div>`,
//     choices: ['space']
// }

// timeline.push(audio_check);



let instructions = {
    type: 'html-keyboard-response',
    stimulus: '<div class="spec_ins"><p>In this experiment, you will hear sound recordings of a series of musical chords, two at a time. In each pair, one chord is <em>in-tune</em> and one chord is <em>out-of-tune</em>. Your job is to decide which chord was <em>in-tune</em>.<br><br>If you think the first chord was in-tune, press the \'D\' key on your keyboard. If you think the second chord was in-tune, press the \'K\' key on your keyboard.<br><br>You can tell a chord is in-tune if it sounds comfortable, stable, and natural. Out-of-tune chords will sound less comfortable, like an old piano or a children\'s orchestra.<br><br>Make sure to listen carefully and proceed as quickly and accurately as you can. You must answer within 4 seconds, or the next chords will play automatically.<br><br>When you\'re ready to begin, press the space bar.</p></div>',
    choices: ['space']
};

timeline.push(instructions);

for (i = 0; i < num_pre; i++) {
    timeline.push(pre_audio_objects[i]);
    timeline.push(pre_response_objects[i]);
    timeline.push(inter_trial)
}

let end_practice = {
    type: 'html-keyboard-response',
    stimulus: `<div class="spec_ins"><p>Great job! The first round of the experiment is complete.<br><br>The next section is a little different. Instead of hearing two chords and deciding which was in tune, you'll hear progressions of five chords and decide whether the same chord occurred twice in the progression.<br><br>If you're not sure what that would sound like, here's and example of a chord progression where two chords are <b>repeated</b>. In this case, it's the third and fifth chords that are repeated, but repeated chords could fall anywhere in the series.<br><br><audio src="./audio/chord_progressions/repeated/E2H2A3_B2E2G2_D2F2H2_F2J2B3_D2F2H2.wav" controls>Your browser does not support the <code>audio</code> element.</audio></audio></p><br><br>And the following is an example of a chord progression where each chord is <b>unique</b>.<br><br><audio src="./audio/chord_progressions/unique/E2H2A3_B2E2G2_A2C2E2_F2J2B3_D2F2H2.wav" controls>Your browser does not support the <code>audio</code> element.</audio><br><br>If you think that there was a <b>repeated</b> chord, press the <em>D</em> key, and if you think that every chord was <b>unique</b>, press the <em>K</em> key. This time, you will receive feedback on your responses. If you're correct, the screen will turn green, and if you're incorrect, the screen will turn red. <br><br>Listen to the examples as many times as you need to and then press the space bar when you're ready to proceed.</p></div></div><br><br>`,
    choices: ['space'],
    on_start: function() {
        jsPsych.setProgressBar(0);
    }
};

timeline.push(end_practice);

for (i = 0; i < num_exposure; i++) {
    timeline.push(exposure_audio_objects[i]);
    timeline.push(exposure_response_objects[i]);
    timeline.push(feedback_trial)
}

let post_instructions = {
    type: 'html-keyboard-response',
    stimulus: `<div class="spec_ins"><p>Great work on the first two sections. Now you're ready for the third and final phase. This section will be identical in procedure to the first section. You'll hear two chords and decide which sounds in-tune. Just like in the first section, if you think the first chord was in-tune, press the \'D\' key on your keyboard. If you think the second chord was in-tune, press the \'K\' key on your keyboard.<br><br>When you\'re ready to begin, press the space bar.</p></div>`,
    choices: ['space']
};

timeline.push(post_instructions);

for (i = 0; i < num_post; i++) {
    timeline.push(post_audio_objects[i]);
    timeline.push(post_response_objects[i]);
    timeline.push(inter_trial)
}

let social_instructions = {
    type: 'html-keyboard-response',
    stimulus: '<div class="pre-test-container"><p>Great Job! You finished the Experiment.<br><br>To help us interpret our results, it would be helpful to learn a little more about you. Please answer the following questions.</p><br>Press the space bar to continue.</div>',
    choices: ['space'],
    post_trial_gap: 250
}

timeline.push(social_instructions)

var survey1 = {
    type: 'survey-html-form',
    preamble: '<p><br>We would like you to answer the following questions. <br>If you\'d rather not answer, select "Prefer not to say" or type "NA".</p><br>',
    html: '<ol class="input-wrapper">' +
        hand +
        gender +
        age +
        language +
        music +
        '</ol>'
};

var survey2 = {
    type: 'survey-html-form',
    preamble: '<p><br>We would like you to answer answer the following questions. <br>If you\'d rather not answer, select "Prefer not to say" or type "NA".</p><br>',
    html: '<ol class="input-wrapper">' +
        audio +
        problems +
        comments +
        '</ol>'
};

timeline.push(survey1)
timeline.push(survey2)

jsPsych.init({
    preload_audio: preload_array, 
    timeline: timeline,
    show_progress_bar: true,
    auto_update_progress_bar: true,
    on_finish: function(data) {
        proliferate.submit({"trials": data.values()});
      }
    // on_finish: function () {
    //     jsPsych.data.displayData('csv');
    // }
});