document.addEventListener("DOMContentLoaded", function(){

  // init_str = get_initial_html();
  // form_str = get_from_html();

  
  const votacao_bairro = document.getElementById('Tabelas');
  if (votacao_bairro) {
    let div_bairros = document.createElement("div");
    div_bairros.innerHTML = get_initial_html();
    votacao_bairro.append(div_bairros);
  }


  const votacao_mapas = document.getElementById('Mapas');
  if (votacao_mapas) {
    let div_mapas = document.createElement("div");
    div_mapas.innerHTML = get_from_html();
    votacao_mapas.append(div_mapas);
  }

  const cand_eleitos = document.getElementById('Candidatos-Eleitos');
  if (cand_eleitos) {
    let div_eleitos = document.createElement("div");
    div_eleitos.innerHTML = get_sel_eleitos();
    cand_eleitos.append(div_eleitos);
  }
  
  
  
  const file_path = '/epp/assets/html/html_dict.json';
  load_json(file_path);

  const elected_file_path = '/epp/assets/html/elected_html_dict.json';
  get_elected_json(elected_file_path);
});

function get_initial_html() {
  const initial_html = `
  <div class="post-content e-content" itemprop="articleBody">
    <div class="output_area">
      <form>
        <div class="form-group row">
        <p>Selecione um cargo:</p>
          <div class="col-sm-2">
            <select class="form-control" id="sel_cargo">
              <option value="---">---</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
        <p>Selecione a forma de contagem:</p>
          <div class="col-sm-2">
            <select class="form-control" id="sel_contagem">
            </select>
          </div>
        </div>
        <div class="form-group row">
        <p>Candidata(o):</p>
        <div class="col-sm-2">
            <select class="form-control" id="sel_candidata">
            </select>
          </div>
        </div>
      </form>
      <div id="tabelas">tabelas aqui</div>
  `
  return initial_html;
}

function get_from_html() {
  const form_html = `
  <form>
    <div class="form-group row">
    <p>Selecione o ano, ou a variação para o mapa:</p>
    <div class="col-sm-4">
      <select class="form-control" id="sel_cand">
      </select>
    </div>
    </div>
  </form>
  <div id="mapa_folium"></div>
  `
  return form_html;
}

function get_sel_eleitos() {
  const inner_html = `
  <div class="post-content e-content" itemprop="articleBody">
    <div class="output_area">
      <form>
        <div class="form-group row">
        <p>Selecione um cargo:</p>
          <div class="col-sm-2">
            <select class="form-control" id="sel_cargo_elected">
              <option value="---">---</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
        <p>Selecione um ano:</p>
          <div class="col-sm-2">
            <select class="form-control" id="sel_ano_elected">
            </select>
          </div>
        </div>
        <div class="form-group row">
        <p>Selecione o grupo de partidos:</p>
          <div class="col-sm-2">
            <select class="form-control" id="sel_partidos_elected">
            </select>
          </div>
        </div>
      </form>
      <div id="tabelas_eleitos">tabelas aqui</div>
  `
  return inner_html;
}
 

function load_json(file_path) {
  fetch(file_path)
  .then(response => response.text())
  .then(data => {
      const obj = JSON.parse(data);
      const select_cargo = document.getElementById('sel_cargo');
      const select_year = document.getElementById('sel_contagem');
      const select_contagem = document.getElementById('sel_candidata');
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

function get_elected_json(file_path) {
  fetch(file_path)
  .then(response => response.text())
  .then(data => {
    const obj = JSON.parse(data);
    const select_cargo = document.getElementById('sel_cargo_elected');
    const select_year = document.getElementById('sel_ano_elected');
    const select_partidos = document.getElementById('sel_partidos_elected');    

    for (const [cargo, _years_dict] of Object.entries(obj)) {
      cargo_option = new Option(cargo, cargo);
      select_cargo.add(cargo_option, undefined);
    }

    select_cargo.onchange = (e) => {
      e.preventDefault();
      removeAll(select_year);
      const option = new Option('---', '---');
      select_year.add(option, undefined);

      document.querySelector('#tabelas_eleitos').innerHTML = '';
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
      
      removeAll(select_partidos);
      const option = new Option('---', '---');
      select_partidos.add(option, undefined);
      document.querySelector('#tabelas_eleitos').innerHTML = '';

      cargo = select_cargo.value;
      ano = select_year.value;
      if (ano !== '---') {
        partidos_dict = obj[cargo][ano];
        for (const [partidos, _file] of Object.entries(partidos_dict)) {
          partidos_option = new Option(partidos, partidos);
          select_partidos.add(partidos_option, undefined);
        }
      }
    }

    select_partidos.onchange = (e) => {
      e.preventDefault();
      
      cargo = select_cargo.value;
      ano = select_year.value;
      partidos = select_partidos.value;
      if (partidos === '---'){
        document.querySelector('#tabelas_eleitos').innerHTML = '';
      }
      else {
        // console.log(obj[cargo][ano][contagem]);
        input_file = obj[cargo][ano][partidos];
        document.querySelector('#tabelas_eleitos').innerHTML = get_iframe(input_file);
        // load_map(table_file);
      }
    }
  });
}

function removeAll(selectBox) {
  while (selectBox.options.length > 0) {
      selectBox.remove(0);
  }
}

function get_iframe(input_file) {
  // console.log(input_file);
  if (input_file === "---") {
     return '';
  }
  else {
    let iframe_html = '<iframe src="' + input_file + '" allowfullscreen="" width="100%" height="800px" frameborder="0"></iframe>';
    return iframe_html;
  }
}
