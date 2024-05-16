const frm = document.getElementById('calculate');
frm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('event', e);

    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (isNaN(height) || height <= 0) {
        document.getElementById('results').innerHTML = `Please enter a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        document.getElementById('results').innerHTML = `Please enter a valid weight.`;
    } else {
        const result = (weight / ((height * height) / 10000)).toFixed(2);
        let message = `<span>${result}</span><br>`;

        if (result < 18) {
            message += "You are underweight.";
        } else if (result >= 18 && result < 24) {
            message += "You are within the normal range.";
        } else {
            message += "You are overweight.";
        }

        document.getElementById('results').innerHTML = message;
    }
});
