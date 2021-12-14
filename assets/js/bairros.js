document.addEventListener("DOMContentLoaded", function(){

  const file_path = '/epp/assets/html/html_dict.json';
  let obj = load_json(file_path);  
});


function load_json(file_path) {
  fetch(file_path)
  .then(response => response.text())
  .then(data => {
      const obj = JSON.parse(data);
      const select_cargo = document.getElementById('sel_cargo');
      const select_year = document.getElementById('sel_ano');
      const select_contagem = document.getElementById('sel_contagem');
      const select_cand = document.getElementById('sel_cand');

      for (const [cargo, _years_dict] of Object.entries(obj)) {
        cargo_option = new Option(cargo, cargo);
        select_cargo.add(cargo_option, undefined);
      }

      select_cargo.onchange = (e) => {
        e.preventDefault();
        removeAll(select_year);
        const option = new Option('---', '---');
        select_year.add(option, undefined);
        
        removeAll(select_contagem);
        const option1 = new Option('---', '---');
        select_contagem.add(option1, undefined);
        document.querySelector('#tabelas').innerHTML = '';

        removeAll(select_cand);
        const option2 = new Option('---', '---');
        select_cand.add(option2, undefined);
        document.querySelector('#mapa_folium').innerHTML = ''

        cargo = select_cargo.value;
        if (cargo !== '---') {
          let years_dict = obj[cargo];
          console.log(obj);
          for (const [ano, _files_dict] of Object.entries(years_dict)) {
            year_option = new Option(ano, ano);
            select_year.add(year_option, undefined);
          }
        }
      }

      

      select_year.onchange = (e) => {
        e.preventDefault();
        
        removeAll(select_contagem);
        const option = new Option('---', '---');
        select_contagem.add(option, undefined);
        document.querySelector('#tabelas').innerHTML = '';

        removeAll(select_cand);
        const option1 = new Option('---', '---');
        select_cand.add(option1, undefined);
        document.querySelector('#mapa_folium').innerHTML = ''

        cargo = select_cargo.value;
        ano = select_year.value;
        if (ano !== '---') {
          contagem_dict = obj[cargo][ano];
          for (const [contagem, _files_dict] of Object.entries(contagem_dict)) {
            contagem_option = new Option(contagem, contagem);
            select_contagem.add(contagem_option, undefined);
          }
        }
      }

      select_contagem.onchange = (e) => {
        e.preventDefault();
        removeAll(select_cand);
        const option = new Option('---', '---');
        select_cand.add(option, undefined);
        document.querySelector('#mapa_folium').innerHTML = ''

        cargo = select_cargo.value;
        ano = select_year.value;
        contagem = select_contagem.value;
        if (contagem === '---'){
          document.querySelector('#tabelas').innerHTML = '';
        }
        else {
          // console.log(obj[cargo][ano][contagem]);
          input_file = obj[cargo][ano][contagem]['tabela'];
          document.querySelector('#tabelas').innerHTML = get_iframe(input_file);
          // load_map(table_file);
        }
        
        if (contagem !== '---') {
          cand_dict = obj[cargo][ano][contagem]['mapas'];
          for (const [cand, cand_file] of Object.entries(cand_dict)) {
            const option = new Option(cand, cand_file);
            select_cand.add(option, undefined);
            // console.log(cand, cand_file)
          }
        }
      }

      select_cand.onchange = (e) => {
        e.preventDefault();
        input_file = select_cand.value;
        document.querySelector('#mapa_folium').innerHTML = get_iframe(input_file);
      }

    });
}

function removeAll(selectBox) {
  while (selectBox.options.length > 0) {
      selectBox.remove(0);
  }
}


// function load_table(input_file) {
//   console.log(input_file);
//   if (input_file === "---") {
//     document.querySelector('#mapa_folium').innerHTML = '';
//   }
//   else {
//     let iframe_html = '<iframe src="' + input_file + '" allowfullscreen="" width="100%" height="400px" frameborder="0"></iframe>';
//     document.querySelector('#mapa_folium').innerHTML = iframe_html;
//   }
// }

// function load_map(input_file) {
//   // console.log(input_file);
//   if (input_file === "---") {
//     document.querySelector('#mapa_folium').innerHTML = '';
//   }
//   else {
//     let iframe_html = '<iframe src="' + input_file + '" allowfullscreen="" width="100%" height="400px" frameborder="0"></iframe>';
//     document.querySelector('#mapa_folium').innerHTML = iframe_html;
//   }
// }

function get_iframe(input_file) {
  // console.log(input_file);
  if (input_file === "---") {
     return '';
  }
  else {
    let iframe_html = '<iframe src="' + input_file + '" allowfullscreen="" width="100%" height="400px" frameborder="0"></iframe>';
    return iframe_html;
  }
}
