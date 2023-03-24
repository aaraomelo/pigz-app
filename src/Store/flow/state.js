export const FlowInitialState = {
  "type": "object",
  "description": "Fluxos",
  "properties": {
    "form": {
      "type": "object",
      "description": "Fluxo do formulário",
      "properties": {
        "step": {
          "type": "integer",
          "description": "Estado atual do Fluxo",
          "state": 0,
        }
      }
    }
  }
};
