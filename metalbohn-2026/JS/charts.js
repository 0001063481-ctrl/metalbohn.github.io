document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('resultsChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            // Rótulos do Eixo X
            labels: ['OTIF (%)', 'Prazo (Dias)', 'Custo Logístico (%)', 'Ruptura (%)'],
            datasets: [
                {
                    label: '2025 (Cenário Atual)',
                    data: [82, 7, 18, 12],
                    backgroundColor: 'rgba(220, 38, 38, 0.8)', // Vermelho
                    borderColor: 'rgba(220, 38, 38, 1)',
                    borderWidth: 1
                },
                {
                    label: '2027 (Projetado)',
                    data: [97, 2.8, 10, 2],
                    backgroundColor: 'rgba(22, 163, 74, 0.8)', // Verde
                    borderColor: 'rgba(22, 163, 74, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { font: { size: 14, family: "'Montserrat', sans-serif" } }
                },
                title: {
                    display: true,
                    text: 'Comparativo de Performance Logística',
                    font: { size: 18 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#e2e8f0' }
                }
            }
        }
    });
});