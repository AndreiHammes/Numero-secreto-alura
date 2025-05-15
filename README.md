# Fluxograma do projeto

```mermaid
graph LR
    A[Início do Jogo] --> B[Exibir Mensagem Inicial]
    B --> C[Definir Número Secreto]
    C --> D[Ler Chute do Usuário]
    
    D -->|Chute Correto| E[Exibir Mensagem de Acerto]
    E --> F[Permitir Reiniciar Jogo]
    F --> G[Fim do Jogo]
    
    D -->|Chute Incorreto| H[Comparar Chute com Número Secreto]
    H -->|Chute Maior| I[Informar que o Número é Menor]
    I --> J[Aumentar Contador de Tentativas]
    J --> K[Limpar Campo de Entrada]
    K --> D
    
    H -->|Chute Menor| L[Informar que o Número é Maior]
    L --> J
    J --> K
    K --> D
    
    F -->|Reiniciar Jogo| M[Gerar Novo Número Secreto]
    M --> N[Reiniciar Variáveis]
    N --> B
