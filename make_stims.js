let num_pre = discrim.length/2;
let num_exposure = repeated_chords.length + unique_chords.length;
let num_post = discrim.length/2;

let discrim_audio_data = {
    ID: 0,
    Order: 0,
    Phase: 'UNKNOWN', 
    chord: 'Unknown',
    correct: 'UNKNOWN',
    direction: "UNKNOWN",
    magnitude: "UNKNOWN",
    interval: "UNKNOWN"
}

let discrim_audio_temp = {
    stimulus: 'UNKNOWN', 
    type: 'audio-keyboard-response', 
    prompt: '<div class="big-container"><p style="font-size:30px">Which chord was in-tune?</p><div class="yes-no"><div class="option-container"><p>First</p><p>Press D</p></div><div class="option-container"><p>Second</p><p>Press K</p></div></div></div>', 
    trial_ends_after_audio: true, 
    post_trial_gap: 0, 
    response_allowed_while_playing: false, 
    choices: ['d', 'k'], 
    data: {}
}

let discrim_response_data = {
    Order: 0,
    Phase: 'UNKNOWN', 
    ID: 0,
    chord: 'Unknown',
    correct: 'UNKNOWN',
    direction: "UNKNOWN",
    magnitude: "UNKNOWN",
    interval: "UNKNOWN"
}

let discrim_response_temp = {
    type: 'html-keyboard-response', 
    choices: ['d', 'k'], 
    stimulus: '<div class="big-container"><p style="font-size:30px">Which chord was in-tune?</p><div class="yes-no"><div class="option-container"><p>First</p><p>Press D</p></div><div class="option-container"><p>Second</p><p>Press K</p></div></div></div>',
    trial_duration: 4000, 
    post_trial_gap: 0, 
    data: {}
}

let exposure_audio_data = {
    ID: 0,
    Order: 0,
    Phase: 'Exposure', 
    chord: 'Unknown',
    correct: 'UNKNOWN'
}

let exposure_audio_temp = {
    stimulus: 'UNKNOWN', 
    type: 'audio-keyboard-response', 
    prompt: '<div class="big-container"><p style="font-size:30px">Was any chord repeated?</p><div class="yes-no"><div class="option-container"><p>Repeated</p><p>Press D</p></div><div class="option-container"><p>Unique</p><p>Press K</p></div></div></div>', 
    trial_ends_after_audio: true, 
    post_trial_gap: 0, 
    response_allowed_while_playing: false, 
    choices: ['d', 'k'], 
    data: {}
}

let exposure_response_data = {
    Order: 0,
    Phase: 'exposure', 
    ID: 0,
    chord: 'Unknown',
    correct: 'UNKNOWN',
}

let exposure_response_temp = {
    type: 'html-keyboard-response', 
    choices: ['d', 'k'], 
    stimulus: '<div class="big-container"><p style="font-size:30px">Was any chord repeated?</p><div class="yes-no"><div class="option-container"><p>Repeated</p><p>Press D</p></div><div class="option-container"><p>Unique</p><p>Press K</p></div></div></div>',
    trial_duration: 4000, 
    post_trial_gap: 0, 
    data: {},
    on_finish: function(data) {
        if (data.correct == 'repeated') {
            correct_response = 68
        } else {
            correct_response = 75
        }
        if (data.key_press == null) {
            data.correct = false;
            data.case = 'NO_RESPONSE'
        } else {
            if (correct_response == data.key_press) {
                data.case = "Hit";
            } else {
                data.case = "Miss"
            }
        }
    }
}

// generate the trial objects
let pre_audio_objects = [];
let pre_response_objects = [];
let exposure_audio_objects = [];
let exposure_response_objects = [];
let post_audio_objects = [];
let post_response_objects = [];

generateBlankTrials(pre_audio_objects, pre_response_objects, num_pre, discrim_audio_temp, discrim_response_temp, discrim_audio_data, discrim_response_data);
generateDiscrimTrials(first_discrim, pre_audio_objects, pre_response_objects, "pre", num_pre)

generateBlankTrials(exposure_audio_objects, exposure_response_objects, num_exposure, exposure_audio_temp, exposure_response_temp, exposure_audio_data, exposure_response_data);
generateExposureTrials(exp_trial_list, exp_order, exposure_audio_objects, exposure_response_objects, num_exposure)

generateBlankTrials(post_audio_objects, post_response_objects, num_post, discrim_audio_temp, discrim_response_temp, discrim_audio_data, discrim_response_data);
generateDiscrimTrials(second_discrim, post_audio_objects, post_response_objects, "post", num_post)



// Create preload array
let preload_array = [];

for (let i = 0; i < num_pre; i++) {
    preload_array.push(pre_audio_objects[i].stimulus);
}
for (let i = 0; i < num_exposure; i++) {
    preload_array.push(exposure_audio_objects[i].stimulus);
}
for (let i = 0; i < num_post; i++) {
    preload_array.push(post_audio_objects[i].stimulus);
}

preload_array.push("./audio/misc/balloon.wav")