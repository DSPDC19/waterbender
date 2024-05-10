document.addEventListener("DOMContentLoaded", function() {
    const labels = ['5', '10', '15', '20', '25', '30'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Consumption',
            data: [0, 10, 0, 20, 40, 70],
            fill: false,
            borderColor: 'blue',
            tension: 0.1
        }]
    };

    var ctx = document.getElementById("tercer_grafico").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
