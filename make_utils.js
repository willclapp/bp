// create an array of 0s of the specified length
function createArray(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(0);
    }
    return arr;
}

// Get random number between 0 and 99
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
} 

// Get an array of the ids for the current block
function getIds(word_array, start, stop) {
    let out_arr = [];
    for (let i = start; i < stop; i++) {
        out_arr.push(word_array[i].id);
    }
    return out_arr;
}

function generateBlankTrials(audio_array, response_array, quantity, audio_template, response_template, audio_data_template, response_data_template) {
    for (let i = 0; i < quantity; i++) {
        // for audio
        let audio_copy = {};
        for (let key in audio_template) {
            audio_copy[key] = audio_template[key];
        }  
        let audio_data_copy = {};
        for (let key in audio_data_template) {
            audio_data_copy[key] = audio_data_template[key];
        }
        audio_data_copy.Order = i + 1;
        audio_copy.data = audio_data_copy;
        audio_array.push(audio_copy);

        // for response
        let response_copy = {};
        for (let key in response_template) {
            response_copy[key] = response_template[key];
        }
        let response_data_copy = {};
        for (let key in response_data_template) {
            response_data_copy[key] = response_data_template[key];
        }
        response_data_copy.Order = i + 1;
        response_copy.data = response_data_copy;
        response_array.push(response_copy);
    }
}


function generateDiscrimTrials(trial_list, audio_trials, response_trials, phase, num_trials) {
    for (let i = 0; i < num_trials; i++) {
        audio_trials[i].stimulus = './audio/discrim/' + trial_list[i] + '.wav'
        audio_trials[i].data.chord = trial_list[i].substring(0,6)
        response_trials[i].data.chord = trial_list[i].substring(0,6)
        audio_trials[i].data.Phase = phase
        response_trials[i].data.Phase = phase

        if (trial_list[i].includes("correct1")) {
            audio_trials[i].data.correct = "first"
            response_trials[i].data.correct = "first"
        } else {
            audio_trials[i].data.correct = "second"
            response_trials[i].data.correct = "second"
        }

        if (trial_list[i].includes("sharp")) {
            audio_trials[i].data.direction = "sharp"
            response_trials[i].data.direction = "sharp"
        } else {
            audio_trials[i].data.direction = "flat"
            response_trials[i].data.direction = "flat"
        }

        if (audio_trials[i].stimulus.includes("3.wav")) {
            audio_trials[i].data.interval = "third"
            response_trials[i].data.interval = "third"
        } else {
            audio_trials[i].data.interval = "fifth"
            response_trials[i].data.interval = "fifth"
        }

        if (trial_list[i].includes("q")) {
            audio_trials[i].data.magnitude = "quarter"
            response_trials[i].data.magnitude = "quarter"
        } else {
            audio_trials[i].data.magnitude = "half"
            response_trials[i].data.magnitude = "half"
        }
    }
}
    
function generateExposureTrials(trial_list, trial_order, audio_trials, response_trials, num_trials) {
    for (let i = 0; i < num_trials; i++) {
        audio_trials[i].stimulus = './audio/chord_progressions/' + trial_order[i] + "/" + trial_list[i] + ".wav"
        audio_trials[i].data.correct = trial_order[i]
        response_trials[i].data.correct = trial_order[i]
        audio_trials[i].data.chord = trial_list[i]
        response_trials[i].data.chord = trial_list[i]
    }
}