let atividades = [];

const adicionaAtividade = (data, atividade) => {
  atividades.push({ data, atividade });
};

const listarAtividade = () => {
  if (atividades.length === 0) {
    console.log("Nenhuma atividade cadastrada. :(");
  } else {
    console.log("\nLista de Atividades:");
    atividades.forEach((item) => {
      console.log(`Dia ${item.data}: ${item.atividade}.`);
    });
  }
};

const atualizarAtividade = (index, day, atividade) => {
  if (index >= 0 && index < atividades.legnth) {
    atividades[index] = { day, atividade };
    return true;
  }
  return false;
};

module.exports = {
  adicionarAtividade,
  listarAtividade,
  atualizarAtividade,
  removerAtividade,
};
