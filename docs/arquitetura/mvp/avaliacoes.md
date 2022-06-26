# Avaliações

## Soluções para identity & access management

!!! abstract "AWS Cognito"
    **Vantagens**

    - **Nativo na AWS**
    - Gerenciamento de identidades únicas
    - Suporte a MFA 
    - Armazenamento e sincronismo embarcados
    - Integração SSO
    - Free para primeiros 50000 usuários
    - Documentação abrangente

    **Desvantagens**

    - **Apesar de se apresentar como de integração simples, relatos apontam ser uma grande dor de cabeça**
    - **Customização do login é limitada**
    - Documentação complexa e frequentemente desatualizada ou inútil
    - **Faltam funcionalidades** que são básicas em outras ferramentas, como: MFA “esquecer” de um dispositivo, logout na api, recuperação do MFA.
    - **Solução atrelada ao fornecedor de Cloud**

!!! check "Keycload"
    **Vantagens**

    - **Solução Open Source**
    - Suporte a múltiplos provedores de identidade
    - Fácil de customizar
    - Mantida por desenvolvedores da Redhat
    - Suporte a MFA
    - SDK oficial para spring boot
    - Desenvolvimento de SDKs pela comunidade
    - **Funcionalidades completas**

    **Desvantagens**

    - Falta de documentação sobre uso por aplicações cliente
    - Falta SDK oficial para diversas linguagens

!!! abstract "Auth0"
    **Vantagens**

    - Integração com diversos provedores de identidade
    - Solução universal
    - Disponibilidade de SDKs
    - Integração com heroku, azure, etc
    - Suporte Enterprise
    - Documentação abrangente
    - Disponibilidade de códigos de exemplo
    - **Facilidade de integração**
    - Implantação on-premise

    **Desvantagens**

    - Alto custo quando usado em escala ou para ter todos os recursos.
    - **Versão free muito limitada**
    - **API muda constantemente**
    - Página de status não reflete a realidade
    - **Solução atrelada ao fornecedor**

Entre as soluções avaliadas decidimos seguir o estudo de viabilidade de implementar o Keycloak dentro de nossa stack, inicialmente instalado em um container no EKS.
