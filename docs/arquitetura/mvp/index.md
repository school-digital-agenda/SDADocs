# Arquitetura para o MVP

Considerando as complexidades relacionadas a micro serviços de granularidade fina, inicialmente adotaremos serviços com maior granularidade, que serão publicados por meio de contêineres, mais adiante discutiremos os padrões para desenvolvimento dos mesmo.

## Topologia Simplificada

Sendo assim, adotaremos uma simplificação da topologia, que poderá ser evoluída para a inicialmente proposta.

![Topologia Simplificada][1]

Nesta topologia retiramos o servidor de conteúdo estático, aplicações serverless e gerenciador de notificações por tópicos. Com esta topologia será possível implementar serviços que serão consumidos por uma aplicação mobile.

## Arquitetura adotada

Para a versão inicial, por conhecimento prévio da plataforma, adotaremos a AWS como provedor de cloud. Com isso temos a seguinte arquitetura para o MVP proposto:

![Arquitetura Proposta][2]


[1]: /SDADocs/assets/images/ref-arch/ref-arch-simplified.png
[2]: /SDADocs/assets/images/ref-arch/arch-aws-simplified.png
