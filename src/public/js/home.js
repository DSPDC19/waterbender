


document.addEventListener("DOMContentLoaded", function() {

    var ctx= document.getElementById("primer_grafico").getContext('2d');
    var migrafica= new Chart(ctx,{
    type:"doughnut",
    data:{
    labels:['Potable water'],
    datasets:[{
        label:'Num datos',
        data: [16],
        backgroundColor: [
                        'rgba(29, 141, 224, 1)', // Color de fondo para cada barra
                    ],
                    borderColor: [
                        'rgba(29, 141, 224, 1)', // Borde de cada barra
                    ],
                    borderWidth: 1
                }]
            },
    });
            
    });
    
    





    


document.addEventListener("DOMContentLoaded", function() {

    var ctx= document.getElementById("segundo_grafico").getContext('2d');
    var migrafica= new Chart(ctx,{
    type:"doughnut",
    data:{
    labels:['Non-potable water'],
    datasets:[{
        label:'Num datos',
        data: [16],
        backgroundColor: [
                        'rgba(57, 15, 223, 1)', // Color de fondo para cada barra
                    ],
                    borderColor: [
                        'rgba(57, 15, 223, 1)', // Borde de cada barra
                    ],
                    borderWidth: 1
                }]
            },
    });
            
    });
    





    document.addEventListener("DOMContentLoaded", function() {
        const labels = ['5', '10', '15', '20', '25', '30'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'Consumption',
                data: [0, 10, 50, 33, 45, 9],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
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








    document.addEventListener("DOMContentLoaded", function() {
        const labels = ['Dic', 'Ene', 'Feb'];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Potable',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(29, 141, 224, 1)',
                    borderColor: 'rgb(29, 141, 224)',
                    borderWidth: 1
                },
                {
                    label: 'Non-potable',
                    data: [45, 75, 60, 55, 70, 50, 65],
                    backgroundColor: 'rgba(57, 15, 223, 1)',
                    borderColor: 'rgb(57, 15, 223)',
                    borderWidth: 1
                }
            ]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        var myChart = new Chart(
            document.getElementById('cuarto_grafico'),
            config
        );
    });