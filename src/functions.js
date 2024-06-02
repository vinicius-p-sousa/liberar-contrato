import apiConfig from "./apiConfig";

// https://villanettelecom.portalinternet.com.br/radiusnet/index.php/api/v1/cp/${cpfCliente}

async function getClientePlanoSCM(cpfCliente, apiUrl, apiToken) {
  const res = await fetch(`${apiUrl}index.php/api/v1/cp/${cpfCliente}`, {
    headers: { RTOKEN: apiToken }
  })

  const dadosCliente = await res.json();
  if (dadosCliente.error) {
    throw 'Cliente não encontrado'
  }

  const clientePlanoSCM = dadosCliente.rows[0].planos.filter(plano => (plano.login !== null))[0]
  return clientePlanoSCM
}

async function getCobrancaPlanoEmAtraso(idClientePlano, apiUrl, apiToken) {
  const res = await fetch(`${apiUrl}index.php/api/v1/cbp/at/${idClientePlano}`, {
    headers: { RTOKEN: apiToken }
  })
  const cobrancas = await res.json();
  if (cobrancas.error) {
    throw 'Cliente não tem nenhum boleto em atraso'
  }
  return cobrancas

}
async function putPromessaPagamento(idCobrancaEmAtraso, apiUrl, apiToken) {
  const res = await fetch(`${apiUrl}index.php/api/v1/ppg/${idCobrancaEmAtraso}`, {
    method: "PUT",
    headers: { RTOKEN: apiToken }
  })
  const result = await res.json();
  return result.rows
}


export async function liberarContratoCliente(cpf, rede) {
  const apiUrl = apiConfig[rede].url
  const apiToken = apiConfig[rede].token

  try {
    const clientePlanoSCM = await getClientePlanoSCM(cpf, apiUrl, apiToken)
    const cobrancasEmAtraso = await getCobrancaPlanoEmAtraso(clientePlanoSCM.id_cliente_plano, apiUrl, apiToken);
    const resultado = await putPromessaPagamento(cobrancasEmAtraso.rows[0].id_cobranca, apiUrl, apiToken);

    return resultado
  } catch (error) {
    return { error: true, msg: error };
  }
}
