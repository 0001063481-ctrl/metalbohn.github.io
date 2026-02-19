document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inicializar o Mapa focado no Brasil
    // Coordenadas centrais aproximadas do Brasil e Zoom 4
    const map = L.map('map-logistica').setView([-14.235, -51.925], 4);

    // 2. Adicionar o Tile Layer (O visual do mapa)
    // Usaremos o 'CartoDB Voyager' que é limpo e profissional para negócios
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // 3. Definição dos ícones customizados
    // Ícone da Fábrica (Laranja/Vermelho)
    const factoryIcon = L.divIcon({
        className: 'custom-pin factory-pin',
        html: '<i class="fas fa-industry"></i>',
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    // Ícone dos CDs (Azul)
    const cdIcon = L.divIcon({
        className: 'custom-pin cd-pin',
        html: '<i class="fas fa-warehouse"></i>',
        iconSize: [35, 35],
        iconAnchor: [17, 35]
    });

    // 4. Dados das Localizações
    const locations = {
        factory: {
            coords: [-29.168, -51.179], // Caxias do Sul
            title: "Fábrica Matriz",
            desc: "Produção + Cross-docking"
        },
        cds: [
            { coords: [-30.034, -51.217], title: "CD Sul", city: "Porto Alegre" },
            { coords: [-16.686, -49.264], title: "CD Centro-Norte", city: "Goiânia" },
            { coords: [-8.047, -34.877], title: "CD Nordeste", city: "Recife" }
        ]
    };

    // 5. Plotar a Fábrica
    L.marker(locations.factory.coords, {icon: factoryIcon})
     .addTo(map)
     .bindPopup(`<b>${locations.factory.title}</b><br>${locations.factory.desc}`)
     .openPopup();

    // 6. Plotar os CDs e as Linhas de Conexão
    locations.cds.forEach(cd => {
        // Adiciona o Marcador
        L.marker(cd.coords, {icon: cdIcon})
         .addTo(map)
         .bindPopup(`<b>${cd.title}</b><br>${cd.city}<br>Atendimento 48h`);

        // Desenha a linha da Fábrica até o CD (Curva Bezier simulada ou reta)
        const latlngs = [
            locations.factory.coords,
            cd.coords
        ];

        const polyline = L.polyline(latlngs, {
            color: '#1e3a8a', // Azul corporativo
            weight: 3,
            opacity: 0.7,
            dashArray: '10, 10', // Linha tracejada para indicar fluxo
            className: 'anim-line' // Classe para animar via CSS depois se quiser
        }).addTo(map);
    });
});