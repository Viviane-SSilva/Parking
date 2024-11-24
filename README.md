# Sistema de Estacionamento - 

Bem-vindo ao **Sistema de Estacionamento**! Este projeto foi desenvolvido para simular e gerenciar o fluxo de veículos em um estacionamento, permitindo o registro de entrada, saída e cálculos automáticos.

---

## 📜 Descrição do Projeto

Este sistema foi projetado para atender à gestão de um estacionamento com as seguintes funcionalidades:

- **Controle de vagas**: Máximo de 40 vagas disponíveis, suportando carros e motos.
- **Registro de veículos**: Cadastro de placa, modelo, CPF, nome, telefone e data/hora da entrada.
- **Validação de entrada**: Permissão de entrada apenas se houver vagas disponíveis.
- **Controle de saída**: Verificação pela placa se o veículo está estacionado.
- **Cálculo automático de tarifas**:
  - R$ 2,00 pela primeira hora.
  - R$ 2,15 por cada hora adicional.

---

## 🛠️ Funcionalidades

1. **Quantidade de veículos estacionados no momento**:
   - Mostra o número de veículos atualmente ocupando as vagas.

2. **Quantidade de veículos totais**:
   - Exibe a quantidade total de veículos que passaram pelo estacionamento desde o início.

3. **Receita total acumulada**:
   - Calcula a receita gerada até o momento considerando todas as saídas.

---

## 📂 Estrutura do Projeto

O sistema é dividido em módulos para facilitar a gestão e expansão do código:

- **Entrada**: Controle e validação de vagas disponíveis.
- **Saída**: Verificação do veículo e cálculo de tarifas.
- **Relatórios**: Exibição de métricas importantes como veículos totais, ocupação e receita.

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/Viviane-SSilva/parking.git
   cd parking
