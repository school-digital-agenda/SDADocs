function draw_radar(my_entries) {
    radar_visualization({
        svg_id: "radar",
        width: 950,
        height: 1300,
        colors: {
          background: "#fff",
          grid: "#bbb",
          inactive: "#ddd"
        },
        quadrants: [
          { name: "Linguagens & Frameworks" },
          { name: "Ferramentas" },
          { name: "Gerenciamento de Dados" },
          { name: "Plataformas & Infraestrutura" }
        ],
        rings: [
          { name: "ADOTE", color: "#53c43d" },
          { name: "EXPERIMENTE", color: "#7781cd" },
          { name: "AVALIE", color: "#fce832" },
          { name: "EVITE", color: "#f45753" }
        ],
        print_layout: true,
        entries: my_entries
      });
}

function toEnty(row) {
    return {
        label: row.name,
        quadrant: ['LINGUAGENS & FRAMEWORKS','FERRAMENTAS','GERENCIAMENTO DE DADOS','PLATAFORMAS & INFRAESTRUTURA'].indexOf(row.quadrant.trim()),
        ring: ["ADOTE","EXPERIMENTE","AVALIE","EVITE"].indexOf(row.ring.trim()),
        link: row.link,
        moved: ['down','none','up'].indexOf(row.moved.trim()) - 1,
        active: true
    }
}

fetch('/assets/stubs/techradar.csv')
  .then(function (resp) {
    return resp.text();
  })
  .then(function (csv) {
    var entries = d3.csvParse(csv, function(row) {
      return toEnty(row);
    });
    draw_radar(entries);
  });