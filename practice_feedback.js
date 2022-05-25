let feedback_trial = {
    type: 'html-keyboard-response',
    trial_duration: 1000, 
    response_ends_trial: false,
    stimulus: function() {
        var last_trial_case = jsPsych.data.get().last(1).values()[0].case;
        // console.log(last_trial_case);
        if(last_trial_case == "Hit"){
            return '<div class="right-container"><p class="right-text">Correct</p></div>'; 
        } else {
            return '<div class="wrong-container"><p class="wrong-text">Incorrect</p></div>'
        }
    }
}

let inter_trial = {
    type: 'html-keyboard-response',
    trial_duration: 1000,
    response_ends_trial: false,
    stimulus: '<div class="big-container"><div class="yes-no"><div class="between-container"><p>NEW</p><p>Press D</p></div><div class="between-container"><p>OLD</p><p>Press K</p></div></div></div>'  
}
