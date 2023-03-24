export const FormInitialState = {
  "type": "object",
  "title": "Quero vender no Pigz",
  "subtitle": "Dê o primeiro passo para aumentar suas vendas",
  "description": "Cadastro do cliente",
  "properties": {
    "name": {
      "type": "string",
      "title": "Nome",
      "description": "Nome completo do cliente",
      "placeholder": "Leonercio Goesfeeld",
      "validation": {
        "required": true
      }
    },
    "email": {
      "type": "string",
      "title": "E-mail",
      "description": "Email do cliente",
      "placeholder": "leonercio.goesfeeld@email.com",
      "validation": {
        "required": true,
        "pattern": '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|.(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      }
    },
    "phone": {
      "type": "string",
      "title": "Telefone",
      "description": "Telefone do cliente",
      "placeholder": "(95) 99876-5432",
      "mask": "phone",
      "validation": {
        "required": true,
        "pattern": '^[1-9]{2}9[7-9]{1}[0-9]{3}[0-9]{4}$',
      }
    },
    "store": {
      "type": "object",
      "description": "Cadastro da loja",
      "properties": {
        "address": {
          "type": "object",
          "title": "Onde fica a sua loja?",
          "description": "Endereço da loja",
          "properties": {
            "cep": {
              "type": "string",
              "title": "CEP",
              "description": "CEP",
              "placeholder": "00000-00",
              "mask": "cep",
              "validation": {
                "required": true,
                "pattern": '^[0-9]{5}[0-9]{3}'
              },
              "inputType": "postal",
              "$bind": {
                "type": "object",
                "description": "Conexão com o formulário de endereço",
                "pointer": "form.properties.store.address",
                "properties": {
                  "postalCode": "{cep}",
                  "city": "{city}",
                  "state": "{state}",
                  "street": "{address}",
                  "number": "{number}",
                  "complement": "{complement}"
                }
              }
            },
            "state": {
              "type": "string",
              "title": "Estado",
              "description": "Estado",
              "placeholder": "UF",
              "validation": {
                "required": true
              },
              "inputType": "dropdown",
              "enum": [
                "AC",
                "AL",
                "AP",
                "AM",
                "BA",
                "CE",
                "DF",
                "ES",
                "GO",
                "MA",
                "MT",
                "MS",
                "MG",
                "PA",
                "PB",
                "PR",
                "PE",
                "PI",
                "RJ",
                "RN",
                "RS",
                "RO",
                "RR",
                "SC",
                "SP",
                "SE",
                "TO"
              ]
            },
            "city": {
              "type": "string",
              "title": "Cidade",
              "description": "Cidade",
              "placeholder": "Selecione",
              "validation": {
                "required": true
              },
              "inputType": "dropdown",
              "enum": [
                "Boa Vista"
              ]
            },
            "address": {
              "type": "string",
              "title": "Endereço",
              "description": "Endereço",
              "placeholder": "Avenida Brasil",
              "validation": {
                "required": true
              }
            },
            "number": {
              "type": "string",
              "title": "Número",
              "description": "Número",
              "placeholder": "123",
              "validation": {
                "required": true
              }
            },
            "complement": {
              "type": "string",
              "title": "Complemento",
              "description": "Complemento",
              "placeholder": "Sala 1",
              "validation": {
                "required": false
              }
            }
          },
          "actions": [
            {
              "type": "setFlowStep",
              "title": "Próximo",
              "payload": {
                "pointer": "flow.properties.form",
                "value": 2
              }
            }
          ]
        },
        "profile": {
          "type": "object",
          "title": "Me conta um pouco sobre a sua loja",
          "description": "Perfil da loja",
          "properties": {
            "name": {
              "type": "string",
              "title": "Nome da loja",
              "description": "Nome da loja",
              "placeholder": "Restaurante Todo Mundo Gosta",
              "validation": {
                "required": true
              }
            },
            "cnpj": {
              "type": "string",
              "title": "CNPJ da loja",
              "description": "CNPJ",
              "placeholder": "12.345.678/0001-99",
              "mask": "cnpj",
              "validation": {
                "required": true,
                "pattern": '[0-9]{2}?[0-9]{3}?[0-9]{3}?[0-9]{4}?[0-9]{2}'
              }
            },
            "type": {
              "type": "string",
              "title": "Tipo de loja",
              "description": "Tipo de loja",
              "placeholder": "Selecione",
              "validation": {
                "required": true
              },
              "inputType": "dropdown",
              "enum": [
                "Restaurante",
                "Pizzaria",
                "Sorveteria",
                "Papelaria"
              ]
            }
          },
          "actions": [
            {
              "type": "sendForm",
              "title": "Concluir",
              "payload": {
                "pointer": "form.state"
              }
            }
          ]
        }
      }
    }
  },
  "actions": [
    {
      "type": "setFlowStep",
      "title": "Continuar",
      "payload": {
        "pointer": "flow.properties.form",
        "value": 1
      }
    }
  ]
};
